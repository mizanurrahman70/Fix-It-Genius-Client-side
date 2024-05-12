import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Authintication/AuthProvider";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const [activeClass,setActiveClass]=useState()
 
  
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
        <NavLink style={({isActive})=>isActive?{backgroundColor:'green',font:'bold'}:{}} to="">Home</NavLink>
      </li>
      <li>
        <NavLink style={({isActive})=>isActive?{backgroundColor:'green',font:'bold'}:{}} to="/all_services">Services </NavLink>
      </li>
      {user && <li>
        <details>
          <summary>Dashboard</summary>
          <ul class="p-2 z-[1]">
            <li onClick={()=>setActiveClass(1)} className={`${activeClass===1?'bg-green-400 rounded-2xl':''}`}>
              <Link to="/add_service">Add Service</Link>
            </li>
            <li onClick={()=>setActiveClass(2)} className={`${activeClass===2?'bg-green-400 rounded-2xl':''}`}>
              <Link to="/manage_service">Manage Service</Link>
            </li>
            <li onClick={()=>setActiveClass(3)} className={`${activeClass===3?'bg-green-400 rounded-2xl':''}`} >
              <Link to="/booked_serviced">Booked-Services</Link>
            </li>
            <li onClick={()=>setActiveClass(4)} className={`${activeClass===4?'bg-green-400 rounded-2xl':''}`}>
              <Link to="service_to_do">Service-To-Do</Link>
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
        <Link to="/" className="btn btn-ghost  md:text-xl">
          Fix<span className="md:text-2xl font-semibold text-green-500">IT</span>
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
          <button className="ml-10 lg:ml-4 bg-green-400 h-[50px] w-[70px] rounded-md">
            <NavLink to="/login">Login</NavLink>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navber;
