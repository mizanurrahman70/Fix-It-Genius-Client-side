import axios from "axios";
import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState();
  const [loader, SetLoader] = useState(true);
  // axios.get('https://fix-it-genius-server-side.vercel.app/services')
  // .then(res=>{
  //     console.log(res.data)
  //     setServices(res.data)
  // })
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fix-it-genius-server-side.vercel.app/services"
        );
        setServices(response.data.slice(0, 6));
        SetLoader(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div data-aos="fade-down-left" className="mt-5 mb-5">
        <h1 className="text-4xl font-semibold text-center">Our Popular Service</h1>
        <p className="text-center mt-5 mb-5">
        
        Our popular services are designed to meet the diverse needs of  <br />{" "}
        our clientele while delivering exceptional results every time. <br /> delivering exceptional results every time.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-auto">
        {loader ? (
          <div className="w-16 mx-auto mt-10 bt-10 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
        ) : services.length > 0 ? (
          services.map((service) => (
            <ServiceCard key={service._id} services={service} />
          ))
        ) : (
          <p>No data found.</p>
        )}
      </div>
      <div className="mt-10 mb-10">
        <button className="btn bg-[#1DD100] w-32 btn-success">
          <Link to="/all_services">Show All</Link>
        </button>
      </div>
    </>
  );
};

export default Services;
