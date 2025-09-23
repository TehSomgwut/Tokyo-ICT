const mongoose = require('../connectDB');

const sellerSchema = new mongoose.Schema({
    sellname: String,
    sellGmail: {type: String, unique: true, require: true},
    Password: {type: String, unique: true, require: true},
    Img_profile: Buffer,
    Status: String,
})

const Seller = mongoose.model('Seller', sellerSchema);

module.exports = Seller;