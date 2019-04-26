import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { calcCost } from "../Utils";

const Dates = ({ visible, data: {startDate, endDate}, handleChange }) => 
  visible ? 
    <React.Fragment>
    <form className="form-spacer">
      <Typography variant="h6" gutterBottom>
        Dates
      </Typography>
      <div className="space-between">
        <TextField
          label="Start"
          type="date"
          value={startDate.value}
          onChange={handleChange}
          name="startDate"
          inputProps={{
            min: "2018-07-01",
            max: "2018-07-05"
          }}
          fullWidth
        />
        <span className="spacer"/>
        <TextField
          label="End"
          type="date"
          value={endDate.value}
          onChange={handleChange}
          name="endDate"
          inputProps={{
            min: "2018-07-01",
            max: "2018-07-05"
          }}
          fullWidth
        />
      </div>
      <p>cost/day: $25</p>
      <p>{`Total Cost: $${calcCost(startDate.value, endDate.value)}`}</p>
    </form>  
    </React.Fragment>
  : null; 

export default Dates;
