import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Summary from './Summary';

const SignUpSuccess = ({ registeredUser: { startDate, endDate, firstName, lastName, email } }) => (
  <React.Fragment>
    <div className="form-spacer">
      <Typography variant="h5" gutterBottom>
        Thanks for registering!{firstName} {lastName}!
      </Typography>
      An email with your registration details has been sent to {email}
      {/* <Summary user={{ startDate, endDate, firstName, lastName, email }} /> */}
    </div>
    <div className="button-container">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary" className="button">
          Finish
        </Button>
      </Link>
    </div>
  </React.Fragment>
);

export default SignUpSuccess;
