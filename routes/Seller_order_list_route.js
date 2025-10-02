const express = require('express');
const router = express.Router();
const path = require('path');
const Order = require('../database/Order');
const Customers = require('../database/Customer');

router.get('/Seller_order_list', async (req, res) => {
    try {
        const orders = await Order.find({ Status: "กำลังทำ" }).sort({ Date: 1 }).lean();

        const groupsMap = new Map();
        orders.forEach(o => {
            const key = o.CusGmail || 'unknown';
            if (!groupsMap.has(key)) groupsMap.set(key, []);
            groupsMap.get(key).push(o);
        });

        const groups = await Promise.all([...groupsMap.entries()].map(async ([cusGmail, items]) => {
            const customer = await Customers.findOne({ CusGmail: cusGmail }).lean();
            const CusName = customer ? (customer.Cusname || customer.name || cusGmail) : cusGmail;
            const total = items.reduce((s, it) => s + ((it.Price || 0) * (it.Quantity || 1)), 0);
            return { CusGmail: cusGmail, CusName, orders: items, total };
        }));

        const sellerorderlist = { Store_status: "เปิด" };
        res.render('Seller_order_list', { Seller_order_list: sellerorderlist, groups });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/Seller_order_list/update', async (req, res) => {
    try {
        const { cusGmail, action, note } = req.body;
        if (!cusGmail || !action) return res.status(400).json({ success: false, message: 'Missing parameters' });

        const status = action === 'accept' ? 'เสร็จแล้ว' : 'ยกเลิก';
        const remark = note || (action === 'accept' ? 'ร้านรับคำสั่งซื้อ' : 'ร้านปฏิเสธคำสั่งซื้อ');

        await Order.updateMany(
            { CusGmail: cusGmail, Status: "กำลังทำ" },
            { $set: { Status: status, Note: remark } }
        );

        return res.json({ success: true, status, remark });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

module.exports = router;