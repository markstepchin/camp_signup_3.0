import React from "react";
import { withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Form from "./Form";
import Input from "./Input";
import { FormContext } from "./Form"; 
import { withFirebase } from "../components/Firebase";

class SignIn extends React.Component {
  state = {
    error: {}
  }

  onSubmit = (username, password) => {
    this.props.firebase.doSignInWithEmailAndPassword(username, password)
      .then(authUser => {
        this.props.history.push("/admin");
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    return (
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
                {this.state.error && <span style={{color: 'red'}}>{this.state.error.message}</span>}
                <div style={{marginTop: '2rem'}}>
                  <FormContext.Consumer>
                    {({data: { adminEmail, password }}) => (
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={() => this.onSubmit(adminEmail.value, password.value)}
                      >
                        Sign in
                      </Button>
                    )}
                  </FormContext.Consumer>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(withFirebase(SignIn));
