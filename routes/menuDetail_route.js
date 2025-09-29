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

router.post('/menuDetail/:id', async (req, res) => {
    const { id } = req.params;
    const { amount } = req.body;
    try {
        const menu = await Menu.findById(id);
        if(menu.Tag === 'เครป') {
            let Flavours = await Menu.find({ Tag: 'ท็อปปิ้ง'})
            res.render('menuDetail', { menu: menu, flavours: Flavours, total_price: menu.Price });
        }
    
    }
    catch (error) {
        console.error('Error fetching menu details:', error);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router;