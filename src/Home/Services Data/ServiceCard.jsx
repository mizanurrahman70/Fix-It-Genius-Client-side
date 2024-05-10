import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({services}) => {
   
    const{serviceName,emailAddress,serviceArea,Price,imgURL,description,providerEmail,providerImage,providerName}=services

  
    return (
        <>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={imgURL} alt="Shoes"  className='h-52'/></figure>
  <div className="card-body text-start">
    <h2 className=" text-center text-[#282828] font-semibold text-2xl"><span>{serviceName}</span></h2>
    <p className='text-[#282828] font-semibold text-bold'>Description : <span className='text-gray-500'>{description}</span></p>
    <div className='flex justify-around'>
    <img alt="" src={providerImage} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
    <div><p><span className='text-[#282828] font-semibold text-bold'>Owaner :</span> <span className=''>{providerName}</span></p>
	  <p className='text-xl font-bold'>Price : <span>{Price}</span>$</p></div>
    </div>
    
    <div className="card-actions justify-around">
        
      <button  className="btn btn-primary w-full"><Link to={`/services/${services?._id}`}>View Detail</Link></button>
    </div>
  </div>
       </div>

        </>
    );
};

export default ServiceCard;