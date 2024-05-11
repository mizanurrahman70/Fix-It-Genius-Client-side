import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../Custom Hooks/useAuth';
import axios from 'axios';
import ServiceTodoRow from './ServiceTodoRow';


const ServiceToDo = () => {
    const {user}=useAuth()
   const email =user?.email
   const [toDo,setTodo]=useState([])
//    const [status,setState]=useState()
//    const [stateId,setStateId]=useState()

   const updateState=(status,_id)=>{
//     console.log(_id)
//     console.log(e)
//    setState(e)
//    setStateId(_id)
   axios.put(`http://localhost:5000/update_status/${_id}`,{status})
   .then(res=>{
       console.log(res.data)
   })
   }
  
    
    
   

   useEffect(()=>{
    axios.get(`http://localhost:5000/service_to_do?email=${email}`)
    .then(res=>{
        console.log(res.data)
        setTodo(res.data)
    })

   },[email])
   
    return (
        <div className="">
       <Helmet>
        <title>Service To Do</title>
      </Helmet>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
            serviceId

            </th>
            <th>Name</th>
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