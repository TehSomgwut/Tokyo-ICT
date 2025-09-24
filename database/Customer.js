const mongoose = require('../connectDB');

const customerSchema = new mongoose.Schema({
    Cusname: String,
    CusGmail: {type: String, unique: true, required: true},
    Password: {type: String, unique: true, required: true},
    Img_profile: String,
    Status: String,
    Current_order: [
        {
            Order_name: String,
            Order_price: Number,
            Money_state: String,
            quantity: Number,
            State: String,
            Total_price: Number,
        }
    ],
    History_order: [
        {
            Order_date: Date,
            order_name: Number,
            quantity: Number,
        }
    ]
})

const Customer = mongoose.model('Customer', customerShema);

module.exports = Customer;