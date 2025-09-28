const mongoose = require('../connectDB');

const orderSchema = new mongoose.Schema({
    CusGmail: {type: String, unique: true, required: true},
    Order: String,
    Status: String,
    Date: Date,
    Quantity: Number,
    Price: Number
})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;