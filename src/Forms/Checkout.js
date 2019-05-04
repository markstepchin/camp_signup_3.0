import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import SignUpSuccess from "../SignUpSuccess";
import Form from "./Form";

class Checkout extends React.Component {
  state = {
    activeStep: 0,
  };

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

  render() {
    const { activeStep } = this.state;

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
              <SignUpSuccess />
            ) : (
              <React.Fragment>
                <Form activeStep={activeStep}/>
                <div className="button-container">
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
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </div>
      </div>
    )
  }
}

const steps = ["Dates", "Personal Details", "Payment"];

export default Checkout;
