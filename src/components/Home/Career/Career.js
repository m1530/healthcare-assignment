import React from 'react';
import job from '../../../images/login/job.jpg';
import { NavLink } from 'react-router-dom';

const Career = () => {
    return (
        <div className="container text-center my-4">
            <h1>Career at Dr. Moyna Mia Medical Center</h1>
            <div className="row">
                <div className="col-md-12">
                    <img className="img-fluid" src={job} alt="" />
                </div>
                <NavLink to="/job"><button className="btn btn-custome my-5">Apply This Jod</button></NavLink>
            </div>
        </div>
    );
};

export default Career;