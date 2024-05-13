import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import axios from 'axios';
import nodata from '../../assets/logo/nodata.jpg'


const AllServices = () => {
    const loaderData=useLoaderData()


    const [allData,setAllData]=useState(loaderData)
    const [quary,setQuary]=useState('')
   
    

    
    const handleChange=e=>{
        
        setQuary(e.target.value)
    }

    useEffect(()=>{
        if(quary.trim()===''){
            return
        }
        axios.get(`https://fix-it-genius-server-side.vercel.app/searching?search=${quary}`)
        .then(res=>{
            console.log(res.data)
            setAllData(res.data)
        })

    },[quary])
    const handleSerch=(e)=>{
        if(quary.trim()===''){
            return
           
        }
        axios.get(`https://fix-it-genius-server-side.vercel.app/searching?search=${quary}`)
        .then(res=>{
            console.log(res.data)
            setAllData(res.data)
        })


    }
//  console.log(quary)
    return (
       <>
       <div>
       <div className="min-h-[400px] sm:px-2 px-3 mx-3 max-h-[600px] py-20 rounded-2xl bg-[#6e7b72]">
   <div className="flex justify-center flex-col">
   {/* Beautiful announcement line */}
     <div className="bg-[#1F2937] mx-auto max-w-[250px] pr-3 pl-1 py-[6px]  rounded-full gap-2 flex  items-center text-white">
       <span className="bg-[#22C55E] sm:px-3 px-2 sm:py-1 py-[3px] sm:text-base text-sm rounded-full">
         New
       </span>
       easily found
     </div>
     {/* Banner Content */}
     <div className="mt-10 ">
       <h2 className="text-white lg:text-5xl md:text-4xl sm:text-3xl text-2xl max-w-[600px] mx-auto text-center font-extrabold ">
         Search Your service
       </h2>
       <p className="lg:text-xl md:text-lg text-[#8896AB] mt-5 max-w-[600px] text-center mx-auto text-sm">
       You can search for products from anywhere in the control panel by using the search
       </p>
       {/* Banner action  */}
     
      <div className="mt-5 flex md:flex-row max-w-[450px] mx-auto justify-center gap-2 flex-col">
          <div className="md:ml-auto md:mr-0 lg:w-[55%] relative">
          <svg className="absolute mt-[10px] ml-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 3.38 8.06 7.75 8.94.57.11.78-.25.78-.55v-3.06c0-.31-.22-.59-.53-.64C5.61 16.31 4 14.29 4 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6c-.34 0-.67-.04-1-.09-.31-.05-.54-.33-.54-.64v-3.07c0-.3-.21-.66.57-.59 3.43.65 6.18 3.25 6.18 6.49v.5c0 .41.34.75.75.75s.75-.34.75-.75v-.5c0-4.57-3.61-8.25-8-8.75z"/></svg>
              <input onChange={handleChange} value={quary} placeholder="Searching..." className="pr-3 pl-8 rounded-lg w-full  py-3" type="text" name="search" id="" />
          </div>
          <div className=" md:mr-auto md:ml-0 lg:w-[45%] ">
                <button onClick={handleSerch} className="bg-[#22C55E] sm:py-3 py-2 sm:text-base text-sm px-18 text-white rounded-lg h-full w-full ">Find Now</button>
          </div>
       </div>

     
     </div>
   </div>
 </div> 
       </div>
       {
        allData? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-auto'>
     
        {
            allData.map((service) => (
              <ServiceCard key={service._id} services={service} />
            ))
        }
          
    </div>:
    <div>
      <img src={nodata} alt="" />
    </div>
       }
 </>
    );
};

export default AllServices;