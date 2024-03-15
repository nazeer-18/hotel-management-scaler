const Rooms = require('../backend/models/RoomsModels')
async function checkAvailableRooms(startDate, endDate) {
    try {
        let availableRooms = {
            basic: ['b1', 'b2', 'b3', 'b4', 'b5'],
            luxury: ['l1', 'l2', 'l3'],
            suite: ['s1', 's2']
        };

        // Traverse through the dates from startDate to endDate
        for (let currentDate = new Date(startDate); currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
            // Check if there are bookings for the current date
            const bookingsForDate = await Rooms.findOne({ date: currentDate });
            if (bookingsForDate) {
                // Remove booked rooms for the current date from availableRooms
                bookingsForDate.bookedRooms.forEach(room => {
                    availableRooms[room.roomType].splice(availableRooms[room.roomType].indexOf(room.roomNumber), 1);
                });
            }
        }

        return availableRooms;
    } catch (error) {
        console.error('Error checking available rooms:', error);
        return null;
    }
}
export {checkAvailableRooms}