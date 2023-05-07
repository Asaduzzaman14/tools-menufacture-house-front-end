import React from 'react';
import { toast } from 'react-toastify';

const RemoveTools = ({ removeTools, setRemoveTools, refetch }) => {

    const { _id } = removeTools
    const handelDeleteTool = () => {
        fetch(`https://manufacturer-house-server-ac2k.vercel.app/deleteTols/${_id}`, {
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
                    setRemoveTools(null)
                }
            })
    }
    return (
        <>


            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="remove-tool" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">

                    <h3 class="font-bold text-lg">Are you sure you want <span className='text-red-600'>delete</span> this Tool </h3>
                    <p class="py-4"><span className='font-semibold'>Name:</span> {removeTools.name}</p>
                    <img className='w-32 rounded-full shadow-lg mx-auto' src={removeTools.img} alt="" />
                    <div class="modal-action">
                        <button onClick={() => handelDeleteTool()} className='hover:bg-red-700 bg-white btn btn-sm'> Delete</button>
                        <label for="remove-tool" class="btn btn-sm">Cancel</label>
                    </div>
                </div>

            </div>
        </>
    );
};

export default RemoveTools;