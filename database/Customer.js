const mongoose = require('../connectDB');

const customerSchema = new mongoose.schema({
    Cusname: String,
    CusGmail: {type: String, unique: true, request: true},
    Password: String,
    Img_profile: String
})

const Customer = mongoose.model('Customer', customerShema);

module.exports = Costomer;