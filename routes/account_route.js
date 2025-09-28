const express = require('express');
const router = express.Router();
const path = require('path');
const Customers = require('../database/Customer')

router.get('/profile/:email', async (req, res) => {
    try {
        const { email } = req.params;
        if (req.session.email !== email) {
            return res.status(403).redirect('/login');
        }

        const user = await Customers.findOne({ CusGmail: email });
        if (!user) {
            return res.status(404).redirect('/login');
        }

        res.render('accountName', { detail: user });
    } catch (err) {
        console.error(err);
        return res.status(500).redirect('/login');
    }
});


router.get('/profile', (req, res) => {
    const detail = {
        Cusname: "Tae",
        CusID: "101",
        Img: "uploads/Image.jpg"
    }
    res.render('accountName', {detail: detail})
})

module.exports = router