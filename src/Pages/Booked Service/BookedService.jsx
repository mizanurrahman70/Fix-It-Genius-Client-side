import React, { useEffect, useState } from 'react';
import useAuth from '../../Custom Hooks/useAuth';
import axios from 'axios';
import BookedRow from './BookedRow';
import { Helmet } from 'react-helmet-async';
import nodata from '../../assets/logo/nodata.jpg'

const BookedService = () => {
    const {user}=useAuth()
    const email=user?.email
    const [bookedData,useBookedData]=useState([])

    useEffect(()=>{
        const data= async()=>{
          const res=await axios.get(`http://localhost:5000/booked?email=${email}`)
         useBookedData(res.data)
        }
        data()
      },[email])
      if(bookedData.length == 0){
        return <>
        <img src={nodata} alt="" className="text-center mx-auto " />
        </>
      }
    return (
        <div className="overflow-x-auto">
           <Helmet>
        <title>Booked Service</title>
      </Helmet>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                Service ID
              </th>
              <th>Job Title</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
  
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
          
          {
            bookedData.map((booked)=><BookedRow key={booked._id} bookedData={booked}></BookedRow>)
          }
           
            
          </tbody>
          {/* foot */}
        </table>
      </div>
    );
};

export default BookedService;