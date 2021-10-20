import React from 'react';
import SubMenu from '../../SubMenu/SubMenu';
import About from '../About/About';
import Banner from '../Banner/Banner';
import DoctorSlider from '../DoctorSlider/DoctorSlider';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SubMenu></SubMenu>
            <Services></Services>
            <div className="doctor-slider">
                <DoctorSlider />
            </div>
            <About></About>
        </div>
    );
};

export default Home;