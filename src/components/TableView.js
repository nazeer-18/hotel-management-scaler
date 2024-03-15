import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { DarkModeContext } from '../context/DarkModeContext';
import './bookings.css'

const TableView = ({ pageData }) => {
    const { darkMode } = useContext(DarkModeContext);
    const convertDate = (dateStr) => {
        const date = new Date(dateStr);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}-${month < 10 ? '0' : ''}${month}-${year}`;
    };
    return (
        <Table striped bordered hover className={darkMode ? 'table dark-table' : 'table light-table'}>
            <thead>
                <tr>
                    <th>Customer Name</th>
                    <th>Customer Mobile</th>
                    <th>Start Date</th>
                    <th>Start Time</th>
                    <th>End Date</th>
                    <th>End Time</th>
                    <th>Rooms Booked</th>
                    <th>Room Numbers</th>
                </tr>
            </thead>
            <tbody>
                {pageData.map((item, index) => (
                    <tr key={index}>
                        <td>{item.customer_name}</td>
                        <td>{item.customer_mobile_number}</td>
                        <td>{convertDate(item.start_date)}</td>
                        <td>{item.start_time}</td>
                        <td>{convertDate(item.end_date)}</td>
                        <td>{item.end_time}</td>
                        <td>{item.room_types.join(' , ')}</td>
                        <td>{item.room_numbers}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};
export default TableView;
