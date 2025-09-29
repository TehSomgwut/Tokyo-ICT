const express = require('express');
const router = express.Router();
const path = require('path')
const Menus = require("../database/Menus")
const Order = require("../database/Order")

require('../connectDB')

router.get('/chart', (req, res) => {
    res.render('myChart')
})

router.get('/chart/:id', async (req, res) => {
    try {
        if (!req.session.email) {
            return res.status(401).redirect('/login');
        }

        if (req.params.id == req.session.email) {
            const Cus = req.session.email;

            const orders = await Order.find({ CusGmail: Cus, Status: "ในตะกร้า" });
            if (!orders || orders.length === 0) {
                return res.status(404).send("No orders found");
            }

            const menus = await Promise.all(
                orders.map(async (order) => {
                    const menu = await Menus.findOne({ Name: order.Order });
                    return {
                        order: order,
                        menu: menu ? { Name: menu.Name, Detail: menu.Detail, Img :menu.Img } : null
                    };
                })
            );
            console.log(menus, orders)

            if (!menus || menus.length === 0) {
                return res.status(404).send("No menus found");
            }

            return res.status(200).render('myChart', { orders: menus });
        } else {
            return res.status(401).redirect('/login');
        }
    } catch (err) {
        console.error('Error fetching chart data:', err);
        res.status(500).send("Internal Server Error");
    }
});
module.exports = router