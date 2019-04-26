import React, { Component } from "react";
import produce from "immer";
import PersonalDetails from "./PersonalDetails";
import Dates from "./Dates";
import Payment from "./Payment";

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
    }
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

  render() {
    const { startDate, endDate, firstName, lastName, email, gender } = this.state;
    const { activeStep } = this.props;

    return (
      <React.Fragment>
        <Dates 
          data={{startDate, endDate}}
          handleChange={this.handleChange}
          handleBlur={this.handleBlur}
          visible={activeStep === 0}
        />
        <PersonalDetails 
          data={{firstName, lastName, email, gender}}
          handleChange={this.handleChange}
          handleBlur={this.handleBlur}
          visible={activeStep === 1}
        />
        <Payment 
          {...this.state} 
          visible={activeStep === 2}
        />
      </React.Fragment>
    )
  }
}

export default Form;
