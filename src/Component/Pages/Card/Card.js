import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Card.css'


const Card = ({ item }) => {
    const navigate = useNavigate()

    return (
        <div>
            <div className='card-body'>
                <img src={item.img} alt="" />
                <h3>Name: {item.name}</h3>
                <p>supplier name: {item.desc}</p>
                <p>price: {item.price}</p>
                <p>quantity: {item.quantity}</p>


                <button onClick={() => navigate(`/deliverd/${item._id}`)} className='update-btn'>Update</button>
            </div>
        </div>
    );
};

export default Card;