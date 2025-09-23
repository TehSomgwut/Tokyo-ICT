const mongoose = require('../connectDB');

const tokyoSchema = new mongoose.Schema({
    Price_tokyo: Number,
    Flavor_tokyo: String,
    Description: String,
    Img_tokyo: Buffer,
    Rating: Number
})

const Tokyo = mongoose.model('Tokyo', tokyoSchema);

module.exports = Tokyo;