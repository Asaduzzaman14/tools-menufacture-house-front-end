import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const navigate = useNavigate()

    const [agree, setAgree] = useState(false)
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);
    const navigate2 = () => {
        navigate('/login')
    }

    if (user) {
        console.log(user, 'hello');
    }

    const handelFormSubmit = async (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        navigate('/')
    }






    return (
        <div>
            <h2>Please Register</h2>
            <div>

                <form className='form' onSubmit={handelFormSubmit}>
                    <input className='input-fild' name='name' type="text" placeholder='Your Name' />
                    <input className='input-fild' name='email' type="email" placeholder='Your Email' required />
                    <input className='input-fild' name='password' type="password" placeholder='Password' required />

                    <div className='text-start'>
                        <input onClick={() => setAgree(!agree)} type="checkbox" name='trams' id="trams" />
                        <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="trams">Accept  Terms and Condation</label>

                    </div>


                    <input disabled={!agree} className='submit-btn' type="submit" value='Sign Up' />

                    <ul className='form-link'>
                        <li>Already have an account?<span onClick={() => navigate2('/login')}> Sign In</span> </li>
                    </ul>
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;