import React from 'react';

import { useForm } from "react-hook-form";


const AddItem = () => {



    const { register, handleSubmit } = useForm();
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
            .then(data => console.log(data))
        console.log(data);
    };



    return (
        <div>
            <h2>Add your new Item</h2>
            <form className='d-flex flex-column w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-3' placeholder='description' {...register("desc",)} />
                <input className='mb-3' placeholder='price' type="number" {...register("price",)} />
                <input className='mb-3' placeholder='photo url' type="text" {...register("img",)} />
                <input type="submit" value={'Add inventory'} />
            </form>
        </div>
    );
};

export default AddItem;