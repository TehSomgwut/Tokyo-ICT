const express = require('express');
const router = express.Router();
const path = require('path')

require('../connectDB')

router.all('/forgotPassword', (req, res) => {
    res.render('forgotPassword');
})

module.exports = router;