import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Input } from './Input';

const PersonalDetails = ({ visible }) =>
  visible ? (
    <form className="form-spacer">
      <Typography variant="h6" gutterBottom>
        Personal Details
      </Typography>
      <Input name="firstName" label="First Name *" type="text" />
      <Input name="lastName" label="Last Name *" type="text" />
      <Input name="city" label="City *" type="text" />
      <Input name="email" label="Email *" type="email" />
    </form>
  ) : null;

export default PersonalDetails;
