// modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');

// db configuration
const config = require('./config/database');

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

// database setup
mongoose.connect('mongodb://localhost/banking-app');
const db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to MongoDB');
});

db.on('error', (err) => {
    console.log(err);
});

// importing routes
const home = require('./routes/home');
const signup = require('./routes/signup');
const Signup = require('./models/signupModel');

// routes
app.use('/', home);
app.use('/', signup);

// server port
app.listen(3000, () => {
    console.log('listening on port 3000');
});