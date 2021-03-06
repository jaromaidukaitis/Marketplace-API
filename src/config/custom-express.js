/*
 * Express setup file
    - Intializes Express
    - Add the middlewares to it
    - Add the application routes
*/

// Express require
const express = require('express');

// Middlewares requires
const bodyParser = require('body-parser');

// Routes requires


// Express initialization
const app = express();

// Middlewares addition
app.use(bodyParser.json());

// Routes addition


// Application export to server.js
module.exports = app;