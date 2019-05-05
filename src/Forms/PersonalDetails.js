import React from "react";
import Typography from "@material-ui/core/Typography";
import { Input } from "./Input";

const PersonalDetails = ({ visible }) => 
  visible ? 
    <form className="form-spacer">
      <Typography variant="h6" gutterBottom>
        Personal Details
      </Typography>
      <Input 
        name="firstName"
        label="First Name *"
      />
      <Input 
        name="lastName"
        label="Last Name *"
      />
      <Input
        name="email"
        label="Email *"
      /> 
    </form> 
  : null;

export default PersonalDetails;
