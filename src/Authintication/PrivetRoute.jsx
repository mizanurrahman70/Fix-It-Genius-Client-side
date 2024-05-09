import React, { useContext } from 'react';

import { Navigate,useLocation  } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const PrivetRout = ({children}) => {
    let location = useLocation()
   
   
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <span className="loading loading-bars loading-lg mt-20 mb-5 lg:ml-[700px]"></span>

    }
    
    if(user){
        return children

    }
    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivetRout;