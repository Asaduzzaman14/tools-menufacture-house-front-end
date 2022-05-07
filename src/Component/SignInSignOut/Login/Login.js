import axios from 'axios';
import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from.pathname || '/'

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    let hookErrors;
    if (error) {

        hookErrors = <div>
            <p>Error: {error?.message} </p>
        </div>
    }

    if (user) {
        // navigate(from, { replace: true })
    }


    const handelLoginForm = async (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        await signInWithEmailAndPassword(email, password)
        const { data } = await axios.post('http://localhost:5000/login', { email })
        localStorage.setItem('accessToken', data)

        navigate(from, { replace: true })
    }





    const handelNavigate = () => {
        navigate('/register')
    }


    return (
        <div>
            <h2 className='title'>Welcome</h2>
            <form className='form' onSubmit={handelLoginForm}>
                <input className='input-fild' name='email' type="text" placeholder='User Email' />
                <input className='input-fild' name='password' type="password" placeholder='Password' />

                <p className='text-danger'>{hookErrors}</p>

                <input className='submit-btn' type="submit" value='LOG IN' />
                <ul className='form-link'>
                    <li>Forget Password</li>
                    <li>Don't have acount?<span onClick={handelNavigate}> Sign up</span> </li>
                </ul>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;