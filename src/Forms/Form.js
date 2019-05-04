import React, { Component, createContext } from "react";
import produce from "immer";

export const FormContext = createContext({});

class Form extends Component {
  state = {
    startDate: {
      value: "2018-07-01",
      valid: true,
      touched: false,
      errorMessage: "start date is requried"
    },
    endDate: {
      value: "2018-07-05",
      valid: true,
      touched: false,
      errorMessage: "end date is required"
    },
    firstName: {
      value: "",
      valid: false,
      touched: false,
      errorMessage: "first name is required"
    },
    lastName: {
      value: "",
      valid: false,
      touched: false,
      errorMessage: "last name is required"
    },
    email: {
      value: "",
      valid: false,
      touched: false,
      errorMessage: "email is required"
    },
    gender: {
      value: "",
      valid: false,
      touched: false,
      errorMessage: "gender is required"
    },
    adminEmail: {
      value: "admin@email.com",
      valid: false,
      touched: false,
      errorMessage: "email address is requried"
    },
    password: {
      value: "password123",
      valid: false,
      touched: false,
      errorMessage: "password is requried"
    },
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState(
      produce(draft => {
        draft[name].value = value;
        draft[name].valid = value.trim() !== "";
      })
    )
  }

  handleBlur = ({ target: { name } }) => {
    this.setState(
      produce(draft => {
        draft[name].touched = true
      })
    )
  }

  get value() {
    return {
      data: this.state,
      handleChange: this.handleChange,
      handleBlur: this.handleBlur
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

export default Form;
