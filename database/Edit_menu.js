const mongoose = require('../connectDB');

const EditmenuSchema = new mongoose.Schema({
    Menusname: String,
    Detail: String,
    Price: Number,
    Categories: String,
    Img_menus: String
})

const Editmenu = mongoose.model('Editmenu', sellerSchema);

module.exports = Editmenu;