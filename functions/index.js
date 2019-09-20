const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors')({ origin: true });

const app = express();

admin.initializeApp(functions.config().firebase);

// TODO: Remember to set token using >> firebase functions:config:set stripe.token="SECRET_STRIPE_TOKEN_HERE"
const stripe = require('stripe')(functions.config().stripe.token);

function charge(req, res) {
  const body = JSON.parse(req.body);
  const token = body.token.id;
  const { amount, currency, email } = body.charge;

  console.log('body: ', req.body);

  // Charge card
  stripe.charges
    .create({
      amount,
      currency,
      description: 'PNW Youth Camp 2019',
      source: token,
      receipt_email: email
    })
    .then(createdCharge =>
      send(res, 200, {
        message: 'Success',
        createdCharge
      })
    )
    .catch(err => {
      console.log(err);
      send(res, 500, {
        error: err.message
      });
    });
}

function send(res, code, body) {
  res.send({
    statusCode: code,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(body)
  });
}

app.use(cors);
app.post('/', (req, res) => {
  // Catch any unexpected errors to prevent crashing
  try {
    charge(req, res);
  } catch (e) {
    console.log(e);
    send(res, 500, {
      error: `The server received an unexpected error. Please try again and contact the site admin if the error persists.`
    });
  }
});

exports.charge = functions.https.onRequest(app);
