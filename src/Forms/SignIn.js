import React from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Form from "./Form";
import Input from "./Input";

const SignIn = () => (
  <React.Fragment>
    <div className="container">
      <div className="paper">
        <div className="form-spacer">
          <Typography component="h1" variant="h5">
            Admin
          </Typography>
          <Form>
            <Input 
              name="adminEmail"
              label="Email Address"
              type="email"
            />
            <Input 
              name="password"
              label="Password"
              type="password"
            />
            <div style={{marginTop: '2rem'}}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign in
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default SignIn;
