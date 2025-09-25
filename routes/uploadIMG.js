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
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).send("Error parsing the files");
        }

        let upfile = files.upfile
        let dir = 'public/upload/'
        let newfile = dir + upfile.name

    })
})

module.exports = router;