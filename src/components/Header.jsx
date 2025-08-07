import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import Phone from '../assets/phone.png';
import { FiMenu } from "react-icons/fi";
import { FaGripLines } from "react-icons/fa";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const Header = () => {
    const [nav, setNav] = useState(0);
    const handleClick = () => setNav(!nav);
    const closeNav = () => setNav(0);
    const [service, setService] = useState(0);
    const serviceClick = () => setService(!service)
    return (
        <div className='sticky w-full top-0 bg-[#19243F]'>
            <div className='max-w-[1224px] mx-auto px-[20px] md:px-[30px] 2xl:px-0 flex items-center justify-between py-[20px]'>
                <a href='' className='pr-[40px]'>
                    <img src={Logo} alt="logo" width={80} />
                </a>
                <div className='hidden md:flex items-center gap-[20px] font-plex'> 
                    <a href="" className='uppercase text-[16px] text-[#ffffff83] tracking-[1.2px] hover:text-white'>Home</a>
                    <a href="" className='uppercase text-[16px] text-[#ffffff83] tracking-[1.2px] hover:text-white'>About Us</a>
                    <a href="" className='uppercase text-[16px] text-[#ffffff83] tracking-[1.2px] hover:text-white'>Services</a>
                    <a href="" className='uppercase text-[16px] text-[#ffffff83] tracking-[1.2px] hover:text-white'>Contact</a>
                    <a href="" className='uppercase text-[16px] text-[#ffffff83] tracking-[1.2px] hover:text-white'>Blog</a>
                </div>
                <div onClick={handleClick} className='block md:hidden absolute py-[26px] left-[45%] text-[50px] ml-[-14px] text-white bg-[#2E74EE] px-[10px]'>
                    <FiMenu />
                </div>
                 <div className={nav ? 'absolute bg-[#2E74EE] top-[102px] left-0 w-full h-auto py-[50px] pl-[40px] overflow-hidden flex flex-col md:hidden  gap-[30px]': 'absolute bg-[#2E74EE] top-[102px] left-0 w-full h-0 p-0 overflow-hidden flex flex-col md:hidden  gap-[30px]'}> 
                    <a href="" className='uppercase text-[16px] text-[#fff] tracking-[1.2px]'>Home</a>
                    <a href="" className='uppercase text-[16px] text-[#fff] tracking-[1.2px]'>About Us</a>
                    <a href="javascript:void(0)" onClick={serviceClick} className='uppercase text-[16px] text-[#fff] tracking-[1.2px] flex items-center gap-[10px]'>Services {service ? <FaCaretUp className='text-[20px]' /> : <FaCaretDown className='text-[20px]' />}</a>
                    <div className={service ? 'flex flex-col pl-[5px]' : 'hidden'}>
                        <a href="" className='uppercase text-[16px] text-[#fff] tracking-[1.2px] my-[8px]'>Garage Door Repair</a>
                        <a href="" className='uppercase text-[16px] text-[#fff] tracking-[1.2px] my-[8px]'>Garage Door Opener <br /> Installation and Repair</a>
                        <a href="" className='uppercase text-[16px] text-[#fff] tracking-[1.2px] my-[8px]'>Garage Door Repair</a>
                    </div>
                    <a href="" className='uppercase text-[16px] text-[#fff] tracking-[1.2px]'>Contact</a>
                    <a href="" className='uppercase text-[16px] text-[#fff] tracking-[1.2px]'>Blog</a>
                    <FaGripLines onClick={closeNav} className='absolute bottom-0 justify-center w-full text-[26px] text-white ml-[-35px]' />
                </div>
                <div className='flex flex-col md:flex-row items-center font-plex'>
                    <img src={Phone} alt="phone" className='w-[40px]' />
                    <a href="#" className='hidden xl:block text-[16px] text-[#fff] tracking-[1.2px] font-semibold ml-2'>888 360 3517</a>
                    <a href="#" className='block xl:hidden md:text-[16px] text-[#fff] tracking-[1.2px] font-semibold ml-2 md:mt-2 text-[15px]'>Call Us Now</a>
                </div>
            </div>
        </div>
    );
};

export default Header;