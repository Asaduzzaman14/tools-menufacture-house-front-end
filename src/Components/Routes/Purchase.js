import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const { id } = useParams();

    const [user] = useAuthState(auth)
    const [q, setQ] = useState(0)

    const [service, setService] = useState({})
    const [isReload, setIsReload] = useState(false)

    useEffect(() => {

        const url = `https://manufacturer-house-server-ac2k.vercel.app/tool/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])


    let { name, price, img, desc, minOrderQuantity, availableQuantity } = service;

    //---quantity-----

    const handleOrder = (e) => {
        e.preventDefault();

        //.................................................
        let orderQ = e.target.number.value;
        console.log(orderQ);
        if (orderQ > minOrderQuantity && orderQ < availableQuantity) {
            const address = e.target.address.value;
            const quantity = e.target.number.value;

            const order = {
                name: name,
                address: address,
                quantity: quantity,
                email: user.email,
                price: price
            };
            console.log(order);
            fetch("https://manufacturer-house-server-ac2k.vercel.app/order", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(order),
            })
                .then((res) => res.json())
                .then((data) => {
                    toast('Order succes')
                    e.target.reset();
                    setIsReload(!isReload);
                });

            // ......................................
            // setQ(orderQ);

        }
        else {
            toast('You cannot order less than minimum quantity or more then avilable')
        }


    }
    return (
        <div className='bg-[#0d0e2f] text-gray-300 py-10 text-center mx-auto '>

            <div className=''>

                <img className='text-center mx-auto' src={img} alt="Album" />
            </div>


            <div className="card mb-5 grid grid-cols-1 lg:grid-cols-2 lg:px-20 shadow-xl my-6 mx-auto text-center ">
                <div className="card-body mx-auto">
                    <h2 className="card-title">Name: {name}</h2>
                    <h4 className="card-title">Price: {price}</h4>
                    <h4 className="card-title text-red-600">Minimum Order Quantity: {minOrderQuantity}</h4>
                    <h4 className="card-title text-red-500 ">Available Quantity: {availableQuantity}</h4>
                    <p className="card-title">Des: {desc}</p>
                    <h2 className='card-title  font-bold font-mono text-left'>User-name: {user?.displayName}</h2>
                    <h3 className='card-title  font-bold font-mono text-left'>User-email: {user?.email}</h3>


                </div>

                <div className='text-gray-700'>
                    <form onSubmit={handleOrder}>
                        <input
                            type="text"
                            name="partsName"
                            disabled
                            value={name}
                            className="input input-bordered w-full max-w-xs mb-2"
                        />
                        <br />
                        <input
                            placeholder='Quantity'
                            value={minOrderQuantity?.value}
                            type="number"
                            name="number"
                            className="input input-bordered w-full max-w-xs mb-2"
                        />
                        <br />
                        <input
                            type="email"
                            name="email"
                            disabled
                            value={user?.email}
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs mb-2 font-semibold"
                        />
                        <br />
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            className="input input-bordered w-full max-w-xs mb-2"
                        />
                        <br />
                        <input
                            type="number"
                            placeholder="Phone Number"
                            className="input input-bordered w-full max-w-xs mb-2"
                        />
                        <br />

                        <input
                            type="submit"
                            value="Place Order"
                            className="input input-bordered w-full max-w-xs btn btn-primary"
                        />
                    </form>
                </div>


            </div>
        </div>
    );
}

export default Purchase;