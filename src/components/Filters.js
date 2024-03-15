import React, { useState, useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import './bookings.css'
import { Container, Grid, Typography, FormControl, InputLabel, Select, MenuItem, Checkbox, FormGroup, FormControlLabel, TextField, Button } from '@mui/material';

import Dropdown from 'react-bootstrap/Dropdown';


const Filter = () => {
    const { darkMode } = useContext(DarkModeContext);
    const [roomType, setRoomType] = useState([]);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [roomNumber, setRoomNumber] = useState('');
    // State to manage dropdown visibility
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Function to handle selection
    const handleSelection = (option) => {
        console.log("Selected option:", option);
        // You can perform any action here with the selected option
        // For example, if you want to close the dropdown after selection:
        setIsOpen(false);
    };
    return (
        <div className={`p-3 ${darkMode ? 'filters-div' : 'bg-light text-dark'}`}>
            <div className="parent bg-light p-3">
                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        No Option
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>No Option</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Filter by Room Number and Room Type
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Filter by Room Number and Room Type</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Filter by Start Time and End Time
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Filter by Start Time and End Time</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Filter by Start Date and End Date
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Filter by Start Date and End Date</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
};

export default Filter;
