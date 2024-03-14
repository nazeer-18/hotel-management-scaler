import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import './Navbar.css'; // Assuming this CSS file handles your styling

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    return (
        <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-secondary'}`}>
            <div className="container-fluid"> 
            {/*eslint-disable-next-line*/}
                <a className="navbar-brand" href="#"><h4>Muntaj Hotel</h4></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                    {/* eslint-disable-next-line */}
                            <a className={`nav-link ${darkMode ? 'text-white' : 'text-dark'}`} href="#">About</a>
                        </li>
                        <li className="nav-item">
                    {/* eslint-disable-next-line */}
                            <a className={`nav-link ${darkMode ? 'text-white' : 'text-dark'}`} href="#">Contact</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <label className="switch form-check form-switch" title="Toggle dark mode">
                                <input className="form-check-input" type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
                                <span className="slider round"></span>
                                <span className={`nav-link ${darkMode ? 'text-white' : 'text-dark'}`}>Dark Mode</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
