import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useItemDetails from '../../../hooks/useItemDetail';
import Loading from '../Loading/Loading';
import './Deliverd.css'

const Deliverd = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const [item] = useItemDetails(id)


    const { name, img, desc, suplierName, quantity, price } = item

    const [quant, setQuentitys] = useState()

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const url = `https://arcane-cove-19592.herokuapp.com/update/${id}`
        fetch(url, {
            method: 'patch',
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
    };

    if (!item) {
        return <Loading></Loading>
    }


    return (
        <div className='update-container mx-auto justify-center'>
            <h2>This is update section  name: {item.name}</h2>

            <div className='inventory-card'>
                <div className='img-container'><img src={img} alt="" /></div>
                <div>
                    <h3>desc: {desc}</h3>
                    <h3>Name: {name}</h3>
                    <p>supplier name: {suplierName}</p>
                    <p>price: ${price}</p>
                    <p>quantity: {quantity}</p>

                    <button className='buttons' onClick={() => { setQuentitys(quant + 1) }}>Delivered</button>

                    <from className='d-flex ms-5' onSubmit={handleSubmit(onSubmit)}>
                        <input className='mb-3' placeholder='quantity' type="number" {...register("quantity")} />
                        <input type="submit" value="ReStock" className='buttons mb-3' />
                    </from>

                </div>
            </div>

        </div>
    );
};

export default Deliverd;