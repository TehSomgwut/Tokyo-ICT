const mongoose = require('../connectDB');

const customerSchema = new mongoose.Schema({
    Cusname: String,
    CusGmail: {type: String, unique: true, required: true},
    Password: String,
    Img_profile: String,
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