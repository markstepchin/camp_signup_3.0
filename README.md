 ## Camp Signup App
Check out the live app [here](https://flamboyant-snyder-919255.netlify.com/)!

This app allows users to register for an event. It also allows an admin to view all logged in users. The goal was to create a simple, uncluttered, and minimalistic app that got the job done efficiently.

### Technology used

HTML, CSS, ReactJS, NodeJS, ExpressJS, Firebase Realtime Database, NPM, create-react-app

### Structure

The frontend is build with ReactJS. The user data is stored in a Firebase Realtime Database. The payment processing code is in an ExpressJS app running on a Firebase Cloud Function.

### Code that I'm proud of
The inputs in the app are controlled components, with the [Form Component](https://github.com/markstepchin/camp_signup_3.0/blob/master/src/Forms/Form.js) maintaining the state, handling mutations, and doing validations