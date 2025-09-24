const mongoose = require('../connectDB');

const sellerSchema = new mongoose.Schema({
    sellname: String,
    sellGmail: {type: String, unique: true, required: true},
    Password: {type: String, unique: true, required: true},
    Img_profile: String,
    Status: String,
})

const Seller = mongoose.model('Seller', sellerSchema);

module.exports = Seller;