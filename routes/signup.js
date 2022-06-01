const express = require('express');
const router = express.Router();
const expressValidator = require('express-validator');
const Signup = require('../models/signupModel');
const bcrypt = require('bcryptjs');

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.post('/signup', async (req, res) => {
    try {
        const newSignup = new Signup(req.body);
        let user = await Signup.findOne({email:req.body.email});
        if (user) {
            return res.status(400).send('email already exists');
        } else {
            bcrypt.genSalt(7, (err, salt) => {
                bcrypt.hash(newSignup.password, salt, (err, hash) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    newSignup.password = hash;
                });
            });
            await Signup.signup(newSignUp, req.body.password, (err) => {
                if(err) {
                    throw err;
                }
                res.redirect('/login');
            });
        }
    }
    catch(err) {
        console.log(err);
        res.send("data not saved");
    }
});


module.exports = router;