import React, { useEffect, useState } from 'react';
import useProducts from '../../../hooks/useProducts';
import Card from '../Card/Card';
import './Inventory.css'



const Inventory = () => {

    const [items, setItems] = useProducts()



    return (
        <div className='inventory-container'>
            <div>
                <h3 className='inventory-section-title'>inventory Items</h3>
            </div>
            <div className='card-container'>
                {
                    items.map(item => <Card
                        item={item}
                        key={item._id}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Inventory;