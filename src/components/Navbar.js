import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { DarkModeContext } from '../context/DarkModeContext';
import './Navbar.css'; // Assuming this CSS file handles your styling

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    return (
        <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-secondary'}`}>
            <div className="container-fluid">
                {/*eslint-disable-next-line*/}
                <Link className="navbar-brand" to="/"><h4>Muntaj Hotel</h4></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* eslint-disable-next-line */}
                            <Link className={`nav-link ${darkMode ? 'text-white' : 'text-dark'}`} to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            {/* eslint-disable-next-line */}
                            <Link className={`nav-link ${darkMode ? 'text-white' : 'text-dark'}`} to="#">About</Link>
                        </li>
                        <li className="nav-item">
                            {/* eslint-disable-next-line */}
                            <Link className={`nav-link ${darkMode ? 'text-white' : 'text-dark'}`} to="#">Contact</Link>
                        </li>
                        <li className="nav-item toggle-btn">
                            <label className="switch" title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
                                <button className={`round-btn ${darkMode ? 'bg-white' : 'bg-dark'}`} onClick={toggleDarkMode}>
                                    {darkMode ? (
                                        <FontAwesomeIcon icon={faMoon} style={{ color: 'black', }} />
                                    ) : (
                                        <FontAwesomeIcon icon={faMoon} style={{ color: 'white' }} />
                                    )}
                                </button>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
