const express = require('express');
const router = express.Router();
const path = require('path');
const Menus = require('../database/Menus');
const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/uploads/'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
})

const upload = multer({ storage: storage });

router.get('/seller_edit', (req, res) => {
    const selleredit = {
        Name: "ชื่อเมนู",
        Detail: "รายละเอียดเมนู",
        Price: 0,
        Category: "โตเกียว",
        Img_menu: ""
    }
    res.render('seller_edit', {seller_edit: selleredit})
})

router.get('/seller_edit/product/:id' , async (req, res) => {
    const { id } = req.params;
    try {
        let menu = await Menus.findById(id);
        if (!menu) {
            return res.status(404).json({ message: 'Menu not found' });
        }
        
        res.render('seller_edit', {seller_edit: menu})
    } catch (error) {
        console.error('Error updating menu:', error);
        res.status(500).json({ message: 'Error updating menu' });
    }
})

router.post('/seller_edit/product/:id',upload.single('upfile') , async (req, res) => {
    const { id } = req.params;
    const { name, detail, price, category } = req.body;
    const img = req.body.upfile ? req.body.upfile.path : null;
    try {
        let findById = await Menus.findById(id);
        if (!findById) {
            return res.status(404).json({ message: 'Menu not found' });
        }
        const tempPath = path.join(__dirname, `../public/${findById.Img}`);
        if (fs.existsSync(tempPath) && tempPath) {
            fs.unlinkSync(tempPath);
        }

        await Menus.updateOne({ _id: id }, { Name: name, Detail: detail, Price: price, Category: category, Img: req.file ? `uploads/${req.file.filename}` : findById.Img });
        res.redirect('/seller_manipulation');

    } catch (error) {

    }
})
module.exports = router