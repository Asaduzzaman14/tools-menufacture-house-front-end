import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useItemDetails from '../../../hooks/useItemDetail';
import Loading from '../Loading/Loading';
import './Deliverd.css'

const Deliverd = () => {
    const [item, setItems] = useState([])
    const { id } = useParams()

    const { name, img, desc, supplierName, quantity, price } = item
    const [newQuantity, setNewQuantity] = useState()


    useEffect(() => {
        const url = `http://localhost:5000/item/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))

    }, [id, newQuantity])



    const handelFrom = (e) => {
        e.preventDefault()
        const q = e.target.quantity.value;
        const total = parseInt(q) + parseInt(quantity)
        const url = `http://localhost:5000/update/${id}`
        fetch(url, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ total })
        })
            .then(res => {
                console.log(res);
                res.json()
            })
            .then(data => {
                setNewQuantity(total)
            });
    }

    if (!item) {
        return <Loading></Loading>
    }


    return (
        <div className='update-container mx-auto justify-center'>
            <h2>This is update section  name: {item.name}</h2>

            <div className='inventory-card'>
                <div className='img-container'><img src={img} alt="" /></div>
                <div>
                    <h3>Name: {name}</h3>
                    <p>desc: {desc}</p>
                    <p>supplier name: {supplierName}</p>
                    <p>price: ${price}</p>
                    <p>quantity: {quantity}</p>

                    <button className='buttons' onClick={() => { }}>Delivered</button>
                    <div>

                        <form className=' ms-5 ms-' onSubmit={handelFrom}>
                            <input className='mt-5' placeholder='quantity' type="number" name='quantity' required />
                            <br />
                            <input type="submit" value="ReStock" className='buttons mb-3' />
                        </form>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Deliverd;