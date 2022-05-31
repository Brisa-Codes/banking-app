const express = require('express');
const router = express.Router();
const Signup = require('../models/signupModel');

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.post('/signup', (req, res) => {
    const newSignup = new Signup({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    newSignup.save((err) => {
        if (err) {
            console.log(err);
            return;
        }
        res.redirect('/signin');
    });
});

module.exports = router;