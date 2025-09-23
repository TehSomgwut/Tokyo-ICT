const mongoose = require('../connectDB');

const crepesSchema = new mongoose.Schema({
    Price_crepes: Number,
    Flavor_crepes: String,
    Img_crepes: Buffer
})

const Crepes = mongoose.model('Crepes', crepesSchema);

module.exports = Crepes;