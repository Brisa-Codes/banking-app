const express = require('express');
const router = express.Router();
const passport = require('passport');

// home route
router.get('/', (req, res) => {
    res.render('home');
});

module.exports = router;