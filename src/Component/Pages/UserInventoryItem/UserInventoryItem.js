import React from 'react';

const UserInventoryItem = ({ item, keys, handelDelete }) => {
    const { name, _id, email, img, suplierName, quantity } = item
    return (
        <tr>
            <th scope="row">{keys}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{suplierName}</td>
            <td>{quantity}</td>
            <td><button onClick={() => handelDelete(_id)} >Delete</button></td>
        </tr >
    );
};

export default UserInventoryItem;