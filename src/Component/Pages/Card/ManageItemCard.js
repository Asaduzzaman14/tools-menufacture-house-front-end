import React from 'react';
import useProducts from '../../../hooks/useInventory';
import './Card.css'

const ManageItemCard = ({ product }) => {
    const { name, _id, desc, img } = product

    const [inventory, setInventory] = useProducts()

    const handelDelete = (id) => {
        const proceed = window.confirm('Are you sure')
        if (proceed) {

            const url = `http://localhost:5000/item/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventory.filter(inventory => inventory._id !== id)
                    setInventory(remaining)
                })

        }

    }


    return (
        <div className='item-card'>
            <img src={img} alt="" />
            <h6>{name}</h6>
            <h5>{_id}</h5>
            <div>
                <button onClick={() => handelDelete(_id)}>delete</button>
            </div>

        </div >
    );
};

export default ManageItemCard;