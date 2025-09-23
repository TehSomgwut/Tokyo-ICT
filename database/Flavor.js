const mongoose = require('../connectDB');

const toppingsSchema = new mongoose.Schema({
    Price_Toppings: Number,
    Toppings_crepes: String,
    Img_Toppings: Buffer
})

const Toppings = mongoose.model('Toppings', toppingsSchema);

module.exports = Toppings;