import React from "react";
import { withAuthorization } from "../components/Session"; 

const DashBoard = () => (
  <h1>DashBoard</h1>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(DashBoard);
