import React from "react";
import Typography from "@material-ui/core/Typography";
import { calcNumDays, calcCost } from "../Utils";
import { COST_PER_DAY } from "../Constants";
import moment from "moment";

const Payment = ({ visible, startDate, endDate, firstName, lastName, email, gender }) => 
  visible ? 
    <form className="form-spacer">
      <Typography variant="h6" gutterBottom>
        Summary
      </Typography>
      <h5>Personal Details</h5>
      {`Name: ${firstName.value} ${lastName.value}`}<br />
      {`Email: ${email.value}`}<br />
      {`Gender: ${gender.value}`}

      <h5>Payment Details</h5>
      {`July ${getDay(startDate.value)}-${getDay(endDate.value)}`}<br />
      {`${calcNumDays(startDate.value, endDate.value)} days`}<br />
      {`cost/day: $${COST_PER_DAY}`}
      <h4>{`Total Cost: $${calcCost(startDate.value, endDate.value)}`}</h4>

      <h1>Credit Card Form goes here</h1>
    </form>  
  : null;

const getDay = day => {
  if (day !== "") {
    return moment(day).date();
  } else {
    return ""
  }
}


export default Payment;
