import './BodyImage.css';
import { Link } from 'react-router-dom';

export default function Functionalities() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, culpa velit! Dolorem enim voluptas natus quisquam eos ipsa odio, repudiandae quod laborum! Aspernatur necessitatibus quisquam consectetur temporibus quo minus reiciendis fuga rerum fugit repellendus ipsum aliquam corporis dignissimos facilis, at dicta mollitia hic doloribus suscipit maxime, eius placeat qui deleniti. Est praesentium odio adipisci ut voluptatem nisi aliquam error repellendus.
                </div>
                <div className="col-lg-6 d-flex justify-content-center align-items-center">
                    <div className="container ">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="p-4 text-center">
                                    <div className='button-sam'>
                                        <Link to="/ViewBookings">
                                            <button className=" btn btn-primary btn-lg mb-3">View Bookings</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="p-4 text-center">
                                    <div className='button-sam'>
                                        <Link to="/DeleteBookings">
                                            <button className=" btn btn-primary btn-lg mb-3">Delete Bookings</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="p-4 text-center">
                                    <div className='button-sam'>
                                        <Link to="/Bookings">
                                            <button className=" btn btn-primary btn-lg mb-3">Add Bookings</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="p-4 text-center">
                                    <div className='button-sam'>
                                        <Link to="/Bookings">
                                            <button className=" btn btn-primary btn-lg mb-3">Edit Bookings</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='button-sam'>
                        <button className=" btn btn-primary btn-lg mb-3">Book Your Stay</button></div> */}
                </div>
            </div>
        </div>
    );
}