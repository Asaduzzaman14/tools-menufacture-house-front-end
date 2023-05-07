import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const EditProfile = ({ refetch }) => {
    const [user] = useAuthState(auth)
    const [modal, setModal] = useState(false)

    const handelUpdate = (e) => {

        e.preventDefault()

        const userInfo = {
            name: user?.displayName,
            email: user?.email,
            education: e.target.education?.value,
            city: e.target.city.value,
            phone: e.target.phone.value,
            linkdin: e.target.linkdin.value
        }

        console.log(userInfo);

        fetch(`https://manufacturer-house-server-ac2k.vercel.app/userinfo/${user?.email}`, {
            "method": "PATCH",
            headers: {
                "content-type": " application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('success update user Information')
                setModal(true)
                refetch()
            })

    }




    return (
        <>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg"> Update Your Information </h3>
                    <form onSubmit={handelUpdate} className='grid grid-cols-1 gap-5 mt-4 justify-items-center'>
                        <input type="text" className="input input-bordered input-secondary w-full max-w-xs" required />
                        <input type="email" value={user?.email} disabled className="input input-bordered input-secondary w-full max-w-xs" required />
                        <input type="text" name='education' placeholder='Education' className="input input-bordered input-secondary w-full max-w-xs" required />
                        <input type="text" name='city' placeholder='Your City' className="input input-bordered input-secondary w-full max-w-xs" required />
                        <input type="number" name='phone' placeholder="Phone" className="input input-bordered input-secondary w-full max-w-xs" required />
                        <input type="text" name='linkdin' placeholder="Your Linkdin Profile Link" className="input input-bordered input-secondary w-full max-w-xs" required />

                        <input type="submit" value={'Submit'} className="bg-secondary btn text-white input input-bordered input-secondary w-full max-w-xs" required />
                    </form>


                    <div class="modal-action">

                        <label onClick for="my-modal-6" class="btn hover:bg-red-700 btn-circle  btn-outline">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </label>

                    </div>
                </div>
            </div>
        </>
    );
};

export default EditProfile;