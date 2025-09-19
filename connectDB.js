const mongoose = require('mongoose');


dbPath = 'mongodb://localhost:27017/TokyoICT';
mongoose.connect(dbPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to Tokyo database successfully');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

module.exports = mongoose;