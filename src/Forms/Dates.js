import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { calcCost } from "../Utils";
import { Select }  from "./Input";
import { FormContext } from "./Form";
import moment from "moment";
import { dateOptions } from "../constants/DateOptions";

const Dates = ({ visible }) => {
  const { data: { values: { startDate, endDate } } } = useContext(FormContext);

  const isOptionDisabled = (option, name) => {
    if (name === "startDate") {
      return moment(option).isAfter(moment(endDate));
    } 
    
    return moment(option).isBefore(moment(startDate));
  };

  return (
    visible ? 
      <form className="form-spacer">
        <Typography variant="h6" gutterBottom>
          Dates
        </Typography>
        <Select 
          name="startDate"
          label="Start"
          options={dateOptions}
          isOptionDisabled={isOptionDisabled}
        />
        <br />
        <Select 
          name="endDate"
          label="End"
          options={dateOptions}
          isOptionDisabled={isOptionDisabled}
        />
        <br />
        <DisplayCost />
      </form>  
    : null
  )
}

const DisplayCost = () => {
  const { data: { values: { startDate, endDate } } } = useContext(FormContext);

  return (
    <>
      <p>cost/day: $25</p>
      <p>{`Total Cost: $${calcCost(startDate, endDate)}`}</p>
    </>
  )}

export default Dates;
