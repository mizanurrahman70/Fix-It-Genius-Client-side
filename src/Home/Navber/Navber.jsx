import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Authintication/AuthProvider";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme,setTheme]=useState('light')
  const themeHandle=e=>{
    if(e.target.checked){
      setTheme('dark')

    }
   else{
    setTheme('light')
   }
  }
  useEffect(()=>{
    localStorage.setItem('theme',theme)
    const themeLoacal=localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme',themeLoacal)


  },[theme])

  const logOutHandle = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  const item = (
    <>
      <li>
        <NavLink to="">Home</NavLink>
      </li>
      <li>
        <NavLink to="">Services </NavLink>
      </li>
      {user && <li>
        <details>
          <summary>Dashboard</summary>
          <ul class="p-2 z-[1]">
            <li>
              <Link to="/add_service">Add Service</Link>
            </li>
            <li>
              <Link to="/manage_service">Manage Service</Link>
            </li>
            <li>
              <Link to="/booked_serviced">Booked-Services</Link>
            </li>
            <li>
              <Link to="/">Service-To-Do</Link>
            </li>
          </ul>
        </details>
      </li>}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {item}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Fix<span className="text-2xl font-semibold text-green-500">it</span>
          Genius
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">{item}</ul>
      </div>
     
      <div className="navbar-end ">
         {/* them control  */}
         <label onClick={themeHandle} htmlFor="BasicSwitch_NavigateUI" className="mr-5 relative flex h-fit w-10 items-center rounded-full border border-sky-600">
        <input type="checkbox" className="peer/toggle hidden" id="BasicSwitch_NavigateUI" />
        <div className="absolute inset-0 z-10 w-0 rounded-full duration-200 peer-checked/toggle:w-full peer-checked/toggle:bg-sky-200"></div>
        <div className="z-20 size-4 rounded-full bg-sky-500 duration-200 peer-checked/toggle:translate-x-6"></div>
      </label>
        {user ? (
          <div className="flex  items-center">
            <div role="button" className="btn btn-ghost btn-circle">
              <div
                className="w-10 rounded-full flex tooltip"
                data-tip={user?.displayName || "Unknown"}
              >
                <img
                  className="rounded-full"
                  alt="User"
                  src={user.photoURL || "https://i.ibb.co/y50H2s0/error.png"}
                />
              </div>
            </div>
            <div>
              <button
                onClick={logOutHandle}
                className="md:ml-4 bg-[#328EFF] p-2 rounded-2xl"
              >
                Log Out
              </button>
            </div>
          </div>
        ) : (
          <button className="lg:ml-4 bg-green-400 h-[50px] w-[70px] rounded-md">
            <NavLink to="/login">Login</NavLink>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navber;
