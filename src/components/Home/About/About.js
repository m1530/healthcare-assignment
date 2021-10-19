import React from 'react';
import aboutImg from '../../../images/login/login.jpg';

const About = () => {
    return (
        <div className="container my-4">
            <h3 className="text-center my-5"><span className="border-bottom mb-2 border-success border-bottom-3">About Us</span></h3>
            <div className="row">
                <div className="col-lg-6">
                    <h4>Our Mission</h4>
                    <p>To establish a referral Diagnostic and Medical Services Centre.</p>
                    <h4>Our Objective</h4>
                    <p>To render the world standard diagnostic service to the people of the country at an affordable cost and in turn to limit the outflow of the patient abroad at the expense of heard earn foreign currency by providing quality diagnostic services.</p>
                    <p>Out door basis treatment by renowned General Practitioners, Consultants and Professors in different medical fields.</p>
                    <p>To promote Health Education & Medical Services.</p>
                    <p>Set up Satellite collection Centre.</p>
                </div>

                <div className="col-lg-6">
                    <img className="img-fluid" src={aboutImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;