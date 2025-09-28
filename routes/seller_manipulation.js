const express = require('express');
const router = express.Router();
const path = require('path');
const Menus = require('../database/Menus');
const fs = require('fs');

router.get('/seller_manipulation', async (req, res) => {
    const Menus = await Menus.find({});
    const sellermanipulation = Menus

    console.log(Menus);

    res.render('seller_manipulation', {seller_manipulation: sellermanipulation})
})

router.post('/seller_delete', async (req, res) => {
    const { id } = req.body;
    try {
        menu = await Menus.findById(id);
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