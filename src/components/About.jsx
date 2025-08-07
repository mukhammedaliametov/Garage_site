import React from "react";
import AboutImg from "../assets/about.png";
import { FaCheckSquare } from "react-icons/fa";

const About = () => {
  return (
    <section className="max-w-[1224px] mx-auto mt-[250px] md:mt-[20px]">
      <h2 className="text-center text-[30px] w-[322px] md:w-auto mx-auto md:text-[50px] font-plex mt-[25px] font-semibold">
        Fixing Garage Doors in Los Angeles <br />
        and surroundings since 2006
      </h2>
      <div className="flex flex-col-reverse xl:flex-row items-center my-[30px] w-[90%] mx-auto">
        <div className="pt-[40px] md:mt-0">
          <img
            src={AboutImg}
            alt="team"
            className="rounded-md w-full max-w-full xl:max-w-[500px]"
          />
        </div>

        <div className="max-w-[600px] xl:pl-[50px]">
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <FaCheckSquare className="text-blue-600 mr-[6px] text-[40px] md:text-[18px]" />
              <span className='font-semibold text-[16px] font-plex'>
                <span className="text-blue-700 font-semibold">
                  We’re a Family-Owned Business
                </span>{" "}
                that’s been giving quality service to area locals{" "}
                <span className="font-semibold text-blue-700">since 2006</span>.
              </span>
            </li>

            <li className="flex items-center gap-2">
              <FaCheckSquare className="text-blue-600 mr-[6px] text-[37px] md:text-[18px]" />
              <span className='font-semibold text-[16px] font-plex'>
                Our vision is to become the{" "}
                <span className="font-semibold text-blue-700">
                  most preferred & trusted
                </span>{" "}
                garage door repair service in US
              </span>
            </li>

            <li className="flex items-center gap-2">
              <FaCheckSquare className="text-blue-600 mr-[6px] text-[48px] md:text-[22px]" />
              <span className='font-semibold text-[16px] font-plex'>
                <span className="text-blue-700 font-semibold">
                  We’ve helped thousands and thousands of residents
                </span>{" "}
                with their garage door garage repairs and door installation
              </span>
            </li>

            <li className="flex items-center gap-2">
              <FaCheckSquare className="text-blue-600 mr-[6px] text-[50px] md:text-[22px]" />
              <span className='font-semibold text-[16px] font-plex'>
                We consistently{" "}
                <span className="font-semibold text-blue-700">
                  deliver high standard and prompt service
                </span>{" "}
                for homeowners and businesses in Los Angeles
              </span>
            </li>
          </ul>

          <div className="mt-6">
            <button className="flex cursor-pointer items-center gap-3 bg-[#E63946] text-white font-semibold px-5 py-3 rounded hover:bg-[#c5303d] transition">
              📞 888 360 3517
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
