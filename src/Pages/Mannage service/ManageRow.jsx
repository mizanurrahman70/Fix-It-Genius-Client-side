import React from 'react';
import { Link } from 'react-router-dom';

const ManageRow = ({manageRow,deleteHandle}) => {
   
    const{serviceName,Price,providerImage,providerName,_id,serviceId}=manageRow
    
   
    return (
        <tr>
            <th>
              {/* <button onClick={()=>deleteHandle(_id)} className="btn  btn-circle btn-outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button> */}
              <button onClick={()=>deleteHandle(_id)} className="flex items-center rounded-full bg-red-500 px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-red-700">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-2 h-6 w-6">  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> </svg>
                      Delete
                  </button>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={providerImage}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{providerName}</div>
                  <div className="text-sm opacity-50"></div>
                </div>
              </div>
            </td>
            <td>
             {serviceName}
              <br />
              <span className="badge badge-ghost badge-sm">
              
              </span>
            </td>
            <td>{Price}<span>$</span></td>
            <th>
              {/* <button className="btn btn-ghost btn-xs"><Link to={`/Update_service/${_id}`}>Update</Link></button> */}
              <button className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md"><Link to={`/Update_service/${_id}`}>Update</Link></button>
            </th>
          </tr>
    );
};

export default ManageRow;