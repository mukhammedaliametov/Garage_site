import React from "react";
import Garage1 from "../assets/garage1.jpg";
import Garage2 from "../assets/garage2.jpg";
import Garage3 from "../assets/garage3.jpg";
import Garage4 from "../assets/garage4.jpg";
import Garage5 from "../assets/garage5.jpg";
import Garage6 from "../assets/garage6.jpg";
import Garage7 from "../assets/garage7.jpg";
import Garage8 from "../assets/garage8.jpg";
import Garage9 from "../assets/garage9.jpg";

const Services = () => {
  const services = [
    {
      img: Garage1,
      title: "24/7 EMERGENCY GARAGE DOOR REPAIR",
      bg: "bg-red-500",
      badge: "24/7",
    },
    {
      img: Garage2,
      title: "RESIDENTIAL GARAGE DOOR REPAIR",
      bg: "bg-[#16233A]",
    },
    {
      img: Garage3,
      title: "GARAGE DOOR OPENER REPAIR",
      bg: "bg-[#16233A]",
    },
    {
      img: Garage4,
      title: "GARAGE DOOR SPRINGS REPLACEMENT",
      bg: "bg-[#16233A]",
    },
    {
      img: Garage5,
      title: "NEW GARAGE DOOR INSTALLATION",
      bg: "bg-[#16233A]",
    },
    {
      img: Garage6,
      title: "NEW GATE INSTALLATION",
      bg: "bg-[#16233A]",
    },
    {
      img: Garage7,
      title: "GATE REPAIR SERVICES",
      bg: "bg-[#16233A]",
    },
    {
      img: Garage8,
      title: "FULL-SERVICE COMMERCIAL GATE",
      bg: "bg-[#16233A]",
    },
    {
      img: Garage9,
      title: "DAMAGED GARAGE DOOR TRACKS FIX",
      bg: "bg-[#16233A]",
    },
  ];

  return (
    <div>
      <div className="max-w-[1200px] mx-auto px-[20px] text-center">
        <h2 className="text-2xl md:text-[60px] my-[20px] font-bold font-plex">
          Los Angeles Garage Door <br /> Repair Services
        </h2>
        <p className="text-blue-600 mb-8 font-plex italic font-semibold px-[20px]">
          We fix all types and components of garage doors or gates
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px] max-w-[900px] mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-md shadow-lg w-[300px] mx-auto"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-[200px] object-cover group-hover:scale-105 transition duration-300"
              />

              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <button className="border-2 border-white text-white px-6 py-2 font-semibold">
                  CHOOSE
                </button>
              </div>

              {service.badge && (
                <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                  {service.badge}
                </span>
              )}

              <div
                className={`${service.bg} text-white text-sm font-medium text-center py-3 px-2`}
              >
                {service.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
