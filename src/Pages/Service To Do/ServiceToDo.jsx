import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../Custom Hooks/useAuth';
import axios from 'axios';
import ServiceTodoRow from './ServiceTodoRow';
import Swal from 'sweetalert2';
import nodata from '../../assets/logo/nodata.jpg'


const ServiceToDo = () => {
    const {user}=useAuth()
   const email =user?.email
   const [toDo,setTodo]=useState([])


   const updateState=(status,_id)=>{

   axios.put(`https://fix-it-genius-server-side.vercel.app/update_status/${_id}`,{status})
   .then(res=>{
       
       if(res.data.modifiedCount > 0){
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Statues update Confirmed",
          showConfirmButton: false,
          timer: 1500
        });
        location.reload()
       }
   })
   }
  
    
    
   

   useEffect(()=>{
    axios.get(`https://fix-it-genius-server-side.vercel.app/service_to_do?email=${email}`,{withCredentials:true})
    .then(res=>{
    
        setTodo(res.data)
    })

   },[email])
   if(toDo.length == 0){
    return <>
    <img src={nodata} alt="" className="text-center mx-auto " />
    </>
  }
   
    return (
        <div className="overflow-x-auto overflow-y-auto ">
       <Helmet>
        <title>Service To Do</title>
      </Helmet>
      <table className="table ">
        {/* head */}
        <thead>
          <tr>
            <th>
            serviceId

            </th>
            <th>Provider Info</th>
            <th>Job Title</th>
            <th>Date</th>
            <th>Statues</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          
        
         {
                toDo.map((td)=><ServiceTodoRow key={td._id}  todo={td} updateState={updateState}></ServiceTodoRow>)
         }
          
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
   
};

export default ServiceToDo;