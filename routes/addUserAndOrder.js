const Customer = require('../database/Customer')
const express = require('express')
const router = express.Router()

router.post('/add_customer', async (req, res) => {
    try {
        const { Cusname, CusGmail, Password } = req.body;

        if(!Cusname || !CusGmail || !Password) {
            return res.status(400).send("Please enter form correctly");
        }

        const newCus = {
            Cusname,
            CusGmail,
            Password
        };

        await Customer.create(newCus);

        console.log(`Create ${newCus.Cusname} successfully`);
        return res.status(201).json({ message: "Customer created", customer: newCus });

    } catch (err) {
        console.error("Error when creating a customer", err);
        return res.status(500).send("O0p! something went wrong!!");
    }
})

module.exports = router;
