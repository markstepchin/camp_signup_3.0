import React from "react";
import Typography from "@material-ui/core/Typography";
import { calcNumDays, calcCost } from "../Utils";
import { COST_PER_DAY } from "../Constants";
import moment from "moment";

import { FormContext } from "./Form"; 

const Payment = ({ visible }) => 
  visible ? 
    <form className="form-spacer">
      <Summary />
      <h1>Credit Card Form goes here</h1>
    </form>  
  : null;

const Summary = () => (
  <FormContext.Consumer>
    {({ data:  { startDate, endDate, firstName, lastName, email } }) => (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Summary
        </Typography>
        <h5>Personal Details</h5>
        Name: {firstName.value} {lastName.value}<br />
        Email: {email.value}

        <h5>Payment Details</h5>
        July {getDay(startDate.value)}-{getDay(endDate.value)}<br />
        {calcNumDays(startDate.value, endDate.value)} days<br />
        cost/day: ${COST_PER_DAY}
        <h4>Total Cost: ${calcCost(startDate.value, endDate.value)}</h4>
      </React.Fragment>
    )}
  </FormContext.Consumer>
);

const getDay = day => {
  if (day !== "") {
    return moment(day).date();
  }
  
  return "";
}

export default Payment;
