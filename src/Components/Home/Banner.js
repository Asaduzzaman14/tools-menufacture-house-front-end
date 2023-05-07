import React from 'react';
import banner from '../Assets/extra/banner3.jpg'

const Banner = () => {

    return (<>
        <div className="hero min-h-screen w-100 bg-no-repeat bg-center bg-contain" style={{
            background: `url(${banner})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',

        }}>
            <div className="hero-overlay  bg-opacity"></div>
            <div className="hero-content text-center text-">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl font-bold text-base-200">Welcome to  <br></br> Friends<span className='text-secondary'>Factory</span></h1>
                    <p className="mb-5 text-md text-base-200 font-bold ">We have pleasure in inttroduction ourselves as one of the leading hands tools manufacture and esparts in Bangladesh. We are dadicated to menufacture high quality hands ranging from manul tools</p>
                </div>
            </div>
        </div >
    </>
    )
};

export default Banner;