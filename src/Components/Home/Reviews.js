import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {

    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch('https://manufacturer-house-server-ac2k.vercel.app/review', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    // if (isLoading) {
    //     return <Loading></Loading>
    // }




    return (
        <div className='p-5 mt-5'>
            {/* <h2 className='text-3xl p-4 mt-5 rounded-lg text-red-500 underline underline-offset-4'>Customer review  </h2> */}
            <h2 className='mt-2 lg:mt-10 mb-5 text-2xl lg:text-3xl p-5 text-white font-semibold'> CUSTOMER REVIEW</h2>

              {isLoading && <Loading/>}
            <div className='grid justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 gap-x-5'>
                {
                    reviews?.map(review => <Review
                        userReview={review}
                        key={review._id}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;