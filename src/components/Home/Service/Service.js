import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useServices from '../../../hooks/useServices/useServices';
import './Service.css';
import Booking from '../Booking/Booking';

const Service = () => {
    const { serviceId } = useParams();
    const [services] = useServices();

    const [service, setService] = useState({});
    console.log(service);
    useEffect(() => {
        const fetchService = services.find((item) => item?.id == serviceId);
        setService(fetchService);
    }, [services, serviceId]);

    return (
        <div className="container">
            <h3 className="text-center my-5"><span className="border-bottom mb-2 border-success border-bottom-3">Service Information</span></h3>
            <div className="row mt-2 mb-5">
                <div className="col-lg-7">
                    <div className="service-image text-left my-5">
                        <img className="img-fluid rounded" src={service?.img} alt="" />
                    </div>
                    <div className="service-title">
                        <h4 className="my-4">{service?.name} Services</h4>
                        <hr />
                        <p>Description: {service?.description}</p>
                        <p>Special Service: {service?.services}</p>
                    </div>
                </div>
                <div className="col-lg-5 text-center mt-4">
                    <Booking></Booking>
                </div>
            </div>

        </div>
    );
};

export default Service;