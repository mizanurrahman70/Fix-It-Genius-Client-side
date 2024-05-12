import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useAuth from '../../Custom Hooks/useAuth';
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Submiton = () => {
    const loaderData=useLoaderData()
    const {user}=useAuth()
  
    const{serviceName,emailAddress,serviceArea,Price,imgURL,description,providerEmail,providerImage,providerName,_id}=loaderData

    const submitionHandle=(e)=>{
        
        e.preventDefault()
        const form=e.target
        const serviceId = form.ServiceId.value; 
  const serviceName = form.ServiceName.value;
  const serviceImage = form.ServiceImage.value;
  const providerEmail = form.Provideremail.value;
  const providerName = form.ProviderName.value;
  const price = form.Price.value;
  const userEMail = form.CurrentUseremail.value; 
  const userName = form.CurrentUserName.value;
  const serviceDate = form.date.value;
  const instructions = form.Specialinstruction.value; 
  const status = 'pending'; 
        
        const bookingData={serviceId, serviceName, serviceImage , providerEmail, providerName, price,
            userEMail, userName , serviceDate, instructions,status
            }
           axios.post('https://fix-it-genius-server-side.vercel.app/booking',bookingData)
           .then(res=>{
           
            if(res.data.acknowledged){
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Confirm Your boking",
                showConfirmButton: false,
                timer: 1500
              });
                form.reset()
            }
           })

    }
    return (
        <div className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
        {/* Job Details */}
        <div className='flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]'>
          <img className='md:min-h-[350px] text-center' src="https://i.ibb.co/vC5q1Xf/download-2.jpg" alt="" />
  
         
        </div>
        {/* Place A Bid Form */}
        <section className='p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]'>
          <h2 className='text-lg font-semibold text-gray-700 capitalize '>
            Filap This From
          </h2>
  
          <form onSubmit={submitionHandle}>
            <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
              <div>
                <label className='text-gray-700 ' htmlFor='price'>
                ServiceId
                </label>
                <input
                 
                  type='text'
                  name='ServiceId'
                  defaultValue={_id}
                  disabled
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div>
                <label className='text-gray-700 ' htmlFor='price'>
                Service Name
                </label>
                <input
                 
                  type='text'
                  name='ServiceName'
                  defaultValue={serviceName}
                  disabled
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div>
                <label className='text-gray-700 ' htmlFor='price'>
                 
                </label>
                <input
                 
                  type='text'
                  name='ServiceImage'
                  defaultValue={imgURL}
                  disabled
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div>
                <label className='text-gray-700 ' htmlFor='price'>
                Provider email
                </label>
                <input
                 
                  type='text'
                  name='Provideremail'
                  defaultValue={providerEmail}
                  disabled
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div>
                <label className='text-gray-700 ' htmlFor='price'>
                Provider Name
                </label>
                <input
                 
                  type='text'
                  name='ProviderName'
                  defaultValue={providerName}
                  disabled
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div>
                <label className='text-gray-700 ' htmlFor='price'>
                Current User email 
                </label>
                <input
                 
                  type='text'
                  name='CurrentUseremail'
                  defaultValue={user?.email}
                  disabled
                 
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div>
                <label className='text-gray-700 ' htmlFor='price'>
                Current User Name
                </label>
                <input
                 
                  type='text'
                  name='CurrentUserName'
                  defaultValue={user?.displayName}                 
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div>
                <label className='text-gray-700 ' htmlFor='price'>
                  Price
                </label>
                <input
                 
                  type='text'
                  name='Price'
                  defaultValue={Price}
                  disabled
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
  
             
  
              <div>
                <label className='text-gray-700 ' htmlFor='comment'>
                Special instruction
                </label>
                <input
                  id='comment'
                  name='Specialinstruction'
                  type='text'
                  required
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div className='flex flex-col gap-2 '>
                <label className='text-gray-700'>Deadline</label>
                 <input type="date" name='date' required />
                {/* Date Picker Input Field */}
              </div>
            </div>
  
            <div className='flex justify-end mt-6'>
              <button
                type='submit'
                className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#23BE0A] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
              >
               Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    );
};

export default Submiton;