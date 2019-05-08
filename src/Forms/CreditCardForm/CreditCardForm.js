import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography";
import { CardElement, injectStripe } from 'react-stripe-elements';

class CreditCardForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // User clicked submit
  }

  render() {
    return (
      <div className="">
        <p style={{marginTop: '4rem'}}></p>
        <Typography variant="h6" gutterBottom>
          Credit Card Information
        </Typography>
        <div className="checkout">
          <CardElement style={{base: {color: 'red', borderBottom: 'blue'}}}/>
        </div>
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CreditCardForm);
