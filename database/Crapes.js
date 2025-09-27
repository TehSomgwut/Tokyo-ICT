const mongoose = require('../connectDB');

const crapesSchema = new mongoose.Schema({
    Price_crapes: Number,
    Flavor_crapes: { type: String, required: true, unique: true },
    Detail_crapes: String,
    Img_crapes: String
})

const Crapes = mongoose.model('Crapes', crapesSchema);

module.exports = Crapes;