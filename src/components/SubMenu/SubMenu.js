import React from 'react';
import './SubMenu.css';

const SubMenu = () => {
    return (
        <div className="container mt-3">
            <div className="row row-cols-1 row-cols-md-3 g-3">
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body card-style">
                            <h5>Call for appointment</h5>
                            <button className="btn btn-danger btn-sm">Call</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body card-style">
                            <h5>Find Doctors</h5>
                            <button className="btn btn-danger btn-sm">Call</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body card-style">
                            <h5>Apply for Bed</h5>
                            <button className="btn btn-danger btn-sm">Call</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SubMenu;