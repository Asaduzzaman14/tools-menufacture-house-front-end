import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div>
            <h2 className='title'>Welcome</h2>
            <form className='form'>
                <input className='input-fild' type="text" placeholder='User Email' />
                <input className='input-fild' type="password" placeholder='Password' />
                <input className='submit-btn' type="submit" value='LOG IN' />

                <ul className='form-link'>
                    <li>Forget Password</li>
                    <li>Don't have acount?<span> Sign up</span> </li>
                </ul>
            </form>



        </div>
    );
};

export default Login;