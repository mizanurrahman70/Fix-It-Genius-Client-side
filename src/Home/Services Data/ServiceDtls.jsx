import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDtls = () => {
    const loaderData=useLoaderData()

    const{serviceName,emailAddress,serviceArea,Price,imgURL,description,providerEmail,providerImage,providerName,_id}=loaderData
   
    return (
        <div className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
      {/* Job Details */}
      <Helmet>
        <title>Details</title>
      </Helmet>
      <div className='flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]'>
        <div className='flex items-center justify-between'>
          <span className='text-sm font-light text-gray-800 p-1  bg-green-400 rounded-full '>
            Deadline: {`${new Date().getDate().toString().padStart(2, '0')}/${(new Date().getMonth() + 1).toString().padStart(2, '0')}/${new Date().getFullYear()}`}
          </span>
          <span className='px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full '>
           Repair Services
          </span>
        </div>

        <div>
         

          <img src={imgURL} className='h-40 w-2/3 mx-auto rounded-2xl mt-5' alt="" />
          <h1 className='mt-2 text-3xl font-semibold text-gray-800 '>
         {serviceName}
          </h1>
          <p className='mt-6 text-sm font-bold text-gray-600 '>
            {description}
          </p>
          <p className='mt-6 text-sm font-bold text-gray-600 '>
            Buyer Details:
          </p>
          <div className=' text-center'>
            <div>
              <p className='mt-2 text-sm  text-gray-600 '><span className='text-xl font-semibold'>Name</span>: {providerName}</p>
              <p className='mt-2 text-sm  text-gray-600 '>
             <span className='text-xl font-semibold'>Loaction :</span><span>{serviceArea}</span>
              </p>
            </div>
            {/* <div className='rounded-full object-cover overflow-hidden w-14 h-14'>
              <img src='' alt='' />
            </div> */}
          </div>
          <p className='mt-2 text-lg font-bold text-gray-600 '>
            <span>Price :</span>{Price}
          </p>
          <button className='btn btn-primary w-full'><Link to={`/submition/${_id}`}>Percusses</Link></button>
        </div>
      </div>
      {/* Place A Bid Form */}
      <section className='p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]'>
        <h2 className='text-lg font-semibold text-gray-700 capitalize '>
      Job Provider
        </h2>

        <div className="max-w-full p-8 sm:flex sm:space-x-6 bg-[#3d434a] text-gray-100">
	<div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
		<img src={providerImage} alt="" className="object-cover object-center w-full h-full rounded bg-gray-500" />
	</div>
	<div className="flex flex-col space-y-4">
		<div>
			<h2 className="text-2xl font-semibold">{providerName}</h2>
			<span className="text-sm text-gray-400">{serviceArea}</span>
		</div>
		<div className="space-y-1">
			<span className="flex items-center space-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
					<path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
				</svg>
				<span className="text-gray-400">{providerEmail}</span>
			</span>
			<span className="flex items-center space-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber" className="w-4 h-4">
					<path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
				</svg>
				<span className="text-gray-400">+25 381 77 983</span>
			</span>
      
		</div>
	</div>
</div>
      </section>
    </div>
    );
};

export default ServiceDtls;