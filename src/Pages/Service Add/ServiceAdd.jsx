
import React from 'react';
import useAuth from '../../Custom Hooks/useAuth';
import axios from 'axios';
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet-async';

const ServiceAdd = () => {
    const {user}=useAuth()
    

    const submitHandle=(e)=>{
        e.preventDefault()
        const form=e.target 
        const serviceName=form.serviceName.value 
        // const emailAddress=form.emailAddress.value 
        const serviceArea=form.serviceArea.value 
        const Price=form.Price.value
        const imgURL=form.imgURL.value
        const description=form.description.value
        const providerEmail=user?.email
        const providerImage=user?.photoURL
        const providerName=user?.displayName
        const addService={serviceName,serviceArea,Price,imgURL,description,providerEmail,providerImage,providerName}
        
        axios.post('https://fix-it-genius-server-side.vercel.app/servics',addService)
        .then(res=>{
            console.log(res.data)
            if(res.data.acknowledged){
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Your Service Added",
                showConfirmButton: false,
                timer: 1500
              });
              form.reset()
            }
        })

    }
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
           <Helmet>
        <title>Add Service</title>
      </Helmet>
        <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
          <h2 className='text-lg font-semibold text-gray-700 capitalize '>
            Post a Job
          </h2>
  
          <form onSubmit={submitHandle}>
            <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
              <div>
                <label className='text-gray-700 ' htmlFor='job_title'>
                Service Name
                </label>
                <input
                  id='job_title'
                  name='serviceName'
                  type='text'
                  required
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
  
              {/* <div>
                <label className='text-gray-700 ' htmlFor='emailAddress'>
                  Email Address
                </label>
                <input
                  id='emailAddress'
                  type='email'
                  name='email'
                  disabled
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div> */}
              <div className='flex flex-col gap-2 '>
                <label className='text-gray-700'>Service Area</label>
                <input type="text" name='serviceArea' required className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring' />
  
                {/* Date Picker Input Field */}
              </div>
  
              
              <div>
                <label className='text-gray-700 ' htmlFor='min_price'>
               Price
                </label>
                <input
                  id='min_price'
                  name='Price'
                  type='number'
                  required
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
  
              <div>
                <label className='text-gray-700 ' htmlFor='max_price'>
                Image URL
                </label>
                <input
                  id='max_price'
                  name='imgURL'
                  type='text'
                  required
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2 mt-4'>
              <label className='text-gray-700 ' htmlFor='description'>
                Description
              </label>
              <textarea
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                name='description'
                id='description'
                maxLength={100}
                required
              ></textarea>
            </div>
            <div className='flex justify-end mt-6'>
              <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-green-400 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
    );
};

export default ServiceAdd;