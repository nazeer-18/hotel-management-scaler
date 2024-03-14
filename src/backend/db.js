const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// dotenv.config({ path: "./config.env" })
// const mongoURL = process.env.MONGO_CONNECTION_STRING;
const mongoURL="mongodb+srv://admin:admin@hotel-booking-db.8sttuob.mongodb.net/?retryWrites=true&w=majority&appName=hotel-booking-db";

const connectToMongo = () => {
    mongoose.connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.log(err));
}
module.exports = connectToMongo;


