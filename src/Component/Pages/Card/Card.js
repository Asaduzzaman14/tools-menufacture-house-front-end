import React from 'react';
import './Card.css'


const Card = ({ item }) => {
    console.log(item);
    return (
        <div>
            <div className='card-body'>
                <img src={item.pictures} alt="" />
                <h3>Name:{item.name}</h3>
                <p>Desc:{item.desc}</p>
            </div>
        </div>
    );
};

export default Card;