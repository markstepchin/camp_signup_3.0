import React, { useContext } from 'react';
import { CardElement } from 'react-stripe-elements';
import { FormContext } from './Form';
import Summary from '../Layout/Summary';

const Payment = ({ visible }) => {
  const {
    data: {
      values: { firstName, lastName, email, startDate, endDate },
      errors: { creditCard },
    },
  } = useContext(FormContext);

  return visible ? (
    <form className="form-spacer">
      <Summary user={{ firstName, lastName, email, startDate, endDate }} />

      <h2 style={{ marginTop: '4rem' }}>Credit Card Information</h2>
      <div className="credit-card-form">
        <CardElement />
      </div>
      <p className="error-text">{creditCard}</p>
    </form>
  ) : null;
};

export default Payment;
