const mongoose = require('../connectDB');

const toppingsSchema = new mongoose.Schema({
    Price: Number,
    Name: { type: String, required: true, unique: true },
    Detail: String,
    Tag: String
})

const Toppings = mongoose.model('Toppings', toppingsSchema);

module.exports = Toppings;