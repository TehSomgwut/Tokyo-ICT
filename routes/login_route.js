const express = require('express');
const router = express.Router();
const path = require('path')
const Customers = require('../database/Customer')

require('../connectDB')

router.get('/', (req, res) => {
    res.redirect('/login');
})

router.get('/login', (req, res) => {
    req.session.destroy();
    res.render('login', {message: ""})
})

router.post('/login', async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            return res.status(400).send("Email and password are required");
        }
        const {email, password} = req.body;
        const user = await Customers.findOne({CusGmail: email, Password: password});
        if (!user || user.Password !== password) {
            return res.status(401).send("Invalid email or password, please try again or sign up if you don't have an account");
        }
        req.session.email = email;
        req.session.password = password;
        return res.status(200).send("Login successful");
    }
    catch (err) {
        return res.status(500).send("Internal Server Error");
    }
})

module.exports = router;