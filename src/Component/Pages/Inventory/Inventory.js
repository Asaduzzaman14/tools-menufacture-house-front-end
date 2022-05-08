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


    return (
        <div className='inventory-container'>
            <div>
                <h3 className='inventory-section-title'>inventory Items</h3>
            </div>

            {homepageItem.length === 0 ? <Loading></Loading> : ''

            }
            <div className='card-container'> {homepageItem.map(item => <Card
                item={item}
                key={item._id
                }></Card>)}

            </div>



            <button onClick={() => navigate('/manageitem')} className='add-btn mt-5'>Manage Inventory</button>

        </div>
    );
};

export default Inventory;