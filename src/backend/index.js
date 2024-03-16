const mongoose = require('mongoose')
const cors = require('cors');
const app = require('express')();
const http = require('http').Server(app);

const BookingRecords = require('./models/BookingModel');
const RoomsModel = require('./models/RoomsModels');

mongoose.connect("mongodb+srv://hotel-admin:hotelpass@cluster0.uo96854.mongodb.net/model?retryWrites=true&w=majority&appName=Cluster0")

http.listen(7000, function () {
    console.log('server is running');
})

app.use(cors(
    {
        
    }
));


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
    console.log(id)
    try {
        const bookingId = ObjectId.isValid(id) ? new ObjectId(id) : null;

        // Check if the ID is valid
        if (!bookingId) {
            return res.status(400).json({ message: 'Invalid booking ID' });
        }
        // Find the booking by ID and delete it
        const deletedBooking = await BookingRecords.findByIdAndDelete(id);
        if (!deletedBooking) {
            return res.status(404).json({ message: "Booking not found" });
        }
        res.json({ message: "Booking deleted successfully", deletedBooking });
    } catch (error) {
        res.status(500).json({ message: error.message });
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