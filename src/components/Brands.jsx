import React from 'react';
import Amarr from '../assets/amarr.png';
import WayneDelton from '../assets/wayne_dalton.png';
import Chi from '../assets/chi.png';
import Clopay from '../assets/clopay.png';
import Raynor from '../assets/raynor.png';
import OverheadDoor from '../assets/overhead.png';
import LiftMaster from '../assets/lift_master.png';
import Gennie from '../assets/genie.png';
import Sommer from '../assets/sommer.png';

const Brands = () => {
  return (
    <div className="bg-[#2E74EE] py-8">
      <div className="max-w-[1224px] mx-auto px-4 text-center">
        <h2 className="text-white font-plex text-[30px] font-semibold mb-6">
          We Repair All Garage Door And Gate Brands in Los Angeles
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center">
          <img src={Amarr} alt="Amarr" className="w-[120px] h-auto object-contain" />
          <img src={WayneDelton} alt="WayneDelton" className="w-[120px] h-auto object-contain" />
          <img src={Chi} alt="Chi" className="w-[120px] h-auto object-contain" />
          <img src={Clopay} alt="Clopay" className="w-[120px] h-auto object-contain" />
          <img src={Raynor} alt="Raynor" className="w-[120px] h-auto object-contain" />
          <img src={OverheadDoor} alt="OverheadDoor" className="w-[120px] h-auto object-contain" />
          <img src={LiftMaster} alt="LiftMaster" className="w-[120px] h-auto object-contain" />
          <img src={Gennie} alt="Gennie" className="w-[120px] h-auto object-contain" />
          <img src={Sommer} alt="Sommer" className="w-[120px] h-auto object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
