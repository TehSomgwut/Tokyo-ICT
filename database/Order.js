const mongoose = require('../connectDB');

const orderSchema = new mongoose.Schema({
    CusGmail: {type: String, required: true},
    Order: String,
    Status: String,
    Date: Date,
    Quantity: Number,
    Price: Number,
    Note: String
})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;