const express = require('express');
const router = express.Router();
const path = require('path');

require('../connectDB');

router.get('/history', (req, res) => {
    currentTime = new Date()
    date = `${currentTime.getDate()}/${currentTime.getMonth()}/${currentTime.getYear()}`
    time = `${currentTime.getHours()}:${currentTime.getMinutes()}`
    const recent_order = {
        time: {
            date: date,
            time: time
        },
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

module.exports = router