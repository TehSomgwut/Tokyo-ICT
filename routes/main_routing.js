const express = require('express');
const router = express.Router();
const path = require('path')

require('../connectDB')

router.all('/main', (req, res) => {
    res.render('main');
})

module.exports = router;