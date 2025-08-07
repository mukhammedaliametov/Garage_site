import React from "react";

const HeroForm = () => {
  return (
    <div className="max-w-full absolute md:static left-0 top-[80%] right-0 w-full md:max-w-[380px] mx-auto bg-[#E5EFFF] shadow-lg px-[20px] xl:px-[30px] py-[8px] pb-[20px]">
      <h2 className="text-[#2E73EC] text-[32px] font-bold text-center font-plex mb-[-10px]">
        Get Free Estimate
      </h2>
      <p className="text-center text-[24px] mb-4 text-[#1D1818] font-plex font-semibold">
        in Minutes
      </p>
      <form className="flex flex-col gap-[10px] xl:gap-[5px]">
        <select
          className="border border-gray-300 p-2 text-gray-600 text-sm bg-white"
          required
        >
          <option value="">Choose Service</option>
          <option value="repair">Repair</option>
          <option value="install">Installation</option>
        </select>
        <select
          className="border border-gray-300 p-2 text-gray-600 text-sm bg-white"
          required
        >
          <option value="">Preferred Time</option>
          <option value="repair">Repair</option>
          <option value="install">Installation</option>
        </select>
        <input
          type="text"
          placeholder="Full Name"
          className="border border-gray-300 p-2 text-sm bg-white"
          required
        />

        <input
          type="number"
          placeholder="Phone"
          className="border border-gray-300 p-2 text-sm bg-white"
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 p-2 text-sm bg-white"
          required
        />

        <input
          type="text"
          placeholder="Full Address"
          className="border border-gray-300 p-2 text-sm bg-white"
          required
        />

        <button
          type="submit"
          className="bg-[#E63946] text-white font-bold py-2 hover:bg-[#c5303d] transition cursor-pointer"
        >
          SEND
        </button>
      </form>

      <p className="text-[10px] text-center text-gray-500 mt-4 leading-tight">
        This site is protected by reCAPTCHA and the <br />
        Google{" "}
        <a href="#" className="underline">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="#" className="underline">
          Terms of Service
        </a>{" "}
        apply.
      </p>
    </div>
  );
};

export default HeroForm;
