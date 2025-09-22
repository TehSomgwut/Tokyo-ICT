const mongoose = reqrire('../connectDB');

const tokyoSchema = new congoose.schema({
    Price_tokyo: Number,
    Flavor_tokyo: String,
    Size_tokyo: String,
    Img_tokyo: Buffer,
})

const Tokyo = mongoose.model('Tokyo', tokyoSchema);

module.exports = tokyoSchema;