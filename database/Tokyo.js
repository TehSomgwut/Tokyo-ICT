const mongoose = require('../connectDB');

const tokyoSchema = new mongoose.Schema({
    Price: Number,
    Name: { type: String, required: true, unique: true },
    Detail: String,
    Img: String,
    Tag: String
})

const Tokyo = mongoose.model('Tokyo', tokyoSchema);

module.exports = Tokyo;
