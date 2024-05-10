import React, { useEffect, useState } from "react";
import useAuth from "../../Custom Hooks/useAuth";
import axios from "axios";
import ManageRow from "./ManageRow";

const Manage = () => {
    const {user}=useAuth()
    const email=user?.email
    const [manageData,setManageData]=useState([])
   











  
    useEffect(()=>{
      const data= async()=>{
        const res=await axios.get(`http://localhost:5000/booking?email=${email}`)
        setManageData(res.data)
      }
      data()
    },[email])
    console.log(manageData)
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
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
            manageData.map((rowData)=><ManageRow key={rowData._id} manageRow={rowData}></ManageRow>)
          }
        
         
          
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

export default Manage;
