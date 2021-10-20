import React from 'react';
import useServices from '../../../hooks/useServices/useServices';
import { Link } from 'react-router-dom';

const Services = () => {
    // fetch services from hook
    const [services] = useServices();
    console.log(services);
    return (
        <div className="container">
            <div className="section-title">
                <h3 className="text-center my-5"><span className="border-bottom mb-2 border-success border-bottom-3">Services</span></h3>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    // show all servicess
                    services.map(service => (
                        <div key={service.id} className="col">
                            <div className="card h-100">
                                <img src={service.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{service.name}</h5>
                                    <p className="card-text">{service.description.slice(0, 50)}</p>
                                    <Link to={`/service/${service.id}`}>
                                        <button className="btn btn-success rounded">Read More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div >
    );
};

export default Services;