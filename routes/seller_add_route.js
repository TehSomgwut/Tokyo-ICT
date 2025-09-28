const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const Menus = require('../database/Menus');


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

router.get('/seller_add', (req, res) => {
  const seller_add = {
    status: "active"
  }
    res.render('seller_add', {seller_add: seller_add})
})

router.post('/seller_add', upload.single('upfile'), async (req, res) => {
  try {
    if (!req.body.name || !req.body.detail || !req.body.price || !req.body.category) {
      return res.status(400).send("All fields are required");
    }

    const { name, detail, price, category } = req.body;
    const filePath = req.file ? `uploads/${req.file.filename}` : null;
    console.log(filePath);
    let newMenu = {
      Name: name,
      Detail: detail,
      Price: price,
      Tag: category,
      Img: filePath
     };

     const Menu = new Menus(newMenu);
     await Menu.save()
     
      res.status(200).send("Menu added successfully");
    }
  catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
})

module.exports = router