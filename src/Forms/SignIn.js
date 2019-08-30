import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Elements } from 'react-stripe-elements';
import { compose } from 'recompose';
import { Input } from './Input';
import { withFirebase } from '../components/Firebase';
import Form, { FormContext } from './Form';

const DEFAULT_BUTTON_TEXT = 'Sign in';

class SignIn extends React.Component {
  state = {
    error: {},
    buttonText: DEFAULT_BUTTON_TEXT,
  };

  handleSubmit = async handleSignIn => {
    this.setState({ buttonText: 'loading...' });

    try {
      await handleSignIn();
      this.props.history.push('/admin');
    } catch (error) {
      this.setState({ error, buttonText: DEFAULT_BUTTON_TEXT });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="paper">
            <div className="form-spacer">
              <Typography component="h1" variant="h5">
                Admin
              </Typography>
              <Elements>
                <Form>
                  <Input name="adminEmail" label="Email Address" type="email" />
                  <Input name="password" label="Password" type="password" />
                  {this.state.error && <span style={{ color: 'red' }}>{this.state.error.message}</span>}
                  <div style={{ marginTop: '2rem' }}>
                    <FormContext.Consumer>
                      {({ handleSignIn }) => (
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          onClick={() => this.handleSubmit(handleSignIn)}>
                          {this.state.buttonText}
                        </Button>
                      )}
                    </FormContext.Consumer>
                  </div>
                </Form>
              </Elements>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default compose(
  withRouter,
  withFirebase
)(SignIn);
