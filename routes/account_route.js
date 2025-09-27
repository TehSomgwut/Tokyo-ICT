const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/profile', (req, res) => {
    const detail = {
        Cusname: "Tae",
        CusID: "101",
        Img_profile: "uploads/Image.jpg"
    }
    res.render('accountName', {detail: detail})
})

module.exports = router