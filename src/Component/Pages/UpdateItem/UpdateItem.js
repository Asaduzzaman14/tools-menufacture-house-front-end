import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useItemDetails from '../../../hooks/useItemDetail';

const UpdateItem = () => {
    const { id } = useParams()
    const [user] = useAuthState(auth)

    const [item, setItems] = useItemDetails(id)

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const url = `https://warehouse-management-server-gray.vercel.app/update/${id}`
        fetch(url, {
            method: 'PUT',
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

    console.log(item);

    return (

        <div>
            <h2>Update your Item :{item.name} {id}</h2>
            <div className='add-item'>
                <h2>Update Your Item</h2>
                <form className='add-item-from d-flex flex-column w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-3' placeholder='name' {...register("name", { required: true, maxLength: 20 })} value={item.name} />
                    <input className='mb-3' placeholder='supplierName' type="text" {...register("supplierName",)} />
                    <input className='mb-3' placeholder='email' type="email" {...register("email")} value={item.email} />
                    <input className='mb-3' placeholder='price' type="number" {...register("price",)} value={item.price} />
                    <input className='mb-3' placeholder='quantity' type="number" {...register("quantity")} required />


                    <input className='mb-3' placeholder='photo url' type="text" {...register("img",)} value={item.img} />
                    <textarea className='mb-3' placeholder='description' {...register("desc",)} value={item.desc} />
                    <input className='add-btn' type="submit" value={'Update inventory'} />
                </form>
            </div>

        </div>
    );
};

export default UpdateItem;