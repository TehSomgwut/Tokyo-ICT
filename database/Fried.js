const mongoose = require('../connectDB');

const FriedSchema = new mongoose.Schema({
    Price_Fried: Number,
    Type_Fried: String,
    Img_Fried: String
})

const Fried = mongoose.model('Fried', FriedSchema);

module.exports = Fried;