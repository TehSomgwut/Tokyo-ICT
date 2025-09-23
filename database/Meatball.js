const mongoose = require('../connectDB');

const meatballsSchema = new mongoose.Schema({
    Price_meatball: Number,
    Type_meatball: String,
    Img_meatball: Buffer
})

const Meatball = mongoose.model('Meatball', meatballsSchema);

module.exports = Meatball;