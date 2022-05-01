import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()

    const navigate2 = () => {
        navigate('/login')
    }

    return (
        <div>
            <h2>This is rgister page</h2>
            <div>

                <form className='form'>
                    <input className='input-fild' type="text" placeholder='Your Name' />
                    <input className='input-fild' type="email" placeholder='Your Email' />
                    <input className='input-fild' type="password" placeholder='Password' />
                    <input className='submit-btn' type="submit" value='Sign Up' />

                    <ul className='form-link'>
                        <li>Already have an account?<span onClick={() => navigate2('/login')}> Sign In</span> </li>
                    </ul>
                </form>

            </div>
        </div>
    );
};

export default Register;