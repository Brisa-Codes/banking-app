// modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');


// express
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// middleware setup
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// importing routes
const home = require('./routes/home');

// routes
app.use('/', home);

// server port
app.listen(3000, () => {
    console.log('listening on port 3000');
});