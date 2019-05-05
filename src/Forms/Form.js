import React, { Component, createContext } from "react";
import produce from "immer";

export const FormContext = createContext({});

class Form extends Component {
  state = {
    startDate: {
      value: "2018-07-01",
      valid: true,
      touched: false,
      errorMessage: "start date is requried",
      options: dateOptions
    },
    endDate: {
      value: "2018-07-05",
      valid: true,
      touched: false,
      errorMessage: "end date is required",
      options: dateOptions
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

  handleEndDate = startDate => {
    this.setState(
      produce(draft => {
        draft.endDate.options = dateOptions.filter(option => option.value >= startDate.value)
      })
    )
  }

  get value() {
    return {
      data: this.state,
      handleChange: this.handleChange,
      handleBlur: this.handleBlur,
      handleEndDate: this.handleEndDate
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

export const withForm = Component => props => (
  <FormContext.Consumer>
    {({ data:  { startDate, endDate, firstName, lastName, email } }) => (
      <Component {...props} hello="hello world" hello2="hi" email={email}/>
    )}
  </FormContext.Consumer>
);

const dateOptions = [
  {
    value: "2018-07-01",
    display: "July 1"
  },
  {
    value: "2018-07-02",
    display: "July 2"
  },
  {
    value: "2018-07-03",
    display: "July 3"
  },
  {
    value: "2018-07-04",
    display: "July 4"
  },
  {
    value: "2018-07-05",
    display: "July 5"
  }
]

export default Form;
