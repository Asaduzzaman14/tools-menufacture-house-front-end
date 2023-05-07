import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { AiFillStar } from 'react-icons/ai';




const AddReview = () => {
    const [rating, setRating] = useState(null)
    console.log(rating);

    const [user] = useAuthState(auth)

    const handelFormSubmit = (e) => {
        e.preventDefault();

        const userReview = {
            name: e.target.userName.value,
            email: e.target.userEmail.value,
            review: e.target.review.value,
            rattings: rating,

        }
        fetch('https://manufacturer-house-server-ac2k.vercel.app/review', {
            "method": "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                toast('success review post')
            })
    }



    return (
        <div>
            <div className='text-center py-12 mt-5 bg-slate-50 '>
                <h2 className=' text-3xl mb-3 font-mono lg:text-lg sm:text-xl ' >ADD YOUR REVIEW</h2>
                <form onSubmit={handelFormSubmit} className="sm:max-w-sm mx-auto">
                    <input type="text" name='userName' placeholder="name" className="input input-bordered input-md w-full max-w-sm mb-4" required />
                    <br />
                    <input type="text" name='userEmail' value={user.email} className="input input-bordered input-md w-full max-w-sm mb-4" />
                    <br />

                    <textarea name='review' className=" textarea textarea-primary w-full max-w-sm mb-6" placeholder="Your Review" required></textarea>
                    <br />

                    <div className='flex justify-center'>
                        {
                            [...Array(Number(5))].map((star, i) => {
                                const ratingValue = i + 1;

                                return (
                                    <label>
                                        <input className='hidden' type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />

                                        <AiFillStar color={ratingValue <= (rating) ? '#ffc107' : '#e4e5e9'}
                                            className='cursor-pointer transition-colors text-2xl text-yellow-600' />
                                    </label>

                                )
                            })
                        }
                    </div>

                    <br />

                    <input type="submit" value={'Add Review'} className="input bg-primary font-bold text-lg text-white input-bordered input-md w-full max-w-xs mb-4" />

                </form>
            </div>

        </div>
    );
};

export default AddReview;