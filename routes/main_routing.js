const express = require('express');
const router = express.Router();
const path = require('path')

require('../connectDB')

router.all('/main', (req, res) => {
    const recommendedMenus = [
        {
        name: "tokyo",
        description: "Delicious tokyo",
        price: 10
        },
        {
        name: "sweet tokyo",
        description: "Top delicious tokyo",
        price: 10
        },
        {
        name: "l-tokyo",
        description: "Good delicious tokyo",
        price: 10
        }
    ]

    const categories = [
        {
            name: "Top sales",
            image: "#"
        }
    ]

    const menus = [
        {
            name: "Tokyo",
            flavour: "เค็ม",
            price: 10,
            imgPath: "#"
        },
        {
            name: "Tokyo",
            flavour: "หวาน",
            price: 10,
            imgPath: "#"
        },
        {
            name: "Tokyo",
            flavour: "สลัด",
            price: 10,
            imgPath: "#"
        },
        {
            name: "Tokyo",
            flavour: "ไม่มีใส้",
            price: 15,
            imgPath: "#"
        },
    ]
    res.render('Main', {
        recommendedMenus: recommendedMenus,
        categories: categories,
        name: req.session.email,
        menus: menus
    });
})

module.exports = router;