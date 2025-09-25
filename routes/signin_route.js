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
        const user = await Customers.findOne({email: email, password: password})
        if (user) {
            return res.status(200).send("Account already exists")
        } else {
            const newUser = new Customers({
                CusGmail: email,
                Password: password
            })
            await newUser.save()
            return res.status(201).send("Create account successfully")
        }
    }
    catch (err) {
        return res.status(500).send("Internal Server Error")
    }
})

module.exports = router;