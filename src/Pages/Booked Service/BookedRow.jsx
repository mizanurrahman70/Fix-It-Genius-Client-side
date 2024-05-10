import React from "react";

const BookedRow = ({ bookedData }) => {
  console.log(bookedData);
  const {
    serviceName,
    price,
    providerImage,
    providerName,
    _id,
    serviceId,
    serviceImage,
    serviceDate,

    status,
  } = bookedData;
  return (
    <tr>
      <th>
        <p>{serviceId}</p>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={serviceImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceDate}
        <br />
        <span className="badge badge-ghost badge-sm"></span>
      </td>
      <td>{price}</td>
      <th>
        <p>{status}</p>
      </th>
    </tr>
  );
};

export default BookedRow;
