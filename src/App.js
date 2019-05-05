import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from "./Forms/Checkout";
import Details from "./Layout/Details";
import SignIn from "./Forms/SignIn";
import Admin from "./Layout/DashBoard";
import './App.css';
import { withAuthentication } from "./components/Session";
import { EmptyFooter, LandingPageFooter, SignInFooter, SignOutFooter } from "./Layout/Footers";

const App = () => (
  <Router>
    <Switch>
      <Route path="/checkout" component={() => 
        <>
          <Checkout />
          <EmptyFooter />
        </>}/>
      <Route path="/sign-in" component={() => 
        <>
          <SignIn />
          <SignInFooter />
        </>}/>
      <Route path="/admin" component={() =>
        <>
          <Admin />
          <SignOutFooter />
        </>} />
      <Route path="/" component={() =>
        <>
          <Details />
          <LandingPageFooter />
        </>} />
    </Switch>
  </Router>
);

export default withAuthentication(App);
