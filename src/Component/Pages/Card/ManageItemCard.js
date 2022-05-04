import React from 'react';

const ManageItemCard = ({ product }) => {
    return (
        <div>
            <h2>{product.name}</h2>
            <button>delete</button>
        </div>
    );
};

export default ManageItemCard;