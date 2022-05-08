import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Card.css'


const Card = ({ item }) => {
    const navigate = useNavigate()

    return (
        <div>
            <div className='card-body col-12'>
                <img src={item.img} alt="" />
                <h3>Name: {item.name}</h3>
                <p>desc : {item.desc.split(0, 20)}</p>
                <p>supplier name: {item.suplierName}</p>
                <p>price: {item.price}</p>
                <p>quantity: {item.quantity}</p>


                <button onClick={() => navigate(`/deliverd/${item._id}`)} className='update-btn'>Update</button>
            </div>
        </div>
    );
};

export default Card;