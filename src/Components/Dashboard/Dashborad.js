import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../hooks/useAdmin";

const Dashborad = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div>
      <div className='drawer drawer-mobile'>
        <input
          id='dashboard-sidebar'
          type='checkbox'
          value={"eee"}
          className='drawer-toggle opacity-100 bg-red-500 z-10 cursor-pointer w-5 h-5 '
        />
        <div className='drawer-content flex flex-col '>
          {/* <!-- Page content here --> */}
          <div className='flex bg-gray-800 py-3 px-2 '>
            <h2 className='text-xl lg:text-2xl text-gray-300 font-semibold p-2 ml-auto'>
              {user?.email}
            </h2>
          </div>
          <Outlet></Outlet>
        </div>
        <div className='drawer-side'>
          <label htmlFor='dashboard-sidebar' className='drawer-overlay'>
            <p className='text-white'>Close</p>
          </label>
          <ul className='bg-[#110e22] text-white  font-semibold menu p-4 overflow-y-auto w-48'>
            <li className='hover:bg-gray-500 rounded-sm'>
              <Link to=''>Protfolio</Link>
            </li>

            {admin ? (
              ""
            ) : (
              <>
                <li className='hover:bg-gray-500 rounded-sm'>
                  <Link to='myprofile'>My Profile</Link>
                </li>
                <li className='hover:bg-gray-500 rounded-sm'>
                  <Link to='addreview'>Add Review</Link>
                </li>
                <li className='hover:bg-gray-500 rounded-sm'>
                  <Link to='orders'>My Orders</Link>
                </li>
              </>
            )}

            {admin && (
              <>
                <li className='hover:bg-gray-500 rounded-sm'>
                  <Link to='addproducts'>Add Products</Link>
                </li>
                <li className='hover:bg-gray-500 rounded-sm'>
                  <Link to='users'>ALL USERS</Link>
                </li>
                <li className='hover:bg-gray-500 rounded-sm'>
                  <Link to='allorders'>Manage Orders</Link>
                </li>
                <li className='hover:bg-gray-500 rounded-sm'>
                  <Link to='manageTools'>Manage Tools</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashborad;
