import React from "react";
import { Link } from "react-router-dom";

const Card = ({ tool }) => {
  const { name, _id, img, price, desc, minOrderQuantity, availableQuantity } =
    tool;

  return (
    <div className=' bg-gray-800 text-gray-400 shadow-lg rounded-2xl p-3 pb-0'>
      <figure className='px-5 pt-6'>
        <img src={img} alt='tools' className='h-52 w-full mx-auto rounded-md' />
      </figure>
      <div className='card-body items-left'>
        <h3 className='text-lg mr-auto cursor-pointer text-gray-200 hover:text-purple-500 truncate'>
          Name: {name}
        </h3>
        <p className='text-left'>
          <span className='font-semibold'></span>{" "}
          <span className='font-semibold'>Description: {desc}</span>{" "}
        </p>

        <p className='text-left'>
          <span className='font-semibold'>Price:</span>{" "}
          <span className='font-semibold'>${price}</span>{" "}
        </p>
        <p className='text-left'>
          <span className='font-semibold'>Available Quantity:</span>{" "}
          <span className='font-semibold'>{availableQuantity}</span>{" "}
        </p>
        <p className='text-left'>
          <span className='font-semibold'>Min Order Quantity:</span>{" "}
          <span className='font-semibold '> {minOrderQuantity}</span>{" "}
        </p>
        <div className=' mt-2'>
          <Link
            to={`/purchase/${_id}`}
            class='px-8  py-2.5 relative rounded-lg group overflow-hidden font-medium bg-[#830d34]  text-white'
          >
            <span class='absolute bottom-0 left-0 flex w-full h-0  transition-all duration-500 ease-out transform translate bg-[#e91e63] group-hover:h-full opacity-90'></span>
            <span class='relative group-hover:text-white'>Purchase</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
