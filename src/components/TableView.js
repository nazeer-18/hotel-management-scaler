import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { DarkModeContext } from '../context/DarkModeContext';
import './bookings.css'

const TableView = ({ pageData }) => {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <Table striped bordered hover className={darkMode ? 'table dark-table' : 'table light-table'}>
            <thead>
                <tr>
                    <th>Customer Name</th>
                    <th>Customer Mobile</th>
                    <th>Customer Email</th>
                </tr>
            </thead>
            <tbody>
                {pageData.map((item, index) => (
                    <tr key={index}>
                        <td>{item.customer_name}</td>
                        <td>{item.customer_mobile_number}</td>
                        <td>{item.customer_email}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};
export default TableView;
