import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Home/Navber/Navber';
import Footer from '../Home/Footer/Footer';

const Root = () => {
    return (
        <>
        <div className='container mx-auto'>
            <Navber></Navber>
            <div className='min-h-[calc(100vh-274px)]'>
            <Outlet></Outlet>
            </div>
           
        </div>
        <div>
            <Footer></Footer>
            </div>
        </>
    );
};

export default Root;