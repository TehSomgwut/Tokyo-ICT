const express = require('express');
const router = express.Router();
const path = require('path')
const Menus = require('../database/Menus');
const Customers = require('../database/Customer');
const Order = require('../database/Order');

router.get('/main', async (req, res) => {
    // req.session.email = "e@ex.com"
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

        const orderAmount = await Order.countDocuments({ CusGmail: req.session.email, Status: "ในตะกร้า" });
        

        res.render('Main', {
            recommendedMenus: recommendedMenus,
            menus: menus,
            Cus_Name: Cus_Name,
            categories: categories,
            CusGmail: req.session.email,
            orderAmount: orderAmount
        });
    }
    catch (error) {
        console.error('Error fetching menus:', error);
        res.status(500).send('Internal Server Error');
    }
})

router.post('/add/:id', async (req, res) => {
    const { id } = req.params;
    const Quantity = req.body.amount || 1;
    const flavours = req.body.flavours || [];
    const CusGmail = req.session.email;
    const totalPrice = req.body.total_price || 0;

    if (!CusGmail) {
        return res.status(401).json({ message: "กรุณา login" });
    }

    try {
        const customer = await Customers.findOne({ CusGmail: CusGmail });
        if (!customer) {
            return res.status(401).json({ message: 'ไม่พบข้อมูลผู้ใช้ กรุณาสมัครสมาชิก' });
        }

        const menu = await Menus.findById(id);
        if (!menu) {
            return res.status(404).json({ message: 'ไม่พบเมนูที่ต้องการ' });
        }

        if (menu.Tag === 'เครป') {
            menu.Name += ` (ท็อปปิ้ง: ${flavours.map(f => f.Name).join(', ')})`;
            menu.Price = totalPrice;
        }

        let order = new Order({
            CusGmail: CusGmail,
            Order: menu.Name,
            Status: "ในตะกร้า",
            Date: new Date(),
            Quantity: Quantity,
            Price: menu.Price,
            Note: req.body.note || "ไม่มี"
        });
        await order.save();

        const orderAmount = await Order.countDocuments({ CusGmail: CusGmail, Status: "ในตะกร้า" });
        return res.status(200).json({ orderAmount: orderAmount });
    } catch (error) {
        console.error('Error adding order:', error);
        return res.status(500).json({ message: 'เกิดข้อผิดพลาดในการเพิ่มลงตะกร้า' });
    }
});

module.exports = router;