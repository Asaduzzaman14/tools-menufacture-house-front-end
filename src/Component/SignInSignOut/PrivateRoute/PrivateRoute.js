import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Pages/Loading/Loading';

const PrivateRoute = ({ children }) => {

    const [user, loading] = useAuthState(auth)
    const location = useLocation()

    const [sendEmailVerification, sending, verifyError] = useSendEmailVerification(
        auth
    );

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate >
    }


    // if (user.providerData[0].providerId === 'password' && !user.emailVerified) {
    //     return <div>
    //         <h3 className='text-danger'>your email is not verify</h3>
    //         <h5 className='text-success'>please verify your email</h5>

    //         <button
    //             onClick={async () => {
    //                 await sendEmailVerification();
    //                 toast('Sent email');
    //             }}
    //         >
    //             send Verification email email
    //         </button>
    //         <ToastContainer />
    //     </div>
    // }


    return children
};

export default PrivateRoute;