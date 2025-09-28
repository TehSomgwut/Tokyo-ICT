const mongoose = require('../connectDB');

const menusSchema = new mongoose.Schema({
    Price: Number,
    Name: { type: String, required: true, unique: true },
    Detail: String,
    Img: String,
    Tag: String
})

const Menus = mongoose.model('Menus', menusSchema);

module.exports = Menus;