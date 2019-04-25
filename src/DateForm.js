import React from "react";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const COST_PER_DAY = 25;

const DateForm = ({startDate, endDate, handleChange}) => (
  <React.Fragment>
    <form className="form-spacer">
      <Typography variant="h6" gutterBottom>
        Dates
      </Typography>
      <div className="space-between">
        <TextField
          id="date"
          label="Start"
          type="date"
          value={startDate.value}
          onChange={handleChange}
          name="startDate"
          inputProps={{
            min: "2018-07-01",
            max: "2018-07-05"
          }}
          fullWidth={true}
        />
        <span className="spacer"/>
        <TextField
          id="date"
          label="End"
          type="date"
          value={endDate.value}
          onChange={handleChange}
          name="endDate"
          inputProps={{
            min: "2018-07-01",
            max: "2018-07-05"
          }}
          fullWidth={true}
        />
      </div>
      <p>cost/day: $25</p>
      <p>{`Total Cost: $${calcCost(calcNumDays(startDate.value, endDate.value), COST_PER_DAY)}`}</p>
    </form>  
  </React.Fragment>
)

const calcNumDays = (startDateString, endDateString) => {
  const startDate = startDateString.split('-');
  const endDate = endDateString.split('-');

  return parseInt(endDate[2]) - parseInt(startDate[2]);
}

const calcCost = (numDays, costPerDay) => numDays * costPerDay + COST_PER_DAY;

export default DateForm;
