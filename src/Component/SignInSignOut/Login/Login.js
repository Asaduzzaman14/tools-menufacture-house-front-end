import axios from 'axios';
import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form } from 'react-bootstrap';
import Loading from '../../Pages/Loading/Loading';

const Login = () => {

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from.pathname || '/'
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    let hookErrors;
    if (error) {

        hookErrors = <div>
            <p>Error: {error?.message} </p>
        </div>
    }

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true })
    }
    const handelLoginForm = (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        signInWithEmailAndPassword(email, password)

    }

    const resetPassword = async () => {
        const email = emailRef.current.value
        if (email) {

            await sendPasswordResetEmail(email)
            toast('send email')
        }
        else {
            toast('please enter your email')
        }
    }

    const handelNavigate = () => {
        navigate('/register')
    }

    return (
        <div>
            <h2 className='title pt-5 text-white title'>LOGIN</h2>
            <form className='form' onSubmit={handelLoginForm}>
                {/* <input className='input-fild' name='email' type="text" placeholder='User Email' required />
                <input className='input-fild' name='password' type="password" placeholder='Password' required /> */}


                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control className='input-fild' ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control className='input-fild' ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <p className='text-danger'>{hookErrors}</p>

                <input className='submit-btn' type="submit" value='LOG IN' />
                <ul className='form-link'>
                    <li onClick={() => resetPassword()} >Forget Password</li>
                    <li>Don't have acount?<span onClick={handelNavigate}> Sign up</span> </li>
                </ul>
            </form>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;