import React from 'react';

const ManageTool = ({ tool, index, setRemoveTools }) => {
    console.log(tool);
    const { name, _id, img, price, desc, email, minOrderQuantity, availableQuantity } = tool

    return (
        <tr>
            <th>{index + 1}</th>
            <td><img className='rounded-full shadow-lg w-16' src={img} alt="" /></td>
            <td>{name}</td>
            <td>{minOrderQuantity}</td>
            <td>{availableQuantity}</td>

            <td>
                <label onClick={() => setRemoveTools(tool)} for="remove-tool" class="btn modal-button btn-xs text-error modal-button">Remove</label>
            </td>
        </tr>

    );
};

export default ManageTool;