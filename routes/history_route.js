const express = require('express');
const router = express.Router();
const path = require('path');
const Cus = require("../database/Customer")
const Order = require("../database/Order")

require('../connectDB');

router.get('/history', (req, res) => {
    currentTime = new Date()
    let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
    };

    let thaiTime = currentTime.toLocaleString("th-TH", options);
    const recent_order = {
        time: thaiTime,
        name: "Tokyo",
        amount: 2,
        price: 30, 
        status: {
            price: "ยังไม่ชำระเงิน",
            status: "เสร็จแล้ว"
        }
        
    }
    res.render('history', {recent_order: recent_order})
})

router.get('/history/:id', async (req, res) => {
    try {  
        let options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        };

        if (!req.session.email) {
            return res.status(401).redirect('/login');
        }

        const email = req.params.id;

        if (req.session.email === email) {
            const amount = await Order.countDocuments({ Status: "ในตะกร้า" });
            if (amount > 0) {
                await Order.updateMany(
                    { Status: "ในตะกร้า", CusGmail: email },
                    { Status: "กำลังทำ" }
                );
            }

            let recent_order = await Order.find({ CusGmail: email, Status: "กำลังทำ" });
            let slip = await Order.find({ CusGmail: email, Status: "เสร็จแล้ว" });

            if (!recent_order || recent_order.length === 0) {
                recent_order = [];
            }

            if (!slip || slip.length === 0) {
                slip = [];
            }

            recent_order = recent_order.map(order => ({
                ...order._doc,
                Date: order.Date ? new Date(order.Date).toLocaleString("th-TH", options) : "ไม่ระบุเวลา"
            }));

            slip = slip.map(order => ({
                ...order._doc,
                Date: order.Date ? new Date(order.Date).toLocaleString("th-TH", options) : "ไม่ระบุเวลา"
            }));

            res.status(200).render('history', { recent_order: recent_order, slip: slip });
        } else {
            res.status(403).send("Unauthorized access");
        }
    } catch (err) {
        console.error("Error fetching history data:", err);
        return res.status(500).send("Internal server error");
    }
});

module.exports = router