import React from 'react';
import './Card.css'


const Card = ({ item }) => {
    console.log(item);
    return (
        <div>
            <div className='card-body'>
                <img src={item.pictures} alt="" />
                <h3>Name:{item.name}</h3>
                <p>supplier name:{item.desc}</p>
                <p>price:{item.desc}</p>
                <p>quantity:{item.desc}</p>

                <button>Update</button>
            </div>
        </div>
    );
};

export default Card;