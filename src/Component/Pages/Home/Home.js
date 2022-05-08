import React from 'react';
import bannerImg from '../../../image/banner.webp'
import Inventory from '../Inventory/Inventory';
import Visit from '../Visit/Visit';
import Worker from '../Worker/Worker';
import './Home.css'


const Home = () => {
    return (
        <>
            <div className='banner'>
                <div>
                    <img className='banner-img' src={bannerImg} alt="" />
                </div>
                <h2 className='banner-title'>Welcome to Fruites Wearhouse </h2>
            </div>

            {/* inventory */}
            <Inventory></Inventory>

            <Worker></Worker>
            <Visit></Visit>


        </>
    );
};

export default Home;