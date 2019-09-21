import React, { useContext } from 'react';
import { CardElement } from 'react-stripe-elements';
import { FormContext } from './Form';
import { Select } from './Input';
import Summary from '../Layout/Summary';

const Payment = ({ visible }) => {
  const {
    data: {
      values: { firstName, lastName, city, email, startDate, endDate, paymentOption },
      errors: { creditCard },
    },
  } = useContext(FormContext);

  return visible ? (
    <form className="form-spacer">
      <Summary user={{ firstName, lastName, city, email, startDate, endDate }} />

      <div style={{ marginTop: '3rem', color: '#272727' }}>
        Payment
        <Select
          name="paymentOption"
          label=""
          options={paymentOptions}
          isOptionDisabled={() => false}
        />
      </div>

      {paymentOption === 'payNow' && (
        <>
          <h2 style={{ marginTop: '2rem' }}>Credit Card Information</h2>

          <div className="credit-card-form">
            <CardElement />
          </div>
          <p className="error-text">{creditCard}</p>
        </>
      )}
    </form>
  ) : null;
};

const paymentOptions = [
  {
    value: '',
    display: 'select an option',
  },
  {
    value: 'payNow',
    display: 'Pay Now',
  },
  {
    value: 'payLater',
    display: 'Pay Later',
  },
];

export default Payment;
