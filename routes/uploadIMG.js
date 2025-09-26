const express = require("express");
const path = require("path");
const multer = require("multer")

const router = express.Router();
target = path.join(__dirname, '../public/uploads/')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, target)
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage })

router.get('/upload', (req, res) => {
    res.render('uploadIMAGE')
})

router.post('/upload',upload.single('img'), (req, res) => {
    res.send("Uploaded successfully")
})

module.exports = router;