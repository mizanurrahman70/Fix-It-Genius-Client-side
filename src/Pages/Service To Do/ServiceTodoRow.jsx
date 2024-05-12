import React, { useState } from "react";

const ServiceTodoRow = ({ todo, updateState }) => {
  
  const {
    serviceId,
    serviceImage,
    serviceName,
    serviceDate,
    userName,
    userEMail,
    _id,
    providerEmail,
    providerName,



    status,
  } = todo;
 
  

  return (
    <tr className="">
      <th>{serviceId}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={serviceImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{providerName}</div>
            <div className="text-sm opacity-50">{providerEmail}</div>
          </div>
        </div>
      </td>
      <td>{serviceName}</td>
      <td>{serviceDate}</td>
      <th>
        <details className="dropdown">
          <summary className="m-1 btn">{status}</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={()=>updateState('Working',_id)} >
              <a>Working</a>
            </li>
            <li onClick={()=>updateState("Confirmed",_id)}>
              <a >Confirm</a>
            </li>
          </ul>
        </details>
      </th>
    </tr>
  );
};

export default ServiceTodoRow;
