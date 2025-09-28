const express = require('express');
const router = express.Router();
const path = require('path');
const Tokyo = require('../database/Tokyo');
const Crapes = require('../database/Crapes');
const Fried = require('../database/Fried');
const Topping = require('../database/Flavor');
const fs = require('fs');

router.get('/seller_manipulation', async (req, res) => {
    const tokyoMenus = await Tokyo.find({});
    const crapesMenus = await Crapes.find({});
    const friedMenus = await Fried.find({});
    const toppingMenus = await Topping.find({});
    const sellermanipulation = [
    ...tokyoMenus,
    ...crapesMenus,
    ...friedMenus,
    ...toppingMenus
]


    console.log(tokyoMenus);

    res.render('seller_manipulation', {seller_manipulation: sellermanipulation})
})

router.post('/seller_delete', async (req, res) => {
    const { id } = req.body;
    try {
        menu = await Tokyo.findById(id) || await Crapes.findById(id) || await Fried.findById(id) || await Topping.findById(id);
        if (!menu) {
            return res.status(404).json({ message: 'Menu not found' });
        }
        ImgPath = path.join(__dirname, `../public/${menu.Img}`);
        if (fs.existsSync(menu.Img) && menu.Img) {
            fs.unlinkSync(ImgPath);
        }

        await menu.deleteOne();
        
        const success = true;
        res.json({ success, message: 'Menu deleted successfully' });
    } catch (error) {
        console.error('Error deleting menu:', error);
        res.status(500).json({ message: 'Error deleting menu' });
    }
})

module.exports = router