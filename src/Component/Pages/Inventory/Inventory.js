import React, { useEffect, useState } from 'react';
import useInventory from '../../../hooks/useInventory';
import Card from '../Card/Card';
import './Inventory.css'



const Inventory = () => {

    const [inventorys, setInventorys] = useInventory()

    const homepageItem = inventorys.slice(0, 6)

    return (
        <div className='inventory-container'>
            <div>
                <h3 className='inventory-section-title'>inventory Items</h3>
            </div>
            <div className='card-container'>
                {
                    homepageItem.map(item => <Card
                        item={item}
                        key={item._id}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Inventory;