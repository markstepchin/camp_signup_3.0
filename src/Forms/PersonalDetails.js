import React from "react";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const PersonalDetails = ({firstName, lastName, email, gender, handleChange, handleBlur}) => (
  <form className="form-spacer">
    <Typography variant="h6" gutterBottom>
      Personal Details
    </Typography>
    <div className="form-field">
      <TextField 
        name="firstName"
        label="First Name *"
        value={firstName.value}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!firstName.valid && firstName.touched}
        helperText={firstName.touched && !firstName.valid ? firstName.errorMessage : ' '}
        fullWidth={true}
        autoFocus={true}
      />
    </div>
    <div className="form-field">
      <TextField
        name="lastName"
        label="Last Name *"
        value={lastName.value}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!lastName.valid && lastName.touched}
        helperText={lastName.touched && !lastName.valid ? lastName.errorMessage : ' '}
        fullWidth={true}
      />
    </div>
    <div className="form-field">
      <TextField 
        name="email"
        label="Email *"
        value={email.value}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!email.valid && email.touched}
        helperText={email.touched && !email.valid ? email.errorMessage : ' '}
        fullWidth={true}
      />
    </div>
    <div className="extra-margin-top">
      <FormControl component="fieldset" className='margin-top'>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          aria-label="Gender"
          name="gender"
          className=''
          value={gender.value}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>
    </div>  
  </form> 
)

export default PersonalDetails;