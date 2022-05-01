import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Inventory.css'



const Inventory = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('fake.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div className='inventory-container'>
            <div>
                <h3 className='inventory-section-title'>This is inventory page</h3>
            </div>
            <div className='card-container'>
                {
                    items.map(item => <Card
                        item={item}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Inventory;