const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    customer_name: {
        type: String,
        required: true
    },
    customer_mobile_number: {
        type: String,
        required: true,
        unique: true // Assuming this is the primary key, as mentioned before
    },
    customer_email: {
        type: String,
        required: true,
        unique: true
    },
    booking_date: {
        type: Date,
        required: true
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    start_time: {
        type: String,
        required: true
    },
    end_time: {
        type: String,
        required: true
    },
    room_types: {
        type: [String], // Adjusted to support multiple room types as an array of strings
        required: true
    },
    total_bill: {
        type: Number,
        required: true
    },
    payment_status: {
        type: String,
        required: true,
        enum: ['pending', 'paid', 'cancelled'], // Assuming you might want to track these states
        default: 'pending'
    }
});

const BookingModel = mongoose.model('BookingModel', BookingSchema);

module.exports.BookingModel = BookingSchema;
