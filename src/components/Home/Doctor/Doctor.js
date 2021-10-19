import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useDoctors from '../../../hooks/useDoctors/useDoctors';
import Booking from '../Booking/Booking';
import './Doctor.css';

const Doctor = () => {
    const { doctorId } = useParams();
    const [doctors] = useDoctors();
    const [doctor, setDoctor] = useState({});
    console.log(doctors);
    useEffect(() => {
        const fetchDoctor = doctors.find(doctor => doctor.id == doctorId);
        setDoctor(fetchDoctor);
    }, [doctors, doctorId]);
    return (
        <div className="container my-5">
            <h3 className="text-center my-5"><span className="border-bottom mb-2 border-success border-bottom-3">Doctor Details</span></h3>
            <div className="row">
                <div className="col-lg-6 mb-5">
                    <div className="card rounded card-responsive p-3 shadow-lg">
                        <img src={doctor?.img} className="card-img-top rounded-pill" alt="..." />
                        <div className="card-body  text-center">
                            <h5 className="card-title">{doctor?.name}</h5>
                            <p className="card-text fw-bold">{doctor?.qualification}</p>
                            <p className="card-text">{doctor?.designation}</p>
                            <p className="card-text">Room No: {doctor?.room}</p>
                            <p className="card-text">Consultation Time: {doctor?.consultationTime}</p>
                            <p className="card-text fw-bold">Fee {doctor?.fee}tk</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 text-center">
                    <Booking></Booking>
                </div>
            </div>
        </div>
    );
};

export default Doctor;