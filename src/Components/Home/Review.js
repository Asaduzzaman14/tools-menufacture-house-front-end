import React from 'react';
import { AiFillStar } from 'react-icons/ai';


const Review = ({ userReview }) => {

    const { name, email, review, rattings } = userReview


    return (
        <div className=" mt-2 card w-full bg-base-100 shadow-xl">
            <div className="card-body font-serif  shadow-slate-200 shadow-md">
                <h2 className="card-title  text-gray-700">Name: {name}</h2>
                <p className='text-gray-700 '>Email: {email}</p>
                <p>{review}</p>
                <div class="rating justify-center">
                    {/* <span className=' mx-1'>{rattings}  </span> */}

                    {
                        [...Array(Number(rattings))].map(star => {
                            return (

                                <AiFillStar className='text-2xl text-yellow-600' />

                            )
                        })
                    }
                </div>



                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div> */}
            </div>
        </div>
    );
};

export default Review;