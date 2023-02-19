import React from 'react';
import { useNavigate } from 'react-router-dom';

const VisitOne = ({ visitOne }) => {
    const { name, img, desc } = visitOne
    const navigate = useNavigate()

    return (
        <div>
            <div className='worker'>
                <img className='w-100' src={img} alt="" />
                <h5 className='mt-4'>{name}</h5>
                <p>{desc}</p>
                <button onClick={() => navigate('/about')} className='add-btn'>visit More</button>
            </div>
        </div>
    );
};

export default VisitOne;