import React, { useEffect, useState } from "react";
import useAuth from "../../Custom Hooks/useAuth";
import axios from "axios";
import ManageRow from "./ManageRow";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import nodata from '../../assets/logo/nodata.jpg'

const Manage = () => {
    const {user}=useAuth()
    const email=user?.email
    const [manageData,setManageData]=useState([])
   
   const deleteHandle=(_id)=>{
    console.log(_id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
     
      if (result.isConfirmed) {
    
        axios.delete(`http://localhost:5000/booking/${_id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
        
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
  
            const remaining = manageData.filter((mng) => mng._id !== _id);
            setManageData(remaining);
          } 
        })
      }
    });
   }

    useEffect(()=>{
      const data= async()=>{
        const res=await axios.get(`http://localhost:5000/booking?email=${email}`)
        setManageData(res.data)
      }
      data()
    },[email])
    if(manageData.length == 0){
      return <>
      <img src={nodata} alt="" className="text-center mx-auto " />
      </>
    }

   
  return (
    <div className="overflow-x-auto">
       <Helmet>
        <title>Manege Service</title>
      </Helmet>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
             Delete
            </th>
            <th>Name</th>
            <th>Job Title</th>
            <th>Price</th>
            <th>Update</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
            manageData.map((rowData)=><ManageRow
             key={rowData._id}
             manageRow={rowData}
             deleteHandle={deleteHandle}
            ></ManageRow>)
          }
        
         
          
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

export default Manage;
