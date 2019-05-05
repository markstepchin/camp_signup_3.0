import React from "react";
import TextField from "@material-ui/core/TextField";
import { FormContext } from "./Form";

export const Input = ({label, name, type}) => (
  <FormContext.Consumer>
    {({data, handleChange, handleBlur}) => (
      <div className="form-field">
        <TextField 
          name={name}
          label={label}
          type={type}
          value={data[name].value}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError(data[name])}
          helperText={errorMessage(data[name])}
          fullWidth
        />
      </div>
    )}
  </FormContext.Consumer>
);

export const Select = ({ name, label, restrictEndDate }) => (
  <FormContext.Consumer>
    {({data, handleChange, handleEndDate}) => (
      <React.Fragment>
        <p style={{fontSize: '.75rem', color: 'rgba(0, 0, 0, 0.54)'}}>{label}</p>
        <select
          value={data[name].value}
          onChange={(e) => {
            handleChange(e);

            if (restrictEndDate) {
              handleEndDate(e.target)
            }
          }}
          name={name}
          style={{fontSize: '1rem', width: '100%'}}
        >
          {data[name].options
            .map((option, i) => <option value={option.value} key={i}>{option.display}</option>)}
        </select>
      </React.Fragment>
    )}
  </FormContext.Consumer>
)

const showError = field => !field.valid && field.touched;
const errorMessage = field => field.touched && !field.valid ? field.errorMessage : " ";
