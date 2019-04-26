import React from "react";
import Typography from '@material-ui/core/Typography';
import { calcNumDays, calcCost } from "../Utils";
import { COST_PER_DAY } from "../Constants";
import moment from "moment";

class Payment extends React.Component {
  render() {
    const { startDate, endDate, firstName, lastName, email, gender } = this.props;

    return (
      <form className="form-spacer">
        <Typography variant="h6" gutterBottom>
          Summary
        </Typography>
        <h5>Personal Details</h5>
        <span>{`Name: ${firstName.value} ${lastName.value}`}</span><br />
        <span>{`Email: ${email.value}`}</span><br />
        <span>{`Gender: ${gender.value}`}</span>

        <h5>Payment Details</h5>
        <span>{`July ${getDay(startDate.value)}-${getDay(endDate.value)}`}</span><br />
        <span>{`${calcNumDays(startDate.value, endDate.value)} days`}</span><br />
        <span>{`cost/day: $${COST_PER_DAY}`}</span>
        <h4>{`Total Cost: $${calcCost(startDate.value, endDate.value)}`}</h4>

        <h1>Credit Card Form goes here</h1>
      </form>  
    )
  }
}

const getDay = day => {
  if (day !== '') {
    return moment(day).date();
  } else {
    return ''
  }
}


export default Payment;
