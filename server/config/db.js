const mongoose = require('mongoose');
const color = require('colors');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongodb Database Connected ${mongoose.connection.host}`.bgGreen.bold);
    } catch (error) {
        console.log(`Mongodb Database Error: ${error.message}`.bgRed.bold);
    }
}

module.exports = connectDB;
