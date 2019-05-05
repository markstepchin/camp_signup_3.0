import React from "react";
import Typography from "@material-ui/core/Typography";
import { calcCost } from "../Utils";
import { Input, Select }  from "./Input";
import { FormContext } from "./Form";

const Dates = ({ visible }) => 
  visible ? 
    <React.Fragment>
    <form className="form-spacer">
      <Typography variant="h6" gutterBottom>
        Dates
      </Typography>
      <Select 
        name="startDate"
        label="Start"
        restrictEndDate
      />
      <br />
      <Select 
        name="endDate"
        label="End"
      />
      <br />
      <DisplayCost />
    </form>  
    </React.Fragment>
  : null; 

const DisplayCost = () => (
  <FormContext.Consumer>
    {({ data: { startDate, endDate } }) => (
      <React.Fragment>
        <p>cost/day: $25</p>
        <p>{`Total Cost: $${calcCost(startDate.value, endDate.value)}`}</p>
      </React.Fragment>
    )}
  </FormContext.Consumer>
)

export default Dates;
