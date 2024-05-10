import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const AllServices = () => {
    const loaderData=useLoaderData()
    console.log(loaderData)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-auto'>
     
        {
            loaderData.map((service) => (
              <ServiceCard key={service._id} services={service} />
            ))
        }
          
    </div>
    );
};

export default AllServices;