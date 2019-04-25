import React from "react";
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const SignUpSuccess = () => (
  <React.Fragment>
    <div className="form-spacer">
      <Typography variant="h5" gutterBottom>
        Thank you for your order.
      </Typography>
      <Typography variant="subtitle1">
        Your order number is #2001539. We have emailed your order confirmation, and will
        send you an update when your order has shipped.
      </Typography>
    </div>
    <div className='button-container'>
      <Link to="/">
        <Button
          variant="contained"
          color="primary"
          className="button"
        >
          Finish
        </Button>
      </Link>
    </div>
  </React.Fragment>
)

export default SignUpSuccess;
