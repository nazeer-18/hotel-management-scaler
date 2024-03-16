const express = require('express');
const Booking = require('/models/BookingModel'); // Replace with your model path

const router = express.Router();

// Get all bookings (optional filters)
router.get('/', async (req, res) => {
    const { roomNumber, roomType, startDate, endDate } = req.query;

    let filter = {};
    if (roomNumber) {
        filter.room_types = roomNumber;
    }
    if (roomType) {
        filter.room_types = roomType;
    }
    if (startDate) {
        filter.start_date = { $gte: new Date(startDate) }; // Greater than or equal to
    }
    if (endDate) {
        filter.end_date = { $lte: new Date(endDate) }; // Less than or equal to
    }

    try {
        const bookings = await Booking.find(filter);
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
