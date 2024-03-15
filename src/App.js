import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage'
import ViewBookings from './components/ViewBookings'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DeleteBooking from './components/DeleteBooking';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route exact path='/home' element={<HomePage />}></Route>
        <Route exact path='/viewBookings' element={<ViewBookings />}></Route>
        <Route exact path='/deleteBookings' element={<DeleteBooking />}></Route>
      </Routes>
    </BrowserRouter>

  );
};

export default App;