import React, { useEffect, useState } from 'react';

const Hotline = () => {
    const [numbers, setNumbers] = useState([]);
    useEffect(() => {
        fetch('./hotline.json')
            .then(res => res.json())
            .then(data => setNumbers(data))
    }, []);
    return (
        <div className="container">
            <h3 className="text-center my-5"><span className="border-bottom mb-2 border-success border-bottom-3">Hotlines</span></h3>
            <div className="row">
                {
                    numbers.map(number => (
                        <div className="col-lg-4">
                            <div>
                                <div className="row">
                                    <div className="col-lg-3"></div>
                                    <div className="col-lg-9">
                                        <div className="bg-warning text-center rounded fw-bold">
                                            <p>{number.number1}</p>
                                            <p>{number.number2}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Hotline;