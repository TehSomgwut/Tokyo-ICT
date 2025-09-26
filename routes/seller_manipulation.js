const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/seller_manipulation', (req, res) => {
    const sellermanipulation = {
        Store_status: "เปิด",
        Menusname: "โตเกียว (ใส้เค็ม)จ้าา",
        Detail: "โตเกียวเบสิค ไส้เค็มไม่กินถือว่าพลาดจ้าา",
        Price: 30,
        Img_menus: "",
        Tagmenu: "โตๆ"
    }
    res.render('seller_manipulation', {seller_manipulation: sellermanipulation})
})

module.exports = router