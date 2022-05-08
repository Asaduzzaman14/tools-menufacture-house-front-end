import React from 'react';
import bannerImg from '../../../image/banner.webp'
import Inventory from '../Inventory/Inventory';
import Worker from '../Worker/Worker';
import './Home.css'


const Home = () => {
    return (
        <>
            <div className='banner'>
                <div>
                    <img className='banner-img' src={bannerImg} alt="" />
                </div>
                <h2 className='banner-title'>Wearhouse management web</h2>
            </div>

            {/* inventory */}
            <Inventory></Inventory>

            <Worker></Worker>


        </>
    );
};

export default Home;