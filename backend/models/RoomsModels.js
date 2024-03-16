const mongoose = require('mongoose');

const RoomsSchema = new mongoose.Schema({
    date: Date,
    bookedRooms: [String] // Array of room IDs
});

const RoomsModel = mongoose.model('RoomsModel', RoomsSchema);

module.exports.RoomsModel = RoomsSchema;