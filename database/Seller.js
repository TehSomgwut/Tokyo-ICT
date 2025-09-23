const mongoose = require('../connectDB');

const sellerSchema = new mongoose.Schema({
    sellname: String,
    sellGmail: {type: String, unique: true, request: true},
    Password: String,
    Img_profile: Buffer,
    Status: String,
})

const Seller = mongoose.model('Seller', sellerSchema);

module.exports = Seller;