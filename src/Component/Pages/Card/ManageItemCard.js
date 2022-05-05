import React from 'react';
import './Card.css'

const ManageItemCard = ({ product }) => {
    const { name, _id, desc, img } = product
    return (
        <div className='item-card'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <button>delete</button>
        </div>
    );
};

export default ManageItemCard;