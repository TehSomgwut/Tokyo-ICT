const mongoose = require('../connectDB');

const customerSchema = new mongoose.Schema({
    Cusname: { type: String, required: true },
    CusGmail: { type: String, unique: true, required: true },
    Password: { type: String, required: true },
    Img_profile: Buffer, // หรือเก็บเป็น String (URL) ก็ได้
    Status: String,
    Current_order: [
        {
            order_name: String,
            order_price: Number,
            money_state: String,
            quantity: Number,
            state: String,
            total_price: Number,
        }
    ],
    History_order: [
        {
            order_date: { type: Date, default: Date.now },
            order_name: String,
            quantity: Number,
        }
    ]
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;