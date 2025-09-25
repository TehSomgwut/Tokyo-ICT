const express = require('express');
const router = express.Router();
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');

router.get('/uploadIMG', (req, res) => {
    res.render('uploadIMAGE')
})

router.post('/uploadIMG', async (req, res) => {
    const form = new formidable.IncomingForm();
    form.parse()
})

module.exports = router;