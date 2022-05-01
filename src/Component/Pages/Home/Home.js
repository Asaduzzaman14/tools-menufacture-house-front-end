import React from 'react';
import bannerImg from '../../../image/banner.jpg'
import Inventory from '../Inventory/Inventory';
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

            <Inventory></Inventory>
        </>
    );
};

export default Home;