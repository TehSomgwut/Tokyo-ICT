const express = require('express');
const router = express.Router();
const path = require('path')

require('../connectDB')

router.all('/signup', (req, res) => {
    res.render('Signup');
})

module.exports = router;