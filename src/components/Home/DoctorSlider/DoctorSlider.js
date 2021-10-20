import React from 'react';
import './DoctorSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useDoctors from '../../../hooks/useDoctors/useDoctors';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
}
const DoctorSlider = () => {

    const [doctors] = useDoctors();
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <div className="container my-5">
            <h3 className="text-center my-5"><span className="border-bottom mb-2 border-success border-bottom-3">Available Doctors</span></h3>
            <Slider {...settings} >
                {
                    doctors.map(doctor => (
                        <div key={doctor.id} className="card-wrapper">
                            <div className="slider-card card my-3 h-100 shadow">
                                <div className="card-img-top">
                                    <img className="img-fluid" src={doctor.img} alt=".." />
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title">{doctor.name}</h6>
                                    <p><span className="job-title">{doctor.qualification.slice(0, 20)}</span></p>
                                    <Link to={`/doctor/${doctor.id}`}>
                                        <button className="btn btn-success btn-sm rounded">Make Appointment</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default DoctorSlider;