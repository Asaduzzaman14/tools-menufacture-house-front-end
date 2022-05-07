import React from 'react';
import useProducts from '../../../hooks/useInventory';
import './Card.css'

const ManageItemCard = ({ product, index }) => {
    const { name, _id, price, desc, img, quantity, } = product

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
        <tr className='manage-item w-50'>
            <th scope="row">{index}</th>
            <td><img src={img} alt="" /></td>
            <td>{name}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><button onClick={() => { handelDelete(_id) }} >delete</button></td>
            <td><button>update</button></td>

        </tr>
    );
};

export default ManageItemCard;