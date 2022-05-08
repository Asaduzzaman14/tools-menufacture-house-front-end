import React from 'react';
import './Worker.css'
const SingleWorker = ({ worker }) => {
    const { name, img, desc } = worker
    return (
        <div className='worker'>
            <img src={img} alt="" />
            <h5 className='mt-4'>{name}</h5>
            <p>{desc}</p>
        </div>
    );
};

export default SingleWorker;