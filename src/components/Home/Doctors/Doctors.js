import React from 'react';
import { Link } from 'react-router-dom';
import useDoctors from '../../../hooks/useDoctors/useDoctors';

const Doctors = () => {
    // fetch doctor from hook
    const [doctors] = useDoctors();
    console.log(doctors);
    return (
        <>
            <div className="container">
                <div className="section-title">
                    <h3 className="text-center my-5"><span className="border-bottom mb-2 border-success border-bottom-3">Available Doctors</span></h3>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        // show all doctors
                        doctors.map(doctor => (
                            <div key={doctor.id} className="col">
                                <div className="card h-100">
                                    <img src={doctor.img} className="card-img-top" alt="..." />
                                    <div className="card-body  text-center shadow-lg">
                                        <h5 className="card-title">{doctor.name}</h5>
                                        <p className="card-text">{doctor.qualification}</p>
                                        <p className="card-text">{doctor.designation}</p>
                                        {/* <p className="card-text">Room No: {doctor.room}</p>
                                        <p className="card-text">Fee {doctor.fee}tk</p> */}
                                        <Link to={`/doctor/${doctor.id}`}>
                                            <button className="btn btn-success rounded">Make Appointment</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Doctors;