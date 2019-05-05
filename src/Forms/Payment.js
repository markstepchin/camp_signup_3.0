import React, { useContext } from "react";
import { FormContext } from "./Form"; 
import Summary from "../Layout/Summary";

const Payment = ({ visible }) => {
  const { data: { values: { firstName, lastName, email, startDate, endDate } } } = useContext(FormContext);

  return (
    visible ? 
      <form className="form-spacer">
        <Summary user={{ firstName, lastName, email, startDate, endDate }}/>
        <h1>Credit Card Form goes here</h1>
      </form>  
    : null
  )
}

export default Payment;
