const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const { BookingSchema } = require('./models/BookingModel');

const mongoURL = "mongodb://localhost:27017/hotelBooking";

const connectToMongo = () => {
    mongoose.connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.log('Failed to connect', err));
};

// Call connectToMongo to establish database connection
connectToMongo();

const app = express();
const port = 7000;
app.use(cors());

const Booking = mongoose.model('BookingModel', BookingSchema);

app.get('/fetchBookings', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
