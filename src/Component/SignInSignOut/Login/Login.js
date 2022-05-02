import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'

const Login = () => {

    const navigate = useNavigate()
    const [createUserWithEmailAndPassword, loading, error,] = useCreateUserWithEmailAndPassword(auth);

    let hookErrors;
    if (error) {

        hookErrors = <div>
            <p>Error: {error?.message} </p>
        </div>
    }

    const handelLoginForm = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        createUserWithEmailAndPassword(email, password)
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

        </div>
    );
};

export default Login;