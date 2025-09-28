const mongoose = require('../connectDB');

const editmenuSchema = new mongoose.Schema({
    Menusname: String,
    Detail: String,
    Price: Number,
    Categories: String,
    Img_menus: String
})

const Editmenu = mongoose.model('Editmenu', EditmenuSchema);

module.exports = Editmenu;