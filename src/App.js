import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from "./Forms/Checkout";
import Details from "./Layout/Details";
import SignIn from "./Forms/SignIn";
import Admin from "./Layout/DashBoard";
import "./App.css";
import { withAuthentication } from "./components/Session";
import { EmptyFooter, LandingPageFooter, SignInFooter, SignOutFooter } from "./Layout/Footers";
import { LANDING, CHECKOUT, SIGN_IN, ADMIN } from "./constants/Routes";

const App = () => (
  <Router>
    <Switch>
      <Route path={CHECKOUT} component={() => 
        <>
          <Checkout />
          <EmptyFooter />
        </>}/>
      <Route path={SIGN_IN} component={() => 
        <>
          <SignIn />
          <SignInFooter />
        </>}/>
      <Route path={ADMIN} component={() =>
        <>
          <Admin />
          <SignOutFooter />
        </>} />
      <Route path={LANDING} component={() =>
        <>
          <Details />
          <LandingPageFooter />
        </>} />
    </Switch>
  </Router>
);

export default withAuthentication(App);
