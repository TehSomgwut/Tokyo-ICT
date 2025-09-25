const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/about', (req, res) => {
    render('about')
})

module.exports = router