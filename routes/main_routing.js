const express = require('express');
const router = express.Router();
const path = require('path')
const Menus = require('../database/Menus');
const Customers = require('../database/Customer');

router.get('/main', async (req, res) => {
    try {
        if (!req.session.email) {
            return res.redirect('/login');
        }

        const Tokyo = await Menus.find({ Tag : "โตเกียว" });
        const Fried = await Menus.find({ Tag : "ของทอด" });
        const Crape = await Menus.find({ Tag : "เครป" });
        const recommendedMenus = [...Tokyo, ...Fried, ...Crape];
        const menus = [...Tokyo, ...Fried, ...Crape];

        const customer = await Customers.findOne({ CusGmail: req.session.email });
        const Cus_Name = customer.Cusname || customer.CusGmail || req.session.email || "Guest";

        const categories = await Menus.distinct('Tag').exec();
        

        res.render('Main', {
            recommendedMenus: recommendedMenus,
            menus: menus,
            Cus_Name: Cus_Name,
            categories: categories,
            CusGmail: req.session.email
        });
    }
    catch (error) {
        console.error('Error fetching menus:', error);
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router;