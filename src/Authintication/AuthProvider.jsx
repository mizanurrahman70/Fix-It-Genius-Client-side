
import React, {createContext, useEffect, useState } from 'react';

import {onAuthStateChanged, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

import 'react-toastify/dist/ReactToastify.css';
import auth from './fire-base-confiq';
import axios from 'axios';
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

// onOth Change 

useEffect(()=>{
    const unsubsribe= onAuthStateChanged(auth,(carrenUser)=>{
        const userEmail=carrenUser?.email 
        const loggingUser={email:userEmail}
        setLoading(false)
         setUser(carrenUser)  
        //  user use token 
        if(carrenUser){
            axios.post(`https://fix-it-genius-server-side.vercel.app/jwt`,loggingUser,{withCredentials:true})
            .then(res=>{
                console.log(res.data)
            })
            
        }  
        else{
            axios.post(`https://fix-it-genius-server-side.vercel.app/tokenout`,loggingUser,{withCredentials:true})
            .then(res=>{
                console.log(res.data)
            })
        }
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
   
    
       
    })
    .catch((error) => {
        console.error('Error updating profile:', error);
        throw error; 
    });
};




    const AuthInfo={
        userSinup,
        UserLogin,
        gooogleSingUp,
     
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