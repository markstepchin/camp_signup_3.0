import React, { useContext } from "react";
import { FormContext } from "./Form"; 
import Summary from "../Layout/Summary";
import CreditCardForm from "./CreditCardForm";

const Payment = ({ visible }) => {
  const { data: { values: { firstName, lastName, email, startDate, endDate } } } = useContext(FormContext);

  return (
    visible ? 
      <form className="form-spacer">
        <Summary user={{ firstName, lastName, email, startDate, endDate }}/>
        <CreditCardForm />
      </form>  
    : null
  )
}

export default Payment;
