import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { DarkModeContext } from '../context/DarkModeContext';
import './bookings.css'
import { FaTrash } from 'react-icons/fa';

const DeleteBooking = () => {
    const { darkMode } = useContext(DarkModeContext);
    const [bookings, setBookings] = useState([]);
    const [selectedBookingId, setSelectedBookingId] = useState(null);
    const [deletedBookingId, setDeletedBookingId] = useState(null);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            const response = await axios.get('http://localhost:7000/fetchBookings');
            setBookings(response.data);
        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
    };
    function filterFutureBookings(bookings) {
        const currentTime = new Date(); // Get current time
        const today = new Date(currentTime.toDateString()); // Get today's date without time

        // Filter bookings based on start_time and start_date
        const futureBookings = bookings.filter(booking => {
            const bookingDate = new Date(booking.start_date); // Convert booking start_date to Date object

            // If booking date is greater than today's date
            if (bookingDate > today) {
                return true;
            }

            // If booking date is same as today's date, check start time
            if (bookingDate.getTime() === today.getTime()) {
                const bookingStartTime = new Date(today.toDateString() + 'T' + booking.start_time);
                console.log(bookingStartTime)
                return bookingStartTime > currentTime;
            }

            return false;
        });

        return futureBookings;
    }


    const filteredBookings = filterFutureBookings(bookings);
    //console.log(filteredBookings)
    const handleDeleteBooking = async () => {
        if (!selectedBookingId) {
            alert('Please select a booking to delete.');
            return;
        }

        try {
            await axios.delete(`/api/bookings/${selectedBookingId}`); // Adjust the URL to your backend endpoint
            setDeletedBookingId(selectedBookingId);
            setSelectedBookingId(null); // Reset selected booking after deletion
        } catch (error) {
            console.error('Error deleting booking:', error);
        }
    };

    const handleRowClick = (bookingId) => {
        setSelectedBookingId(bookingId);
    };
    const convertDate = (dateStr) => {
        const date = new Date(dateStr);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}-${month < 10 ? '0' : ''}${month}-${year}`;
    };
    return (
        <div>
            <div className="container ">
                <h1>Delete Bookings</h1>
                <Table striped bordered hover className={darkMode ? 'table dark-table' : 'table light-table'}>
                    <thead>
                        <tr>
                            <th>Booking ID</th>
                            <th>Customer Name</th>
                            <th>Customer Mobile</th>
                            <th>Start Date</th>
                            <th>Start Time</th>
                            <th>End Date</th>
                            <th>End Time</th>
                            <th>Rooms Booked</th>
                            <th>Room Numbers</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((filteredBookings) => (
                            <tr key={filteredBookings._id} onClick={() => handleRowClick(filteredBookings._id)} className={selectedBookingId === filteredBookings._id ? 'selected-row' : ''}>
                                <td>{filteredBookings._id}</td>
                                <td>{filteredBookings.customer_name}</td>
                                <td>{filteredBookings.customer_mobile_number}</td>
                                <td>{convertDate(filteredBookings.start_date)}</td>
                                <td>{filteredBookings.start_time}</td>
                                <td>{convertDate(filteredBookings.end_date)}</td>
                                <td>{filteredBookings.end_time}</td>
                                <td>{filteredBookings.room_types.join(' , ')}</td>
                                <td>{filteredBookings.room_numbers}</td>
                                <td>
                                    <label title="Delete this">
                                        <button className="rounded-button" onClick={() => handleDeleteBooking(filteredBookings._id)}>
                                            <FaTrash /> {/* Trash icon */}
                                        </button>
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default DeleteBooking;
