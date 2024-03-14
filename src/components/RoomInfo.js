import React from 'react';

const RoomInfo = ({ roomName, availableRooms }) => {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
        <div className="room-info">
            <p>{roomName}</p>
            <p className="avl">{availableRooms}</p>
        </div>
        </div>
    );
};

export default RoomInfo;
