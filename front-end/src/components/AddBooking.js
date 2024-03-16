import React, { useState, useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

const AddBooking = () => {
    const { darkMode } = useContext(DarkModeContext);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [formValid, setFormValid] = useState(false);
    const [availableRooms, setAvailableRooms] = useState([]);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNumber(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    const handleBooking = () => {
        // Your booking logic here
    };

    const validateForm = () => {
        // Your form validation logic here
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4 shadow">
                        <h2 className="mb-4">Add Booking</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={name}
                                    onChange={handleNameChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="number" className="form-label">Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="number"
                                    value={number}
                                    onChange={handleNumberChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="startDate" className="form-label">Start Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="startDate"
                                    value={startDate}
                                    onChange={handleStartDateChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="endDate" className="form-label">End Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="endDate"
                                    value={endDate}
                                    onChange={handleEndDateChange}
                                    required
                                />
                            </div>
                            <div>
                                <button type="button">
                                    Fetch Available Rooms
                                </button>

                                {/* Display available rooms */}
                                {availableRooms.length > 0 && (
                                    <div>
                                        <h3>Available Rooms</h3>
                                        <ul>
                                            {availableRooms.map((room, index) => (
                                                <li key={index}>{room.type}: {room.count}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <button type="button" className="btn btn-primary mt-3" onClick={handleBooking} disabled={!formValid}>Book</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBooking;
