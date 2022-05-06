import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../image/google.png'


const SocialLogin = () => {


    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from.pathname || '/'


    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    let hookError;

    if (loading) {
        return <loading></loading>
    }
    if (error) {
        hookError = <div>
            <p>Error: {error?.message} </p>
        </div>

    }

    if (user) {
        navigate(from, { replace: true })
    }



    return (
        <div>
            <div>
                <div className='d-flex align-items-center'>
                    <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                    <p className='mt-2 mx-2'>or</p>
                    <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                </div>
                <p className='text-danger'>{hookError}</p>
                <div className=''>
                    <button onClick={() => signInWithGoogle()} className='btn-info rounded p-1 mb-2 d-block mx-auto w-50'>
                        <img style={{ width: '30px', marginRight: '20px' }} src={google} alt="" />
                        Google sign In
                    </button>

                </div>
            </div>
        </div>
    );
};

export default SocialLogin;