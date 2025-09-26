const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/Seller_order_list', (req, res) => {
    const sellerorderlist = {
        Store_status: "เปิดดดด"
    }
    res.render('Seller_order_list', {Seller_order_list: sellerorderlist})
})

module.exports = router