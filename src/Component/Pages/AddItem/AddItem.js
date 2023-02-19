import React from 'react';
import './AddItem.css'
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';

const AddItem = () => {


    const [user] = useAuthState(auth)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const url = `https://warehouse-management-server-gray.vercel.app/additem`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                reset()
            })
        console.log(data);
    };



    return (
        <div className='add-item'>
            <h2 className='text-white py-5'>ADD YOUR ITEM</h2>

            <form className='add-item-from d-flex flex-column w-75 w-md-50  mx-auto' onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-3' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-3' placeholder='Supplier name' type="text" {...register("supplierName",)} />
                <input className='mb-3' placeholder='Email' type="email" {...register("email")} value={user.email} />
                <input className='mb-3' placeholder='Price' type="number" {...register("price",)} />
                <input className='mb-3' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-3' placeholder='Image url' type="text" {...register("img",)} />
                <textarea className='mb-3' placeholder='Description' {...register("desc",)} />

                {/* <input className='add-btn pb-3' type="submit" value={'Add inventory'} /> */}
                <button type="submit"
                    style={{ width: "200px" }}
                    className='mt-2 sign-out-btn  mx-auto' >ADD INVENTORY</button>

            </form>

        </div>
    );
};

export default AddItem;
