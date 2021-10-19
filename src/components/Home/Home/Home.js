import React from 'react';
import SubMenu from '../../SubMenu/SubMenu';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SubMenu></SubMenu>
            <Services></Services>
            <Doctors></Doctors>
            <About></About>
        </div>
    );
};

export default Home;