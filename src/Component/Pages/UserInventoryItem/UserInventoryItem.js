import React from 'react';

const UserInventoryItem = ({ item, keys }) => {
    const { name, img, desc, _id, quantity } = item
    return (
        <tr>
            <th scope="row">{keys}</th>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{_id}</td>
        </tr>
    );
};

export default UserInventoryItem;