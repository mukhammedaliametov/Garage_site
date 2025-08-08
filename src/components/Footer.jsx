import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import Logo from '../assets/logo.png';
import { FaCaretRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0b1023] text-white pt-10 pb-6 px-6 lg:px-20 grid items-center grid-cols-1 md:grid-cols-3 gap-10">
      <div className='bg-[]'>
        <div className="mb-6">
          <img src={Logo} alt="Logo" className="h-12" />
        </div>
        <h3 className="text-[24px] font-plex font-semibold mb-4 tracking-wider text-[#639CFF]">SERVICES</h3>
        <ul className="space-y-2 text-sm font-plex">
          <li className='flex items-center gap-[5px]'><FaCaretRight className='text-[#639CFF]' /> 24/7 Emergency Garage Door Repairs</li>
          <li className='flex items-center gap-[5px]'><FaCaretRight className='text-[#639CFF]' /> Garage Door Repairs</li>
          <li className='flex items-center gap-[5px]'><FaCaretRight className='text-[#639CFF]' /> Garage Door Opener Repairs</li>
          <li className='flex items-center gap-[5px]'><FaCaretRight className='text-[#639CFF]' /> Garage Door Springs Replacement</li>
          <li className='flex items-center gap-[5px]'><FaCaretRight className='text-[#639CFF]' /> New Garage Door Installation</li>
          <li className='flex items-center gap-[5px]'><FaCaretRight className='text-[#639CFF]' /> Gate Installation Services</li>
          <li className='flex items-center gap-[5px]'><FaCaretRight className='text-[#639CFF]' /> Gate Repair Services</li>
          <li className='flex items-center gap-[5px]'><FaCaretRight className='text-[#639CFF]' /> Full-Service Commercial Gate & Garage Repair</li>
          <li className='flex items-center gap-[5px]'><FaCaretRight className='text-[#639CFF]' /> Damaged garage door tracks fix</li>
        </ul>
      </div>
      <div>
        <h3 className="text-[24px] font-plex font-semibold mb-4 tracking-wider text-[#639CFF]">COMPANY</h3>
        <ul className="space-y-2 text-sm font-plex">
          <li>About Us</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <h3 className="text-[24px] font-plex font-semibold mb-4 tracking-wider text-[#639CFF]">CONTACTS</h3>
        <div className="flex items-center gap-2 text-sm mb-2 font-plex">
          <FaPhoneAlt className="text-red-500" />
          <span>(889) 884 3696</span>
        </div>
        <p className="text-xs mb-4">Business hours<br /><span className='text-[18px] font-semibold'>8 a.m. - 8 p.m. | 7 days a week</span></p>

        <div className="flex space-x-4 mb-4">
          <a href="#"><FaFacebookF className="text-white hover:text-blue-500" /></a>
          <a href="#"><FaInstagram className="text-white hover:text-pink-500" /></a>
        </div>

        <p className="text-xs text-[#ffffff5e]">Contractor’s License<br />#1077353</p>
      </div>

      {/* Bottom Bar */}
      <div className="col-span-1 md:col-span-3 border-t border-gray-700 mt-10 pt-4 text-xs flex flex-col md:flex-row justify-between items-center">
        <p>©2021 California Garage Door Repair. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Privacy policy</a>
          <a href="#" className="hover:underline">Terms and conditions</a>
        </div>
        <p className="mt-2 md:mt-0">Powered by <strong>TOP POSITION</strong></p>
      </div>
    </footer>
  );
};

export default Footer;
