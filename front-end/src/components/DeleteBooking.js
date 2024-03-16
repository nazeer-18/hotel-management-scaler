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
            const response = await axios.get('https://hotel-management-scaler-backend.onrender.com/fetchBookings');
            setBookings(response.data);
        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
    };
    const convertDate = (dateStr) => {
        const date = new Date(dateStr);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}-${month < 10 ? '0' : ''}${month}-${year}`;
    };
    function getLocalDateTime() {
        const now = new Date();
        const localDate = `${now.getDate().toString().padStart(2, '0')}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getFullYear()}`;
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const localTime = `${hours}:${minutes}`;

        return { localDate, localTime };
    }
    function getTimeDifference(currentTime, currentDate, givenTime, givenDate) {
        const [currentHours, currentMinutes] = currentTime.split(':').map(Number);
        const [givenHours, givenMinutes] = givenTime.split(':').map(Number);
        const [currentDay, currentMonth, currentYear] = currentDate.split('-').map(Number);
        const [givenDay, givenMonth, givenYear] = givenDate.split('-').map(Number);
        const currentDateTime = new Date(currentYear, currentMonth - 1, currentDay, currentHours, currentMinutes);
        const givenDateTime = new Date(givenYear, givenMonth - 1, givenDay, givenHours, givenMinutes);

        const timeDifferenceMillis = givenDateTime - currentDateTime;
        const timeDifferenceHours = Math.abs(timeDifferenceMillis) / (1000 * 60 * 60);

        return timeDifferenceHours;
    }
    function filterFutureBookings(bookings) {

        const { localDate, localTime } = getLocalDateTime();
        const currentTime = localTime;
        const today = localDate;

        const futureBookings = bookings.filter(booking => {
            const startTime = booking.start_time;
            const startDate = convertDate(booking.start_date);

            if (startDate > today) {
                return true;
            }

            // If booking date is same as today's date, check start time
            if (startDate === today) {
                return startTime > currentTime;
            }

            return false;
        });

        return futureBookings;
    }
    const filteredBookings = filterFutureBookings(bookings);
    const handleDeleteBooking = async (booking) => {
        const selectedBookingId = booking._id;
        try {
            const startTime = booking.start_time;
            const startDate = convertDate(booking.start_date);
            const { localDate, localTime } = getLocalDateTime();
            const timeDifferenceInHours = getTimeDifference(localTime, localDate, startTime, startDate);
            let refundAmount = 0;
            if (timeDifferenceInHours > 48) {
                refundAmount = booking.total_bill;
            } else if (timeDifferenceInHours > 24) {
                refundAmount = booking.total_bill / 2;
            }
            if (refundAmount > 0) {
                const confirmed = window.confirm(`Are you sure you want to delete this booking? You get a Refund Amount: $${refundAmount.toFixed(2)}`);
                if (!confirmed) {
                    return;
                }
                //showAlert("Successfully deleted the booking", "success")
            } else {
                const confirmed = window.confirm(`Are you sure you want to delete this booking? You get No Refund`);
                if (!confirmed) {
                    return;
                }
            }
            await axios.delete(`https://hotel-management-scaler-backend.onrender.com/deleteBooking/${selectedBookingId}`);
            setDeletedBookingId(selectedBookingId);
            setSelectedBookingId(null);
            const response = await axios.get('https://hotel-management-scaler-backend.onrender.com/fetchBookings');
            setBookings(response.data);
        } catch (error) {
            console.error('Error deleting booking:', error);
        }

    };
    return (
        <div className={`p-3 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
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
                            <th> Bill</th>
                            <th>Rooms Booked</th>
                            <th>Room Numbers</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBookings.map((filteredBookings) => (
                            <tr key={filteredBookings._id} className={selectedBookingId === filteredBookings._id ? 'selected-row' : ''}>
                                <td>{filteredBookings._id}</td>
                                <td>{filteredBookings.customer_name}</td>
                                <td>{filteredBookings.customer_mobile_number}</td>
                                <td>{convertDate(filteredBookings.start_date)}</td>
                                <td>{filteredBookings.start_time}</td>
                                <td>{convertDate(filteredBookings.end_date)}</td>
                                <td>{filteredBookings.end_time}</td>
                                <td>{filteredBookings.total_bill}</td>
                                <td>{filteredBookings.room_types.join(' , ')}</td>
                                <td>{filteredBookings.room_numbers.join(' , ')}</td>
                                <td>
                                    <label title="Delete this">
                                        <button className="rounded-button" onClick={() => handleDeleteBooking(filteredBookings)}>
                                            <FaTrash />
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
