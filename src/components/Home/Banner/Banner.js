import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo1 from '../../../images/banner/rsz_1ambolance.jpg';
import logo2 from '../../../images/banner/rsz_high-quality-care.jpg';
import logo3 from '../../../images/banner/rsz_pharmecy-banner.jpg';
import logo4 from '../../../images/banner/rsz_special-offer.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <Carousel variant="light">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>Ambulance Service</h5>
                    <p>We provide 24 hour ambulance services..</p>
                    <button className="btn-primary">See more</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className="btn-primary">See more</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <button className="btn-primary">See more</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo4}
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                    <h5>Fourth slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <button className="btn-primary">See more</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;