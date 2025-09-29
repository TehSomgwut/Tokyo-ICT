const express = require('express');
const router = express.Router();
const path = require('path');
const Menu = require('../database/Menus');
const Order = require('../database/Order');

router.get('/menuDetail', async (req, res) => {
    try {
        let Flavours = await Menu.find({ Tag: 'ท็อปปิ้ง'})
        res.render('menuDetail', { flavours: Flavours, total_price: 10, Menu: null });
    }
    catch (error) {
        console.error('Error fetching flavours:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/menuDetail/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const menu = await Menu.findById(id);
        const amount = await Order.countDocuments({ CusGmail: req.session.email, Status: "ในตะกร้า" });
        if(menu.Tag === 'เครป') {
            let Flavours = await Menu.find({ Tag: 'ท็อปปิ้ง'})
            return res.render('menuDetail', { Menu: menu, flavours: Flavours, total_price: menu.Price, orderAmount: amount, cus: req.session.email });
        }
        return res.render('menuDetail', { Menu: menu, flavours: null, total_price: menu.Price, orderAmount: amount, cus: req.session.email });
    }
    catch (error) {
        console.log('Error fetching menu details:', error);
        return res.status(500).send('Internal Server Error');
    }
});

module.exports = router;