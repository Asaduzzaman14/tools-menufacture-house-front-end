import React from 'react';
import useProducts from '../../../hooks/useInventory';
import { AiFillEye } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import './Card.css'

const ManageItemCard = ({ product, index }) => {
    const navigate = useNavigate()
    const { name, _id, price, desc, img, quantity, } = product

    const [inventory, setInventory] = useProducts()

    const handelDelete = (id) => {
        const proceed = window.confirm('Are you sure you went delete this item')
        console.log(proceed);
        if (proceed) {

            const url = `https://warehouse-management-server-gray.vercel.app/item/${id}`
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
        <tr className='manage-item '>
            <td className='align-middle'>{index}</td>
            <td className='align-middle'><img src={img} alt="" /></td>
            <td className='align-middle'>{name}</td>
            <td className='align-middle'>{name}</td>
            <td className='align-middle'>{price}</td>
            <td className='align-middle'>{quantity}</td>

            <td className='align-middle'>
                <div className='d-flex justify-content-center gap-2'>
                    <span className='update-icon' onClick={() => navigate(`/updateitem/${_id}`)} ><AiFillEye></AiFillEye></span>
                    <span className='delete-icon' onClick={() => handelDelete(_id)} ><MdDelete></MdDelete></span>
                </div>
            </td>

        </tr>
    );
};

export default ManageItemCard;