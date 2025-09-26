const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/seller_dashboard', (req, res) => {
    currentTime = new Date()
    option = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    }
    const formatter = new Intl.DateTimeFormat('th-TH', option)
    const formattedDateTime = formatter.format(currentTime);
    const sellerdashboard = {
        time: formattedDateTime,
        Store_status: "เปิด",
        total_price: 100,
        total_amount: "30"
    }
    res.render('seller_dashboard', {seller_dashboard: sellerdashboard})
})

module.exports = router