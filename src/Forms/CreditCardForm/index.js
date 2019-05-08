import React from 'react';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from './CreditCardForm';

const CreditCardForm = () => (
  <div className="example">
    <Elements>
      <CheckoutForm />
    </Elements>
  </div>
);

export default CreditCardForm;
