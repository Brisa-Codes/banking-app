// modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');


// express
const app = express();

// server port
app.listen(3000, () => {
    console.log('listening on port 3000');
});