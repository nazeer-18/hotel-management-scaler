import React, { useState, useEffect} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './bookings.css'
import axios from 'axios';
import Filters from './Filters';
import ViewTables from './ViewTables';

const ViewBookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            const response = await axios.get('http://localhost:7000/fetchBookings');
            setBookings(response.data);
            //setFilteredBookings(response.data);
        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
    };

    return (
        <Container fluid>
            <Row>
                <Col lg={3} md={4} sm={12} style={{ padding: 5 }}>
                    <Filters />
                </Col>
                <Col lg={9} md={8} sm={12} style={{ padding: 10 }}>
                    <h1>Bookings</h1>
                        <ViewTables bookings={bookings}/>
                </Col>
            </Row>
        </Container>
    );
};

export default ViewBookings;
