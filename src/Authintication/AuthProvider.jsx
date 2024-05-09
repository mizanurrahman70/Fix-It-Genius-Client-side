
import React, {createContext, useEffect, useState } from 'react';

import {onAuthStateChanged, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from './fire-base-confiq';
export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState({})
    const [loading,setLoading]=useState(true)
 

//   user create 
const userSinup=(email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
    setLoading(true)
}
// user Login 
   const UserLogin=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
    setLoading(true)
   }
//    google singup 
const google=new GoogleAuthProvider();
const gooogleSingUp=()=>{
    setLoading(true)
    
    return  signInWithPopup(auth, google)
}
// loge Out 
const logOut =()=>{
    setLoading(true)
  return  signOut(auth)
}
// git guh ahithintication
const Gitprovider = new GithubAuthProvider();
const Gitsignin=()=>{
    setLoading(true)
    return signInWithPopup(auth, Gitprovider)
    
}
// onOth Change 

useEffect(()=>{
    const unsubsribe= onAuthStateChanged(auth,(carrenUser)=>{
        setLoading(false)
         setUser(carrenUser)    
         })
     return ()=>{
         unsubsribe()
     }

 },[])
 // user profile 
 const setUserInfo = (name, imgurl) => {
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: imgurl
    })
    .then(() => {
        <ToastContainer />
    //    alert(("Profile updated successfully"))
    toast.success("Profile updated successfully")
    
        // You can add any additional actions upon successful profile update
        // For example, dispatch an event, update UI, etc.
    })
    .catch((error) => {
        console.error('Error updating profile:', error);
        throw error; // Rethrow the error to propagate it to the caller
    });
};




    const AuthInfo={
        userSinup,
        UserLogin,
        gooogleSingUp,
        Gitsignin,
        user,
        setUser,
        logOut,
        setUserInfo,
        loading
    }
    return (
        <AuthContext.Provider value={AuthInfo} >
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;