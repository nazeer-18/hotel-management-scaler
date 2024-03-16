const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    customer_name: {
        type: String,
        required: true
    },
    customer_mobile_number: {
        type: String,
        required: true,
        unique: true
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
        type: [String],
        required: true
    },
    total_bill: {
        type: Number,
        required: true
    },
    room_numbers: {
        type: [String]
    }
});

module.exports = mongoose.model("BookingRecord", BookingSchema);
