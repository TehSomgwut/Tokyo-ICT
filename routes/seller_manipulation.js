const express = require('express');
const router = express.Router();
const path = require('path');
const Tokyo = require('../database/Tokyo');
const Crapes = require('../database/Crapes');
const Fried = require('../database/Fried');

router.get('/seller_manipulation', async (req, res) => {
    const sellermanipulation = [{
        Store_status: "เปิด",
        Menusname: "โตเกียว (ใส้เค็ม)จ้าา",
        Detail: "โตเกียวเบสิค ไส้เค็มไม่กินถือว่าพลาดจ้าา",
        Price: 30,
        Img_menus: "",
        Tagmenu: "โตๆ"
    }]

    const tokyoMenus = await Tokyo.find({});
    const crapesMenus = await Crapes.find({});
    const friedMenus = await Fried.find({});

    console.log(tokyoMenus);

    res.render('seller_manipulation', {seller_manipulation: sellermanipulation})
})

module.exports = router