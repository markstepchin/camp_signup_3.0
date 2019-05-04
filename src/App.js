import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Checkout from "./Forms/Checkout";
import Details from "./Layout/Details";
import SignIn from "./Forms/SignIn";
import Admin from "./Layout/DashBoard"
import './App.css';
import SignOutButton from "./components/SignOutButton";

class App extends Component {
  render() {
    return (
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
  }
}

const Page = ({children}) => children;

const FooterLayout = ({children}) => (
  <div className="footer-layout">
    {children}
    <span className="copyrite">&copy; Mark Stepchin, 2019</span>
  </div>
);

const EmptyFooter = () => <FooterLayout />;

const LandingPageFooter = () => 
  <FooterLayout>
    <Link to="/sign-in">admin</Link>
  </FooterLayout>;

const SignInFooter = () => 
  <FooterLayout> 
    <Link to="/">Camp Info</Link>
  </FooterLayout>;

const SignOutFooter = () => 
  <FooterLayout> 
    <SignOutButton />
  </FooterLayout>;

export default App;
