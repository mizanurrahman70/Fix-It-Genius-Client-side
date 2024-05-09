import React, { useContext } from 'react';
import { AuthContext } from '../Authintication/AuthProvider';

const useAuth = () => {

    const all =useContext(AuthContext)
    return all
};

export default useAuth;