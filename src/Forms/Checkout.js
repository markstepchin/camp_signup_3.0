import React from "react";
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import PersonalDetails from "./PersonalDetails";
import Dates from "./Dates";
import Payment from "./Payment";
import SignUpSuccess from "../SignUpSuccess";

class Checkout extends React.Component {
  state = {
    activeStep: 0,
    formControls: {
      startDate: {
        value: '2018-07-01',
        valid: true,
        touched: false,
        errorMessage: 'start date is requried'
      },
      endDate: {
        value: '2018-07-05',
        valid: true,
        touched: false,
        errorMessage: 'end date is required'
      },
      firstName: {
        value: '',
        valid: false,
        touched: false,
        errorMessage: 'first name is required'
      },
      lastName: {
        value: '',
        valid: false,
        touched: false,
        errorMessage: 'last name is required'
      },
      email: {
        value: '',
        valid: false,
        touched: false,
        errorMessage: 'email is required'
      },
      gender: {
        value: '',
        valid: false,
        touched: false,
        errorMessage: 'gender is required'
      }
    }
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    const updatedFormControls = { ...this.state.formControls };
    const updatedElement = { ...this.state.formControls[name] };

    updatedElement.value = value;
    updatedElement.valid = value !== '';
    updatedFormControls[name] = updatedElement;

    this.setState({formControls: updatedFormControls});
  }

  handleBlur = e => {
    const name = e.target.name;

    const updatedFormControls = { ...this.state.formControls };
    const updatedElement = { ...this.state.formControls[name] };

    updatedElement.touched = true;
    updatedFormControls[name] = updatedElement;

    this.setState({formControls: updatedFormControls});
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  getStepContent = step => {
    const { formControls } = this.state;

    switch (step) {
      case 0:
        return <Dates 
          startDate={formControls.startDate} 
          endDate={formControls.endDate} 
          handleChange={this.handleChange}
          handleBlur={this.handleBlur}
        />;
      case 1:
        return <PersonalDetails 
          firstName={formControls.firstName}
          lastName={formControls.lastName}
          email={formControls.email}
          gender={formControls.gender}
          handleChange={this.handleChange}
          handleBlur={this.handleBlur}
        />;
      case 2:
        return <Payment {...formControls}/>;
        
      default:
        throw new Error('Unknown step');
    }
  }

  render() {
    const {activeStep} = this.state;

    return (
      <div className="container">
        <Paper className="paper">
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <SignUpSuccess />
            ) : (
              <React.Fragment>
                {this.getStepContent(activeStep)}
                <div className='button-container'>
                  {activeStep !== 0 && (
                    <Button onClick={this.handleBack} className="button">
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                    className="button"
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </div>
    )
  }
}

const steps = ['Dates', 'Personal Details', 'Payment'];

export default Checkout;