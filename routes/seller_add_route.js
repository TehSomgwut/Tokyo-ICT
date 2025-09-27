const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const Tokyo = require('../database/Tokyo');
const Crapes = require('../database/Crapes');
const Fried = require('../database/Fried');

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

    switch (category) {
      case "โตเกียว":
        const newTokyo = {
          Price_tokyo: price,
          Flavor_tokyo: name,
          Description: detail,
          Img_tokyo: filePath
        };
        const tokyo = new Tokyo(newTokyo);
        await tokyo.save();
        break;

      case "เครป":
        const newCrapes = {
          Price_crapes: price,
          Flavor_crapes: name,
          Detail_crapes: detail,
          Img_crapes: filePath // ใช้ path ของไฟล์แทน buffer
        };
        const crapes = new Crapes(newCrapes);
        await crapes.save();
        break;
      case "ของทอด":
        const newFried = {
          Price_Fried: price,
          Type_Fried: name,
          Img_Fried: filePath,
          Detail_Fried: detail
        };
        const fried = new Fried(newFried);
        await fried.save();
        break;
    }

    res.status(200).send("Menu added successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
})

module.exports = router