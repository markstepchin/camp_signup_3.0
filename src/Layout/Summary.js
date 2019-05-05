import React from "react";
import Typography from "@material-ui/core/Typography";
import { calcNumDays, calcCost } from "../Utils";
import { COST_PER_DAY } from "../Constants";
import moment from "moment";

const Summary = ({ user: { firstName, lastName, email, startDate, endDate } }) => (
  <>
    <Typography variant="h6" gutterBottom>
      Summary
    </Typography>
    <h5>Personal Details</h5>
    Name: {firstName} {lastName}<br />
    Email: {email}

    <h5>Payment Details</h5>
    July {getDay(startDate)}-{getDay(endDate)}<br />
    {calcNumDays(startDate, endDate)} days<br />
    cost/day: ${COST_PER_DAY}
    <h4>Total Cost: ${calcCost(startDate, endDate)}</h4>
  </>
);

const getDay = day => {
  if (day !== "") {
    return moment(day).date();
  }
  
  return "";
}

export default Summary;
