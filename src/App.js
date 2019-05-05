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
      <Route path="/Checkout" component={() => 
        <Page>
          <Checkout />
          <EmptyFooter />
        </Page>}/>
      <Route path="/sign-in" component={() => 
        <Page>
          <SignIn />
          <SignInFooter />
        </Page>}/>
      <Route path="/admin" component={() =>
        <Page>
          <Admin />
          <SignOutFooter />
        </Page>} />
      <Route path="/" component={() =>
        <Page>
          <Details />
          <LandingPageFooter />
        </Page>} />
    </Switch>
  </Router>
);

const Page = ({children}) => children;

export default withAuthentication(App);
