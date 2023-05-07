import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrderModal = ({ refetch, orderDeleteId, setOrderDeleteId }) => {

    const { _id } = orderDeleteId
    const handelDelete = () => {
        fetch(`https://manufacturer-house-server-ac2k.vercel.app/deleteOrder/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount === 1) {
                    toast('Delete success')
                    refetch()
                    setOrderDeleteId(null)
                }
            })
    }
    return (
        <>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you Sure You want To Delete </h3>
                    <p class="py-4">Name :  {orderDeleteId.name} </p>
                    <div class="modal-action">
                        <td><button onClick={() => handelDelete()} className='btn btn-error x-xm'> Delete</button></td>
                        <label onClick for="my-modal-6" class="btn">cancle</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteOrderModal;