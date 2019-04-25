import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from "./Checkout";
import Details from "./Details";
import './App.css';

class App extends Component {
  state = {
    values: ''
  }

  displayState = values => {
    this.setState({values: JSON.stringify(values)});
  }

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