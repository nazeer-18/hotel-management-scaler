import React, { useState, useContext } from 'react';
import './bookings.css'


const Filter = () => {

    const [filterByTime, setFilterByTime] = useState(false);
    const [filterByRooms, setFilterByRooms] = useState(false);
    const [key, setKey] = useState(0);

    const handleFilterByTime = () => {
        setFilterByTime(!filterByTime);
    };

    const handleFilterByRoom = () => {
        setFilterByRooms(!filterByRooms);
    };

    const handleClearAllFilters = () => {
        setFilterByTime(false);
        setFilterByRooms(false);
        setKey(prevKey => prevKey + 1);
    };

    return (
        <div key={key} className="p-3 filters-div">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"><h2>Filters</h2></div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 button-clear"><button className=" mb-3" onClick={handleClearAllFilters}>CLEAR ALL</button></div>
                </div>
                <div className="row">
                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="filterByTime"
                            onChange={handleFilterByTime}
                        />
                        <label className="form-check-label" htmlFor="filterByTime">
                            Filter by Time
                        </label>
                    </div>

                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="filterByRooms"
                            onChange={handleFilterByRoom}
                        />
                        <label className="form-check-label" htmlFor="filterByRooms">
                            Filter by Rooms
                        </label>
                    </div>
                    <h3>filters yet to be applied</h3>
                </div>
            </div>
        </div>
    );
};

export default Filter;
