import React from "react";
import TextField from "@material-ui/core/TextField";
import { FormContext } from "./Form";

const Input = ({label, name, type}) => (
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

const showError = field => !field.valid && field.touched;
const errorMessage = field => field.touched && !field.valid ? field.errorMessage : " ";

export default Input;
