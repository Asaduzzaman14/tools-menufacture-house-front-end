import React from 'react';

const ManageOrder = ({ order, index }) => {
    const { name, _id, img, price, desc, email, quantity } = order

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{price}</td>
            <td>{quantity}</td>

            <td><button onClick={''} className="btn btn-xs">Remove</button></td>
        </tr>
    );
};

export default ManageOrder;