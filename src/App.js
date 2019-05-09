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
        <Page>
          <Checkout />
          <EmptyFooter />
        </Page>}/>
      <Route path={SIGN_IN} component={() => 
        <Page>
          <SignIn />
          <SignInFooter />
        </Page>}/>
      <Route path={ADMIN} component={() =>
        <Page>
          <Admin />
          <SignOutFooter />
        </Page>} />
      <Route path={LANDING} component={() =>
        <Page style={{justifyContent: 'center'}}>
          <Details />
          <LandingPageFooter />
        </Page>} />
    </Switch>
  </Router>
);

const Page = ({children}) => <div style={{display: 'flex', flexDirection: 'column', justifyContent: "space-between", height: '100%'}}>{children}</div>

export default withAuthentication(App);
