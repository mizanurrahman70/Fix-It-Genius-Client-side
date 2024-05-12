import React from "react";

import img1 from "../../assets/jeshoots-com-sMKUYIasyDM-unsplash.jpg";
import img2 from "../../assets/jim-varga-xSKeLgSLV2s-unsplash.jpg";
import img3 from "../../assets/tom-conway-0dtQVPebr0Q-unsplash.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="carousel w-full rounded-2xl h-[550px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        <div className="absolute  md:pl-16 pt-32 md:pt-[5%] text-white   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
          <div className="mx-auto md:w-1/3 space-y-5">
            <h1 className="text-xl md:text-6xl mt-2 font-extrabold">
              {" "}
              Your One-Stop Solution for All Computing Needs
            </h1>
            <p>
              At Computer Service Hub, we are your trusted partners in ensuring
              seamless computing experiences.{" "}
            </p>
            <button className="btn btn-outline btn-warning  w-56">
             <Link to='/all_services'>Services</Link>
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute mx-auto md:pl-16 pt-32 md:pt-[5%] text-white   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
          <div className="mx-auto md:w-1/3 space-y-5">
            <h1 className="text-xl md:text-6xl mt-2 font-extrabold">
              {" "}
              Restoring Your Computer's Heartbeat
            </h1>
            <p>
              At Motherboard Repair Experts, we understand the vital role that
              your computer's motherboard plays in its overall functionality.{" "}
            </p>
            <button className="btn btn-outline btn-warning w-56">
            <Link to='/all_services'>Services</Link>
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute  md:pl-16 pt-32 md:pt-[5%] text-white   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
          <div className="mx-auto md:w-1/3 space-y-5">
            <h1 className="text-xl md:text-6xl mt-2 font-extrabold">
              {" "}
              Your One-Stop Solution for All Computing Needs
            </h1>
            <p>
            At Electronics Cycle Repair, we're committed to extending the lifespan of your electronic cycles while minimizing electronic waste.{" "}
            </p>
            <button className="btn btn-outline btn-warning w-56">
            <Link to='/all_services'>Services</Link>
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
