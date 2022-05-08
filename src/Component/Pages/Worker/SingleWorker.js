import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Worker.css'
const SingleWorker = ({ worker }) => {
    const { name, img, desc } = worker
    const navigate = useNavigate()

    return (
        <div className='worker'>
            <img src={img} alt="" />
            <h5 className='mt-4'>{name}</h5>
            <p>{desc}</p>
            <button onClick={() => navigate('/about')} className='add-btn'>See worker detail</button>
        </div>
    );
};

export default SingleWorker;