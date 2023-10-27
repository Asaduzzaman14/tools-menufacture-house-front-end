import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Footer from "../Shared/Footer";

const Purchase = () => {
  const { id } = useParams();

  const [user] = useAuthState(auth);
  const [q, setQ] = useState(0);

  const [service, setService] = useState({});
  const [isReload, setIsReload] = useState(false);

  useEffect(() => {
    const url = `https://manufacturer-house-server-ac2k.vercel.app/tool/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

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
        price: price,
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
          toast("Order succes");
          e.target.reset();
          setIsReload(!isReload);
        });

      // ......................................
      // setQ(orderQ);
    } else {
      toast(
        "You cannot order less than minimum quantity or more then avilable"
      );
    }
  };
  return (
    <div className=' pt-3 text-gray-300 text-center mx-auto '>
      <h2 className='text-center pb-5 text-2xl font-bold'>POURCHES</h2>
      <div className=''>
        <img
          className='text-center p-2  mx-auto rounded-md'
          src={img}
          alt='Album'
        />
      </div>

      <div className='py-3 max-w-5xl grid grid-cols-1 lg:grid-cols-2 lg:px-20 shadow-xl mx-auto justify-items-center '>
        <div className='py-4 pl-8  text-left'>
          <p className=''>Name: {name}</p>
          <p className=''>Price: {price}</p>
          <p className=' text-red-600'>
            Minimum Order Quantity: {minOrderQuantity}
          </p>
          <p className=' text-red-600'>
            Available Quantity: {availableQuantity}
          </p>
          <p className='font-semibold'>Desc: {desc}</p>
          <p className='font-semibold'>User Name: {user?.displayName}</p>
          <p className='font-semibold'>User Email: {user?.email}</p>
        </div>

        <div className='text-gray-700 w-full'>
          <form onSubmit={handleOrder}>
            <input
              type='text'
              name='partsName'
              disabled
              value={name}
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <br />
            <input
              placeholder='Quantity'
              value={minOrderQuantity?.value}
              type='number'
              name='number'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <br />
            <input
              type='email'
              name='email'
              disabled
              value={user?.email}
              placeholder='Type here'
              className='input input-bordered w-full max-w-xs mb-2 font-semibold'
            />
            <br />
            <input
              type='text'
              name='address'
              placeholder='Address'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <br />
            <input
              type='number'
              placeholder='Phone Number'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <br />

            <input
              type='submit'
              value='Place Order'
              className='input input-bordered text-white w-full max-w-xs btn  bg-[#0c89ff] hover:bg-[#0462bb]'
            />
          </form>
        </div>
      </div>
      <div className='mt-4 pt-3'>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Purchase;
