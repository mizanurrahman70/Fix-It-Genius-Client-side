import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({services}) => {
   
    const{serviceName,emailAddress,serviceArea,Price,imgURL,description,providerEmail,providerImage,providerName}=services

  
    return (
        <>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={imgURL} alt="Shoes"  className='h-52'/></figure>
  <div className="card-body">
    <h2 className="card-title">Service Name : <span>{serviceName}</span></h2>
    <p>Description : <span>{description}</span></p>
    <div>
    <img alt="" src={providerImage} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
    <p>Owaner : <span>{providerName}</span></p>
	
    </div>
    <div className="card-actions justify-around">
        <p>Price : <span>{Price}</span></p>
      <button  className="btn btn-primary"><Link to={`/services/${services?._id}`}>View Detail</Link></button>
    </div>
  </div>
       </div>

        </>
    );
};

export default ServiceCard;