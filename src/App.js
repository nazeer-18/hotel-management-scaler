import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { DarkModeContext } from './context/DarkModeContext';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={`app ${darkMode ? 'dark' : 'light'}`}>
        <Navbar />
        {/* Other components of your app */}
      </div>
    </DarkModeContext.Provider>
  );
};

export default App;