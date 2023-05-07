import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ContuctUs from './ContuctUs';
import VisitManufacturerHouse from './VisitManufacturerHouse';
import Parts from './Parts';
import Reviews from './Reviews';
import Summery from './Summery';

const Home = () => {
    return (
        <>
            <div className=''>
                <Banner></Banner>
                <Parts></Parts>
                <Reviews></Reviews>
                <VisitManufacturerHouse></VisitManufacturerHouse>
                <Summery></Summery>
                <ContuctUs></ContuctUs>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;
