import React from 'react';
import ImageWrapper from './ImageWrapper';
import './BodyImage.css';
import RoomInfo from './RoomInfo';

const BodyImage = () => {
    return (
        <div className="container">
            <div className="row">
                {/* Left part */}
                <div className="col-lg-6">
                    <div className="left-content">
                        <p className="luxury-experience">Experience luxury at our hotel.</p>
                        <button className="btn btn-primary btn-lg mb-3">Book Your Stay</button>
                    </div>
                    <div className="room-list">
                        <h3>Rooms Available:</h3>
                        <div className="row room-info-container">
                            <RoomInfo roomName="Basic" availableRooms={2} />
                            <RoomInfo roomName="Luxury" availableRooms={3} />
                            <RoomInfo roomName="Suite" availableRooms={5} />
                        </div>
                    </div>
                </div>

                {/* Right part */}
                <div className="col-lg-6">
                    <div className="image-container">
                        <ImageWrapper src="https://imgs.search.brave.com/6Pgwxm5-eHJjDobWmJZ8sQ0F67bSSHwKaO-inv2Tlo4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/OS8xOC8wMy8yOC90/cmF2ZWwtMTY3NzM0/N182NDAuanBn" alt="Hotel Image 1" clsname="img-1" />
                        <ImageWrapper src="https://imgs.search.brave.com/tvuYS1ojA168YBGw_syCk7K-35VJqfrIibBdFS7gZc8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODQz/ODIzNjU2L3Bob3Rv/L2hvdGVsLXJvb20u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTgtWk5BNTJlNUds/UHV1UVBYcVpSZ3NU/TzlXUlp3WmdGdERv/dHlDNkNHSFk9" alt="Hotel Image 2" clsname="img-2"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BodyImage;
