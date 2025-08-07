import React from "react";
import listItem from "../assets/list_item.svg";
import Google from "../assets/google.png";
import Yelp from "../assets/yelp.png";
import { FaStar } from "react-icons/fa";
import herobg from "../assets/hero_bg.png";
import HeroForm from '../components/HeroForm';

const Hero = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className="bg-gradient w-full h-screen">
        <div className="max-w-[1224px] mx-auto px-[20px] md:px-[30px] 2xl:px-0 flex flex-col lg:flex-row items-center justify-between pt-[30px]">
          <div className="text-white">
            <h1 className="font-plex text-[38px] md:text-[65px]/[85px] font-semibold w-[300px] lg:w-[550px]">Garage Door Repair Company in Los Angeles</h1>
            <h3 className="font-caveat text-[32px] lg:text-[40px]">Serving the Surrounding areas</h3>
            <p className="flex items-center text-[20px] lg:text-[22px] my-[5px] font-plex italic capitalize">
              <img src={listItem} alt="list_item" className="mr-[10px] w-[13px]" />
              24/7 Emergency Service Available
            </p>
            <p className="flex items-center text-[20px] md:text-[22px] my-[5px] font-plex italic capitalize">
              <img src={listItem} alt="list_item" className="mr-[10px] w-[13px]" />
              same day service available
            </p>
            <p className="flex items-center text-[20px] md:text-[22px] my-[5px] font-plex italic capitalize">
              <img src={listItem} alt="list_item" className="mr-[10px] w-[13px]" />
              Licensed and Insured
            </p>
            <p className="flex items-center text-[20px] md:text-[22px] my-[5px] font-plex italic capitalize">
              <img src={listItem} alt="list_item" className="mr-[10px] w-[13px]" />
              your local garage door repair company
            </p>
            <div className="flex justify-around md:justify-start items-center gap-[30px] mt-[20px] my-[40px] md:mb-0">
              <div className="flex flex-col justify-center items-center">
                <img src={Yelp} alt="yelp_logo" className="w-[120px] md:w-[85px]" />
                <div className="flex items-center mt-[5px] gap-[4px] text-yellow-500 text-[22px] md:text-[18px]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center mt-[7px]">
                <img src={Google} alt="google_logo" className="w-[120px] md:w-[85px]" />
                <div className="flex items-center mt-[5px] gap-[4px] text-yellow-500 text-[22px] md:text-[18px]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
          <HeroForm />
        </div>
      </div>
    </div>
  );
};

export default Hero;
