import React from 'react';
import './AddItem.css'


import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';

const AddItem = () => {


    const [user] = useAuthState(auth)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/additem`
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
            <h2>Add Your Item</h2>
            <form className='add-item-from d-flex flex-column w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-3' placeholder='supplier name' type="text" {...register("supplierName",)} />
                <input className='mb-3' placeholder='email' type="email" {...register("email")} value={user.email} />
                <input className='mb-3' placeholder='price' type="number" {...register("price",)} />
                <input className='mb-3' placeholder='quantity' type="number" {...register("quantity")} />


                <input className='mb-3' placeholder='photo url' type="text" {...register("img",)} />
                <textarea className='mb-3' placeholder='description' {...register("desc",)} />
                <input className='add-btn' type="submit" value={'Add inventory'} />
            </form>
        </div>
    );
};

export default AddItem;