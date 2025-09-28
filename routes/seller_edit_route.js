const express = require('express');
const router = express.Router();
const path = require('path');
const Tokyo = require('../database/Tokyo');
const Crapes = require('../database/Crapes');
const Fried = require('../database/Fried');
const Topping = require('../database/Flavor');

router.get('/seller_edit', (req, res) => {
    const selleredit = {
        Name: "ชื่อเมนู",
        Detail: "รายละเอียดเมนู",
        Price: 0,
        Category: "โตเกียว",
        Img_menu: ""
    }
    res.render('seller_edit', {seller_edit: selleredit})
})

router.get('/seller_edit/product/:id', async (req, res) => {
    const { id } = req.params;
    try {
        let menu = await Tokyo.findById(id) || await Crapes.findById(id) || await Fried.findById(id) || await Topping.findById(id);
        if (!menu) {
            return res.status(404).json({ message: 'Menu not found' });
        }
        console.log(menu);
        res.render('seller_edit', {seller_edit: menu})
    } catch (error) {
        console.error('Error updating menu:', error);
        res.status(500).json({ message: 'Error updating menu' });
    }
})

module.exports = router