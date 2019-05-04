import React from "react";
import Typography from "@material-ui/core/Typography";
import { calcCost } from "../Utils";
import Input from "./Input";
import { FormContext } from "./Form"; 

const Dates = ({ visible }) => 
  visible ? 
    <React.Fragment>
    <form className="form-spacer">
      <Typography variant="h6" gutterBottom>
        Dates
      </Typography>
      <Input
        name="startDate"
        label="Start"
        type="date"
      />
      <Input
        name="endDate"
        label="End"
        type="date"
      />
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
