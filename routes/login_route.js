const express = require('express');
const router = express.Router();
const path = require('path')

require('../connectDB')

router.get('/', (req, res) => {
    res.redirect('/login');
})

router.all('/login', (req, res) => {
    res.render('login');
})

module.exports = router;