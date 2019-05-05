import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import SignUpSuccess from "../Layout/SignUpSuccess";
import Form, { FormContext } from "./Form";
import PersonDetails from "./PersonalDetails";
import Dates from "./Dates";
import Payment from "./Payment";
import { withFirebase } from "../components/Firebase";

const Steps = {
  DATES: 0,
  PERSONAL: 1,
  PAYMENT: 2
}

class Checkout extends React.Component {
  state = {
    activeStep: Steps.DATES,
    registeredUser: {}
  };

  handleNext = registeredUser => 
    this.setState(state => ({
      activeStep: state.activeStep + 1,
      registeredUser: registeredUser
    }));

  handleBack = () =>
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));

  render() {
    const { activeStep, registeredUser } = this.state;

    return (
      <div className="container">
        <div className="paper">
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <SignUpSuccess registeredUser={registeredUser}/>
            ) : (
              <React.Fragment>
                <Form>
                  <Dates visible={activeStep === Steps.DATES} />
                  <PersonDetails visible={activeStep === Steps.PERSONAL} />
                  <Payment visible={activeStep === Steps.PAYMENT} />
                  <NavigationButtons 
                    activeStep={activeStep} 
                    handleBack={this.handleBack} 
                    handleNext={this.handleNext}
                  />
                </Form>
              </React.Fragment>
            )}
          </React.Fragment>
        </div>
      </div>
    )
  }
}

const NavigationButtons = ({ activeStep, handleBack, handleNext }) => {
  const { handleRegistration, isValid } = useContext(FormContext);

  return (
    <div className='button-container'>
      {
        activeStep !== Steps.DATES ? (
        <Button onClick={handleBack} variant="contained">
          Back
        </Button>
        ) : <Link to="/" style={{textDecoration: 'none'}}><Button variant="contained">Cancel</Button></Link>
      }
  
      <Button
        variant="contained"
        color="primary"
        onClick={activeStep === Steps.PAYMENT ? () => handleRegistration(handleNext) : handleNext}
        style={{marginLeft: '.5rem'}}
        disabled={activeStep === Steps.PERSONAL && !isValid}
      >
        {activeStep === Steps.PAYMENT ? "Place order" : "Next"}
      </Button>
    </div>
  )
}

const steps = ["Dates", "Personal", "Payment"];

export default withFirebase(Checkout);
