import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ tool }) => {
    const { name, _id, img, price, desc, minOrderQuantity, availableQuantity } = tool

    return (
        <div className="card w-full bg-base-300 shadow-xl">
            <figure className="px-5 pt-6">
                <img src={img} alt="tools" className="rounded-xl  h-52" />
            </figure>
            <div className="card-body items-center text-center">
                <h3 className="card-title">Name: {name}</h3>
                <p><span className='font-semibold'>Description:</span> <span className='text-gray text-gray-700 '> {desc}</span> </p>

                <p><span className='font-semibold'>Price:</span> <span className='text-gray text-gray-700 '>${price}</span> </p>
                <p><span className='font-semibold'>Available Quantity:</span> <span className='text-gray text-gray-700 '>{availableQuantity}</span> </p>
                <p><span className='font-semibold'>Min Order Quantity:</span> <span className='text-gray text-gray-700 '> {minOrderQuantity}</span> </p>

                <Link to={`/purchase/${_id}`} class="px-8 py-2.5 relative rounded-lg group overflow-hidden font-medium bg-blue-200 text-blue-900 inline-block">
                    <span class="absolute bottom-0 left-0 flex w-full h-0  transition-all duration-500 ease-out transform translate bg-blue-900 group-hover:h-full opacity-90"></span>
                    <span class="relative group-hover:text-white">Purchase</span>
                </Link>

            </div>
        </div>
    );
};

export default Card;