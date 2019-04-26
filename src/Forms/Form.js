import React, { Component } from "react";
import produce from "immer";
import PersonalDetails from "./PersonalDetails";
import Dates from "./Dates";
import Payment from "./Payment";

class Form extends Component {
  state = {
    formControls: {
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
    }
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState(
      produce(draft => {
        draft.formControls[name].value = value;
        draft.formControls[name].valid = value.trim() !== "";
      })
    )
  }

  handleBlur = e => {
    const name = e.target.name;

    this.setState(
      produce(draft => {
        draft.formControls[name].touched = true
      })
    )
  }

  render() {
    const { formControls } = this.state;
    const { activeStep } = this.props;

    return (
      <React.Fragment>
        <Dates 
          startDate={formControls.startDate} 
          endDate={formControls.endDate} 
          handleChange={this.handleChange}
          handleBlur={this.handleBlur}
          visible={activeStep === 0}
        />
        <PersonalDetails 
          firstName={formControls.firstName}
          lastName={formControls.lastName}
          email={formControls.email}
          gender={formControls.gender}
          handleChange={this.handleChange}
          handleBlur={this.handleBlur}
          visible={activeStep === 1}
        />
        <Payment 
          {...formControls} 
          visible={activeStep === 2}
        />
      </React.Fragment>
    )
  }
}

export default Form;
