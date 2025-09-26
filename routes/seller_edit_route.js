const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/seller_edit', (req, res) => {
    const selleredit = {
        Store_status: "เปิด"
    }
    res.render('seller_edit', {seller_edit: selleredit})
})

module.exports = router