const mongoose = require('mongoose');

const connectMongoDB = async function () {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection status: failed');
    }
} 

module.exports = connectMongoDB;