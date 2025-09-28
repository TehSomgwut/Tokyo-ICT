const mongoose = require('../connectDB');

const crapesSchema = new mongoose.Schema({
    Price: Number,
    Name: { type: String, required: true, unique: true },
    Detail: String,
    Img: String,
    Tag: String
})

const Crapes = mongoose.model('Crapes', crapesSchema);

module.exports = Crapes;