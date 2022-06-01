const express = require('express');
const router = express.Router();

// dashboard route
router.get('/dashboard', (req, res) => {
    res.render('dashboard');
}
);

module.exports = router;