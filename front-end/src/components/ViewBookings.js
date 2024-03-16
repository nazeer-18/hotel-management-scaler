import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './bookings.css'
import axios from 'axios';
import { DarkModeContext } from '../context/DarkModeContext';
import Filters from './Filters';
import ViewTables from './ViewTables';

const ViewBookings = () => {
    const [bookings, setBookings] = useState([]);
    const { darkMode } = useContext(DarkModeContext);
    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            const response = await axios.get('https://hotel-management-scaler-backend.onrender.com/fetchBookings');
            setBookings(response.data);
            //setFilteredBookings(response.data);
        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
    };

    return (
        <div className={`p-3 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
            <Container fluid>
                <Row>
                    <Col lg={3} md={4} sm={12} style={{ padding: 5 }}>
                        <Filters />
                    </Col>
                    <Col lg={9} md={8} sm={12} style={{ padding: 10 }}>
                        <h1 style={{ textAlign: "center" }}>Bookings</h1>
                        <ViewTables bookings={bookings} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ViewBookings;
