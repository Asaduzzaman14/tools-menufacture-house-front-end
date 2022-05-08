import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';
import './UserInventoryItem.css'


const UserInventoryItem = ({ item, keys, handelDelete }) => {
    const { name, _id, email, img, supplierName, quantity } = item
    return (
        <tr className='my-item'>
            <td >{keys}</td>
            <td >{name}</td>
            <td>{email}</td>
            <td>{supplierName}</td>
            <td>{quantity}</td>
            <td><span className='update-icon' onClick={() => { }} ><GrUpdate></GrUpdate></span></td>
            <td><span className='delete-icon' onClick={() => handelDelete(_id)} ><AiFillDelete></AiFillDelete></span></td>
        </tr >
    );
};

export default UserInventoryItem;