const mongoose = require('../connectDB');

const customerSchema = new mongoose.Schema({
    Cusname: String,
    CusGmail: {type: String, unique: true, require: true},
    Password: {type: String, unique: true, require: true},
    Img_profile: Buffer,
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