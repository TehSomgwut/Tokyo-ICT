const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const Tokyo = require('../database/Tokyo');
const Crapes = require('../database/Crapes');
const Fried = require('../database/Fried');
const Flavour = require('../database/Flavor');

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

    switch (category) {
      case "โตเกียว":
        const tokyo = new Tokyo(newMenu);
        await tokyo.save();
        break;
      case "เครป":
        const crapes = new Crapes(newMenu);
        await crapes.save();
        break;
      case "ของทอด":
        const fried = new Fried(newMenu);
        await fried.save();
        break;
      case "ท็อปปิ้ง":
        const newFlavour = {
          Name: name,
          Detail: detail,
          Price: price,
          Tag: category
         };
        const flavor = new Flavour(newFlavour);
        await flavor.save();
        break;
      }  
      res.status(200).send("Menu added successfully");
    }
  catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
})

module.exports = router