import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import { FormContext } from './Form';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export const Input = ({ label, name, type }) => (
  <FormContext.Consumer>
    {({ data, handleChange, handleBlur }) => (
      <div className="form-field">
        <TextField
          name={name}
          label={label}
          type={type}
          value={data.values[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={!!data.errors[name]}
          helperText={data.errors[name]}
          fullWidth
        />
      </div>
    )}
  </FormContext.Consumer>
);

export const Select = ({ name, label, options, isOptionDisabled }) => {
  const {
    data: { values },
    handleChange,
  } = useContext(FormContext);

  return (
    <>
      <p style={{ fontSize: '.75rem', color: 'rgba(0, 0, 0, 0.54)' }}>{label}</p>
      <select
        value={values[name]}
        onChange={handleChange}
        name={name}
        style={{ fontSize: '1rem', width: '100%' }}
      >
        {options.map(option => (
          <option
            disabled={isOptionDisabled(option.value, name)}
            value={option.value}
            key={option.value}
          >
            {option.display}
          </option>
        ))}
      </select>
    </>
  );
};

export const RadioButtons = ({ name, label }) => {
  const {
    data: {
      values: { churchMember },
    },
    handleChange,
  } = useContext(FormContext);

  return (
    <FormControl component="fieldset" style={{ marginTop: '2rem' }}>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        aria-label="position"
        name={name}
        value={churchMember}
        onChange={handleChange}
        row
      >
        <FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" />
        <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
      </RadioGroup>
    </FormControl>
  );
};
