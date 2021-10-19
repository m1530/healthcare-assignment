import React from 'react';
import { Link } from 'react-router-dom';
import './SubMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faBed } from '@fortawesome/free-solid-svg-icons';

const SubMenu = () => {
    return (
        <div className="container mt-3">
            <div className="row row-cols-1 row-cols-md-3 g-3">
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body card-style">
                            <h5>Call for appointment</h5>
                            <Link to='/hotline'>
                                <button className="btn text-white btn-sm"><h3><FontAwesomeIcon icon={faPhone} /> Take Appointment</h3></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body card-style">
                            <h5>Find Doctors</h5>
                            <Link to='/doctors'>
                                <button className="btn text-white btn-sm"><h3><FontAwesomeIcon icon={faUser} /> Our Doctors</h3></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body card-style">
                            <h5>Apply for Bed</h5>
                            <Link to='/booking'>
                                <button className="btn text-white btn-sm"><h3><FontAwesomeIcon icon={faBed} />Take Appointment</h3></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SubMenu;