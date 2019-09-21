const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");
const express = require("express");
const moment = require("moment");
const cors = require("cors")({ origin: true });

const app = express();

admin.initializeApp(functions.config().firebase);

// TODO: Remember to set token using >> firebase functions:config:set stripe.token="SECRET_STRIPE_TOKEN_HERE"
const stripe = require("stripe")(functions.config().stripe.token);

function charge(req, res) {
  const body = JSON.parse(req.body);
  const token = body.token.id;
  const { amount, currency, email } = body.charge;

  console.log("body: ", req.body);

  // Charge card
  stripe.charges
    .create({
      amount,
      currency,
      description: "PNW Youth Camp 2019",
      source: token,
      receipt_email: email
    })
    .then(createdCharge =>
      send(res, 200, {
        message: "Success",
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
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(body)
  });
}

app.use(cors);
app.post("/", (req, res) => {
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

/********************************************************
 * Email Confirmation
 *********************************************************/
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport(
  {
    service: "gmail",
    auth: {
      user: gmailEmail,
      pass: gmailPassword
    }
  },
  {
    from: '"Spokane Youth Camp." <noreply@gsbcspokane.com>'
  }
);

// Sends an email confirmation when a user changes his mailing list subscription.
exports.sendEmailConfirmation = functions.database
  .ref("/users/{uid}")
  .onCreate(async change => {
    const { firstName, lastName, email, city, churchMember, payed, startDate, endDate } = change.val();

    const mailOptions = {
      to: email + ", markstepchin@gmail.com"
    };

    // Building Email message.
    mailOptions.subject = "Thank you for registering!";
    // mailOptions.text = JSON.stringify(change);
    mailOptions.html = `
    <!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <style>
          @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
          * {
            font-family: Roboto
            color: rgb(28, 28, 28)
          }
        
        </style>
      </head>
      <body class="">
      <table>
      <tr>
       <td style='font-size: 1.5rem;'>
         Thanks for registering!!!
       </td>
     </tr>
    </table>
    <table>
      <tr>
       <td style='padding-top: 2rem;'>
         Your registration details: 
       </td>
     </tr>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
     <tr>
       <td>
         <h3 style='margin: 0; width: 10rem; font-size: .7rem; text-transform: uppercase; font-weight: 500; color: rgb(89, 89, 89); padding-top: .75rem;'>
           Name
         </h3>
       </td>
     </tr>
     <tr> 
       <td>
         <h5 style='margin: 0; color: rgb(41, 41, 41);'>
           ${firstName} ${lastName}
         </h5>
       </td>
     </tr>
     <tr>
       <td>
         <h3 style='margin: 0; width: 10rem; font-size: .7rem; text-transform: uppercase; font-weight: 500; color: rgb(89, 89, 89); padding-top: .75rem;'>
           Dates
         </h3>
       </td>
     </tr>
     <tr> 
       <td>
         <h5 style='margin: 0; color: rgb(41, 41, 41);'>
           ${moment(startDate).format("MMM D")} - ${moment(endDate).format("MMM D")}
         </h5>
       </td>
     </tr>
     <tr>
       <td>
         <h3 style='margin: 0; width: 10rem; font-size: .7rem; text-transform: uppercase; font-weight: 500; color: rgb(89, 89, 89); padding-top: .75rem;'>
           City
         </h3>
       </td>
     </tr>
     <tr> 
       <td>
         <h5 style='margin: 0; color: rgb(41, 41, 41);'>
           ${city}
         </h5>
       </td>
     </tr>
     <tr>
       <td>
         <h3 style='margin: 0; width: 10rem; font-size: .7rem; text-transform: uppercase; font-weight: 500; color: rgb(89, 89, 89); padding-top: .75rem;'>
           Church Member
         </h3>
       </td>
     </tr>
     <tr> 
       <td>
         <h5 style='margin: 0; color: rgb(41, 41, 41);'>
           ${churchMember}
         </h5>
       </td>
     </tr>
     <tr>
       <td>
         <h3 style='margin: 0; width: 10rem; font-size: .7rem; text-transform: uppercase; font-weight: 500; color: rgb(89, 89, 89); padding-top: .75rem;'>
           Payment processed
         </h3>
       </td>
     </tr>
     <tr> 
       <td>
         <h5 style='margin: 0; color: rgb(41, 41, 41);'>
           ${payed ? 'yes' : 'no'}
         </h5>
       </td>
     </tr>
    </table>
    <table>
      <tr>
       <td style='padding-top: 2rem;'>
         For camp info, visit our <a href='https://gsbcspokane.com'>gsbcspokane.com</a>.
       </td>
     </tr>
    </table>
      </body>
    </html>
    `;


    try {
      await mailTransport.sendMail(mailOptions);
      // console.log(`New ${subscribed ? '' : 'un'}subscription confirmation email sent to:`, val.email);
    } catch (error) {
      console.error("There was an error while sending the email:", error);
    }
    return null;
  });