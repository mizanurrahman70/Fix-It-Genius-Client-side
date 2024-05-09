import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Authintication/AuthProvider';

const Navber = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    const logOutHandle = () => {
        logOut()
          .then((result) => console.log(result))
          .catch((error) => console.log(error));
      };
      const item= <>
      <li><NavLink to=''>Home</NavLink></li>
      <li><NavLink to=''>Services </NavLink></li>
      <li>
      <details>
          <summary>Dashboard</summary>
          <ul class="p-2">
            <li><Link>Add Service</Link></li>
            <li><Link>Manage Service</Link></li>
            <li><Link>Booked-Services</Link></li>
            <li><Link>Service-To-Do</Link></li>
           
          </ul>
        </details>
      </li>
      </>
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to='/' className="btn btn-ghost text-xl">FixItGenius</Link>
  </div>
  <div className="flex-none gap-2">
    <div>
    <ul className="menu menu-horizontal px-1 space-x-5">
     
     {
      item
     }
    
        </ul>
    </div>
    {user ? (
        <div className="flex  items-center">
          <div role="button" className="btn btn-ghost btn-circle">
            <div className="w-10 rounded-full flex tooltip" data-tip={user?.displayName || 'Unknown'}>
            <img className='rounded-full' alt="User" src={user.photoURL || 'https://i.ibb.co/y50H2s0/error.png'} />
            </div>
          </div>
          <div>
            <button onClick={logOutHandle} className='md:ml-4 bg-orange-200 p-2 rounded-2xl'>Log Out</button>
          </div>
        </div>
      ) : (
        <button className='lg:ml-4 bg-green-400 p-2 rounded-2xl'><NavLink to='/login'>Login</NavLink></button>
      )}
    </div>


  </div>

    );
};

export default Navber;