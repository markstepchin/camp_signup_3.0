import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { calcCost } from "../Utils";
import { Select }  from "./Input";
import { FormContext } from "./Form";
import moment from "moment";

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
];

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
