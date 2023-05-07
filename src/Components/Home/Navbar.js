import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(localStorage.getItem('accessToken'));
    const logout = () => {
        signOut(auth)
        localStorage.removeItem('accessToken');
    }


    const menuItem = <>
        <li><Link className='rounded-lg text-xl' to='/home'>Home</Link></li>
        <li><Link className='rounded-lg text-xl' to='/about'>About</Link></li>
        <li><Link className='rounded-lg text-xl' to='/blogs'>Blogs</Link></li>


        {/* {user && <li><Link className='rounded-lg text-xl' to='/profile'>Profile</Link></li>} */}

        <li>{user ? <>
            <Link to='/dashborad' className='btn btn-ghost text-xl'>Dashborad</Link>
            <button onClick={logout} className='btn btn-ghost text-xl' >Sign out</button>
        </>
            : <Link className='text-xl' to='login'>Login</Link>}</li>
    </>


    const location = useLocation()


    return (
        <div className="navbar  z-10 bg-[#000]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-primary text-white rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <span className="btn btn-ghost normal-case text-xl text-secondary">Friends <span className='text-white'>Factory</span></span>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-white">
                    {menuItem}
                </ul>
            </div>

            {location.pathname === "dashborad" && <div className="navbar-end">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>}

        </div>
    );
};

export default Navbar;


/* 
https://i.ibb.co/rQckYzY/tool2.jpg
https://i.ibb.co/9ZbYzGN/tool3.jpg
https://i.ibb.co/PzTgjXQ/tool4.jpg
https://i.ibb.co/BPDvdvx/tool5.jpg
https://i.ibb.co/KDnstdZ/tool6.jpg
https://i.ibb.co/f8SjyVj/tool8.jpg */