const mongoose = require('mongoose');
const express = require('express');
const BookingModel = require('./models/BookingModel'); // Assuming the models directory is at the root of your project

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

app.get('/data', (req, res) => {
    const data = BookingModel(

    )
    data.save()
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
