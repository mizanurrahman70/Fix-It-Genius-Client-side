import React from "react";

const ServiceTodoRow = ({ todo }) => {
  console.log(todo);
  const {
    serviceId,
    serviceImage,
    serviceName,
    serviceDate,
    userName,
    userEMail,
  } = todo;
  return (
    <tr>
      <th>{serviceId}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={serviceImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{userName}</div>
            <div className="text-sm opacity-50">{userEMail}</div>
          </div>
        </div>
      </td>
      <td>{serviceName}</td>
      <td>{serviceDate}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default ServiceTodoRow;