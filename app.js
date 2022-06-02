// modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash')
const expressValidator = require('express-validator')
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

//express - session
app.use(session({
    secret: 'dkfa;sdklfja',
    resave: true,
    saveUninitialized: true,
}))
//express - messages
app.use(require('connect-flash')())
app.use((req, res, next) => {
    res.locals.messages = require('express-messages')(req, res)
    next()
})
//express - validator 
app.use(expressValidator({
  errorFormatter: function (param, msg, value) {
    var namespace = param.split('.')
      , root = namespace.shift()
      , formParam = root;

    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

//passport config folde
require('./config/passport')(passport)
//passport mIDDLEWARES
app.use(passport.initialize())
app.use(passport.session())

// importing routes
const home = require('./routes/home');
const signup = require('./routes/signup');
const dashboard = require('./routes/dashboard');
const login = require('./routes/login');

// routes
app.use('/', home);
app.use('/', signup);
app.use('/', dashboard);
app.use('/', login);

// server port
app.listen(3000, () => {
    console.log('listening on port 3000');
});