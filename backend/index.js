const mongoose = require('mongoose')
const cors = require('cors');
const app = require('express')();
const http = require('http').Server(app);
const ObjectId = require('mongodb').ObjectId;

const BookingRecords = require('./models/BookingModel');
const RoomsModel = require('./models/RoomsModels');

mongoose.connect("mongodb+srv://hotel-admin:hotelpass@cluster0.uo96854.mongodb.net/model?retryWrites=true&w=majority&appName=Cluster0")

http.listen(7000, function () {
    console.log('server is running');
})

app.use(cors());

// Configure CORS headers for all routes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow access from all origins
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


app.get('/', (req, res) => {
    res.json("Hello, backend of hotel-management-scaler")
})


app.post('/addBooking', async (req, res) => {
    try {
        const {
            customer_name,
            customer_mobile_number,
            customer_email,
            booking_date,
            start_date,
            end_date,
            start_time,
            end_time,
            room_types,
            total_bill,
            room_numbers
        } = req.body;

        const booking = new BookingRecords({
            customer_name,
            customer_mobile_number,
            customer_email,
            booking_date,
            start_date,
            end_date,
            start_time,
            end_time,
            room_types,
            total_bill,
            room_numbers
        });

        const newBooking = await booking.save();
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.get('/fetchBookings', async (req, res) => {
    try {
        const bookings = await BookingRecords.find();
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.delete('/deleteBooking/:id', async (req, res) => {
    const { id } = req.params;
    //const bookingId = ObjectId.createFromHexString(id);
    const bookingId = id;
    try {

        // Find the booking by ID and delete it
        const deletedBooking = await BookingRecords.findByIdAndDelete(bookingId);
        if (!deletedBooking) {
            return res.status(404).json({ message: "Booking not found" });
        }
        res.json({ message: "Booking deleted successfully", deletedBooking });
    } catch (error) {
        console.error('Error deleting booking:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// // API endpoint to fetch available rooms
// app.get('/roomsAvailable', async (req, res) => {
//     try {
//         const availableRooms = await Rooms.find({ available: true });

//         // Send the available rooms as the response
//         res.json(availableRooms);
//     } catch (error) {
//         // Handle errors
//         console.error('Error fetching available rooms:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });