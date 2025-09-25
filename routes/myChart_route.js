const express = require('express');
const router = express.Router();
const path = require('path')

require('../connectDB')

router.get('/chart', (req, res) => {
    res.render('myChart')
})

module.exports = router