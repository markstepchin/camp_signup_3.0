import React, { Component, createContext } from "react";
import { injectStripe } from 'react-stripe-elements';
import { withRouter } from "react-router-dom";
import produce from "immer";
import { compose } from "recompose";
import { withFirebase } from "../components/Firebase";
import { pick } from "lodash";
import uuid from "uuid";
import { START_DATE, END_DATE } from "../constants/CampDetails";
import { emailRegex } from "../constants/PatternMatching";
import { calcCost } from "../Utils"
export const FormContext = createContext({});

const VALIDATIONS = {
  required: value => {
    if (!value.toLowerCase().trim()) {
      throw new Error("field required");
    }

    return true;
  },
  pattern: (value, validRegex) => {
    if (!validRegex.test(value.toLowerCase().trim())) {
      throw new Error("invalid email");
    }

    return true;
  },
}

class Form extends Component {
  state = {
    values: {
      startDate: START_DATE,
      endDate: END_DATE,
      firstName: "",
      lastName: "",
      email: "",
      adminEmail: "admin@email.com",
      password: "password123"
    },
    errors: {
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      creditCard: undefined
    },
    validations: {
      firstName: {
        required: true,
      },
      lastName: {
        required: true,
      },
      email: {
        required: true,
        pattern: emailRegex  
      }
    }
  };

  get isValid() {
    const values = Object.values(pick(this.state.values, ['firstName', 'lastName', 'email']));
    const errors = Object.values(pick(this.state.errors, ['firstName', 'lastName', 'email']));

    return values.every(value => value) && errors.every(error => !error);
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState(
      produce(draft => {
        draft.values[name] = value.trim()
      }), () => this.validateField(name)
    )
  }

  validateField = name => {
    const value = this.state.values[name];
    const validations = this.state.validations[name];

    try {
      Object.keys(validations).forEach(validatorName => {
        const validator = VALIDATIONS[validatorName];
        const validatorOptions = validations[validatorName];
        validator(value, validatorOptions);

        this.setState(
          produce(draft => {
            draft.errors[name] = undefined
          })
        )
      })
    } catch(error) {
      this.setState(
        produce(draft => {
          draft.errors[name] = error.message
        })
      );
    }
  }

  handleBlur = ({ target: { name } }) => this.validateField(name);

  handleRegistration = async (handleNext) => {
    const { startDate, endDate, firstName, lastName, email } = this.state.values;

    let res = await this.props.stripe.createToken({ name: this.state.values.lastName});
      
    //on failure
    if (res.error) {
      this.setState(
        produce(draft => {
          draft.errors.creditCard = res.error.message
        })
      );
      return false
    }

    //on success
    // let response = await fetch("/charge", {
    //   method: "POST",
    //   headers: {"Content-Type": "text/plain"},
    //   body: { token: res.token.id, amount: calcCost(startDate, endDate) }
    // });
    
    // console.log("response", response);

    //writing to the database
    const userUuid = uuid();
    this.props.firebase.writeUser(userUuid)
      .set({ startDate, endDate, firstName, lastName, email })
      .then(() => 
        this.props.firebase.readUser(userUuid)
          .then(res => res.val())
          .then(user => handleNext(user))
          .catch(error => console.log(error))
      )
      .catch(error => console.log(error));
  }

  handleSignIn = async () => {
    const { adminEmail, password } = this.state.values;
    return this.props.firebase.doSignInWithEmailAndPassword(adminEmail, password)
  }

  get value() {
    return {
      data: this.state,
      handleChange: this.handleChange,
      handleBlur: this.handleBlur,
      handleRegistration: this.handleRegistration,
      handleSignIn: this.handleSignIn,
      isValid: this.isValid
    };
  }

  render() {
    return (
      <FormContext.Provider value={this.value}>
        {this.props.children}
      </FormContext.Provider>
    )
  }
}

export default compose(
  withRouter,
  withFirebase,
  injectStripe
)(Form);
