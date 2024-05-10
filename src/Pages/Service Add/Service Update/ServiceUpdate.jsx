
import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ServiceUpdate = () => {
    const loaderData=useLoaderData()
    console.log(loaderData)
   const {serviceName,serviceArea,Price,imgURL,description,providerEmail,providerImage,providerName,_id}=loaderData
    const submitHandle=(e)=>{
        e.preventDefault()
        const form=e.target 
        const serviceName=form.serviceName.value 
        // const emailAddress=form.emailAddress.value 
        const serviceArea=form.serviceArea.value 
        const Price=form.Price.value
        const imgURL=form.imgURL.value
        const description=form.description.value
        
        const addService={serviceName,serviceArea,Price,imgURL,description}
        axios.put(`http://localhost:5000/update/${_id}`,addService)
        .then(res=>{
          if(res.data.modifiedCount > 0){
            
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Successfully Updated",
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
        
        

    }
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
        <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
          <h2 className='text-lg font-semibold text-gray-700 capitalize '>
           Update Job
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
                  defaultValue={serviceName}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
  
              <div>
                <label className='text-gray-700 ' htmlFor='emailAddress'>
                  Email Address
                </label>
                <input
                  id='emailAddress'
                  type='email'
                  name='email'
                  defaultValue={providerEmail}
                  disabled
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div className='flex flex-col gap-2 '>
                <label className='text-gray-700'>Service Area</label>
                <input type="text" defaultValue={serviceArea} name='serviceArea' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring' />
  
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
                  defaultValue={Price}
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
                   defaultValue={imgURL}
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
                defaultValue={description}
              ></textarea>
            </div>
            <div className='flex justify-end mt-6'>
              <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
               Update
              </button>
            </div>
          </form>
        </section>
      </div>
    );
};

export default ServiceUpdate;