import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import DeleteOrderModal from './DeleteOrderModal';

const Order = ({ order, index, setOrderDeleteId, refetch }) => {

    const { name, _id, img, email, quantity, price, paid, transectionId } = order

    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{quantity}</td>
                <td>{price}</td>

                <td>
                    {!paid && <>
                        <Link to={`payment/${_id}`} className="btn btn-xs text-white bg-success">pay</Link>
                        <label onClick={() => setOrderDeleteId(order)} for="my-modal-6" class="btn modal-button btn-xs text-error modal-button">Remove</label>
                    </>

                    }

                    {

                        paid && <div>
                            <p className="btn btn-xs text-white bg-warning">panding</p>
                            <p>transection Id {transectionId} </p>
                        </div>
                    }



                </td>
            </tr>





        </>
    );
};

export default Order;