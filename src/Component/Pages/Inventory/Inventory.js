import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useInventory from '../../../hooks/useInventory';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import './Inventory.css'



const Inventory = () => {
    const navigate = useNavigate()

    const [inventorys, setInventorys] = useInventory()
    const homepageItem = inventorys.slice(0, 6)

    if (!homepageItem) {
        <Loading></Loading>
    }

    return (
        <div className='inventory-container'>
            <div>
                <h3 className='inventory-section-title'>inventory Items</h3>
            </div>


            <div className='card-container'> {homepageItem.map(item => <Card
                item={item}
                key={item._id
                }></Card>)}

            </div>





        </div>
    );
};

export default Inventory;