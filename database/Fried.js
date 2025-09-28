const mongoose = require('../connectDB');

const FriedSchema = new mongoose.Schema({
    Price: Number,
    Name: { type: String, required: true, unique: true },
    Detail: String,
    Img: String,
    Tag: String
})

const Fried = mongoose.model('Fried', FriedSchema);

module.exports = Fried;