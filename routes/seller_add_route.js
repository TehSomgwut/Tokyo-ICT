const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/seller_add', (req, res) => {
    const selleradd = {
      Store_status: "เปิด"
    }
    res.render('seller_add', {seller_add: selleradd})
})

module.exports = router