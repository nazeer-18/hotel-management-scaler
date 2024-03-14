import React, { useState, useContext } from 'react';
import Navbar from './components/Navbar';
import { DarkModeContext } from './context/DarkModeContext';
import BodyImage from './components/BodyImage';
import ImageWrapper from './components/ImageWrapper';

const App = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className='app'>
      <Navbar />
      <div className={`p-3 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        <BodyImage></BodyImage>
      </div>
      <div className="rooms">fghjh eyju</div>
        <ImageWrapper></ImageWrapper>
    </div>
  );
};

export default App;