const mongoose = require('../connectDB');

const dashboardSchema = new mongoose.Schema({
    date: Date,
    Store_status: String,
    total_price: String,
    total_amount: String
})

const Dashboard = mongoose.model('Dashboard', DashboardSchema);

module.exports = Dashboard;