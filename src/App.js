import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from "./Forms/Checkout";
import Details from "./Details";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/Checkout" component={() => <Checkout />}/>
          <Route path="/" component={() => <Details />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
