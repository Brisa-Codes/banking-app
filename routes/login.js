// modules
const express = require('express');
const router = express.Router();
const passport = require('passport');

//setting route
router.get('/login', (req, res) => {
    res.render('login')
})

//login process
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next)
})

module.exports = router;