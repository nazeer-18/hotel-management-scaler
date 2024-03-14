import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import { DarkModeContext } from './context/DarkModeContext';
import HomePage from './components/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>

  );
};

export default App;