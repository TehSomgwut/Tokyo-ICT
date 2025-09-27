const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/seller_add', (req, res) => {
  const seller_add = {
    status: "active"
  }
    res.render('seller_add', {seller_add: seller_add})
})

router.post('/seller_add', upload.single('img'), (req, res) => {
  if (!req.body.name || !req.body.detail || !req.body.price || !req.body.category ) {
    return res.status(400).send("All fields are required");
  }
  const { name, detail, price, category } = req.body;
  const img = req.file;
  res.status(200).send("Menu added successfully");
})

module.exports = router