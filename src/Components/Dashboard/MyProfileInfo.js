import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const MyProfileInfo = ({ user }) => {
    const [modal, setModal] = useState(true)


    const handelProfileInfirmation = (e) => {
        e.preventDefault()

        const userInfo = {
            name: user?.displayName,
            email: user?.email,
            education: e.target.education.value,
            city: e.target.city.value,
            phone: e.target.phone.value,
            linkdin: e.target.linkdin.value
        }

        console.log(userInfo);
        fetch('https://manufacturer-house-server-ac2k.vercel.app/userinfo', {
            "method": "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('success added user Information')
                setModal(false)
            })
        // edit


    }





    return (
        <>
            <div className=''>
                <input type="checkbox" id="add-info-modal" className="modal-toggle " />
                <div className="modal modal-bottom sm:modal-middle lg:modal-bottom max-w-md mx-auto">
                    <div className="modal-box">
                        <label htmlFor="add-info-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                        <h3 className="font-bold text-2xl text-secondary">ADD YOUR INFORMATION</h3>

                        <form onSubmit={handelProfileInfirmation} className='grid grid-cols-1 gap-5 mt-4 justify-items-center'>
                            <input type="text" value={user?.displayName} disabled className="input input-bordered input-secondary w-full max-w-xs" required />
                            <input type="email" value={user?.email} disabled className="input input-bordered input-secondary w-full max-w-xs" required />
                            <input type="text" name='education' placeholder='Education' className="input input-bordered input-secondary w-full max-w-xs" required />
                            <input type="text" name='city' placeholder='Your City' className="input input-bordered input-secondary w-full max-w-xs" required />
                            <input type="number" name='phone' placeholder="Phone" className="input input-bordered input-secondary w-full max-w-xs" required />
                            <input type="text" name='linkdin' placeholder="Your Linkdin Profile Link" className="input input-bordered input-secondary w-full max-w-xs" required />

                            <input type="submit" value={'Submit'} className="bg-secondary btn text-white input input-bordered input-secondary w-full max-w-xs" required />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyProfileInfo;