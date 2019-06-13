import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Firebase, { FirebaseContext } from "./components/Firebase";
import { StripeProvider } from 'react-stripe-elements';

ReactDOM.render(
  <StripeProvider apiKey="pk_test_8uMSHfRxBf5XoPD1uO3TWXBJ00cTp7km8V">
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>
  </StripeProvider>, 
  document.getElementById('root'));
