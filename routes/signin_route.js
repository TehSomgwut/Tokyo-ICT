const express = require('express');
const router = express.Router();
const path = require('path')
const Customers = require('../database/Customer')


require('../connectDB')
router.get('/signup', (req, res) => {
    res.render('Signup', {message: ""})
})

router.post('/signup', async (req, res) => {
    try {
        const {email, password} = req.body
        req.session.email = email
        req.session.password = password
        req.session.cookie.maxAge = 24 * 60 * 60 * 1000;
        const user = await Customers.findOne({CusGmail: email, Password: password})
        if (user) {
            return res.status(200).send("Account already exists")
        } else {
            const newUser = new Customers({
                CusGmail: email,
                Password: password
            })
            await newUser.save()
            return res.status(201).redirect(`/profile/${req.session.email}`)
        }
    }
    catch (err) {
        return res.status(500).send("Internal Server Error")
    }
})

module.exports = router;