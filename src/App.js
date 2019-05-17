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
import Header from "./Layout/Header";

const App = () => (
  <Router>
    <Switch>
      <Route path={CHECKOUT} component={() => 
        <>
          <PageContent>
            <Checkout />
          </PageContent>
          <EmptyFooter />
        </>}/>
      <Route path={SIGN_IN} component={() => 
        <Page>
          <PageContent>
            <SignIn />
          </PageContent>
          <SignInFooter />
        </Page>}/>
      <Route path={ADMIN} component={() =>
        <Page>
          <PageContent>
            <Admin />
          </PageContent>
          <SignOutFooter />
        </Page>} />
      <Route path={LANDING} component={() =>
        <Page>
          <Header />
          <PageContent>
            <Details />
          </PageContent>
          <LandingPageFooter />
        </Page>} />
    </Switch>
  </Router>
);

const PageContent = ({children}) => <div className="page-content">{children}</div>;
const Page = ({children}) => <div className="page">{children}</div>

export default withAuthentication(App);
