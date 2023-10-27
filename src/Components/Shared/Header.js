import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  let [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  //   console.log(user);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  useEffect(() => {
    navigate("/");
  }, [user?.email]);

  return (
    <>
      <div className=' shadow-md z-50 w-full relative top-0 left-0'>
        {/* <div className=' md:flex justify-between items-center bg-gray-900 text-white'> */}
        <div className='flex justify-between lg:px-10  bg-gray-900 text-white'>
          <div className='py-4'>
            <Link to='/'>
              <span className='text-2xl py-4 ml-2 lg:ml-8 text-secondary'>
                Tools<span className='text-white'>Factory</span>
              </span>

              {/* <h2 className='text-2xl py-4 ml-2 lg:ml-8 '>ASADUZZAMAN</h2> */}
            </Link>
          </div>

          {/* mobile icon  */}
          <div
            onClick={() => setOpen(!open)}
            className='text-3xl absolute right-8 top-4 cursor-pointer lg:hidden'
          >
            <ion-icon name={open ? "close" : "menu"}>
              <AiOutlineMenu />
            </ion-icon>
          </div>

          {/* <div className=' px-0 basis-3/4 w-[700px] '> */}
          <div className=' px-0 '>
            {/* <ul className={`  lg:flex  justify-between lg:pr-5 lg:items-center lg:py-0  lg:pb-0 pb-8 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 lg:gap-30 transition-all duration-500 ease-in ${open ? 'top-[100px]' : 'top-[-480px]'}`}> */}
            <ul
              className={`  lg:flex  justify-between lg:pr-5 lg:items-end lg:py-0  lg:pb-0 pb-8 absolute lg:static bg-gray-900 lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0  transition-all duration-500 ease-in ${
                open ? "top-[60px]" : "top-[-480px]"
              }`}
            >
              <div className='lg:flex lg:justify-between'>
                <li
                  className={`relative group md:ml-3 text-xl md:my-0 py-4 transition-all duration-500 ease-in`}
                >
                  <Link
                    onClick={() => setOpen(!open)}
                    to='/'
                    className='text-lg hover:underline text-gray-200 p-2 group-hover:border-b-2 border-b-primary translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-800'
                  >
                    HOME
                  </Link>
                </li>

                <li
                  className={`relative group md:ml-3 text-xl md:my-0 py-4 transition-all duration-500 ease-in`}
                >
                  <Link
                    to='/about'
                    className='text-lg text-gray-200 hover:underline p-2 group-hover:border-b-2 border-b-primary translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-800'
                  >
                    ABOUT
                  </Link>
                </li>

                <li
                  onClick={() => setOpen(!open)}
                  className='md:ml-3 md:my-0  py-4 transition-all duration-500 ease-in '
                >
                  <Link
                    to='/blogs'
                    className='text-lg text-gray-200 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-400'
                  >
                    BLOGS
                  </Link>
                </li>
                {user ? (
                  <>
                    <li
                      onClick={() => setOpen(!open)}
                      className='md:ml-3 md:my-0  py-4 transition-all duration-500 ease-in '
                    >
                      <Link
                        to='/dashborad'
                        className='text-lg text-gray-200 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-400'
                      >
                        DASHBOARD
                      </Link>
                    </li>
                    <li
                      style={{ cursor: "pointer" }}
                      onClick={logout}
                      className='md:ml-3 md:my-0 pointer px-2 py-4 transition-all duration-500 ease-in '
                    >
                      <span className='text-lg text-gray-200 p-2 px-4 rounded-md border hover:text-red-600 font-semibold transition-all duration-400'>
                        SIGN OUT
                      </span>
                    </li>
                  </>
                ) : (
                  <li
                    onClick={() => setOpen(!open)}
                    className='md:ml-3 md:my-0  py-4 transition-all duration-500 ease-in '
                  >
                    <Link
                      to='/login'
                      className='text-lg text-gray-200 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-400'
                    >
                      LOGIN
                    </Link>
                  </li>
                )}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
