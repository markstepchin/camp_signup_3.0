import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from './Forms/Checkout';
import Details from './Layout/Details';
import SignIn from './Forms/SignIn';
import Admin from './Layout/DashBoard';
import ScrollToTop from './ScrollToTop';
import './App.css';
import { withAuthentication } from './components/Session';
import { EmptyFooter, LandingPageFooter, SignInFooter, SignOutFooter } from './Layout/Footers';
import { LANDING, CHECKOUT, SIGN_IN, ADMIN } from './constants/Routes';
import { LandingHeader, DashboardHeader, LoginHeader } from './Layout/Header';

const App = () => (
  <Router>
    <ScrollToTop>
      <Switch>
        <Route
          path={CHECKOUT}
          component={() => (
            <Page>
              <PageContent>
                <Checkout />
              </PageContent>
              <EmptyFooter />
            </Page>
          )}
        />
        <Route
          path={SIGN_IN}
          component={() => (
            <Page>
              <LoginHeader />
              <PageContent>
                <SignIn />
              </PageContent>
              <SignInFooter />
            </Page>
          )}
        />
        <Route
          path={ADMIN}
          component={() => (
            <Page>
              <DashboardHeader />
              <PageContent>
                <Admin />
              </PageContent>
              <SignOutFooter />
            </Page>
          )}
        />
        <Route
          path={LANDING}
          component={() => (
            <Page>
              <LandingHeader />
              <PageContent>
                <Details />
              </PageContent>
              <LandingPageFooter />
            </Page>
          )}
        />
      </Switch>
    </ScrollToTop>
  </Router>
);

const PageContent = ({ children }) => (
  <>
    <CssBaseline />
    <div className="page-content">{children}</div>
  </>
);
const Page = ({ children }) => <div className="page">{children}</div>;

export default withAuthentication(App);
