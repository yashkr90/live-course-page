import { NextPage } from "next";
import Image from "next/image";
import React from "react";

const Scholarships: NextPage = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse bg-[#00364e] gap-2 px-6 py-6">
      <div className="flex md:hidden bg-royalblue w-[80%] rounded-md justify-center items-center px-4 py-2 self-center">
        <button className="bg-transparent self-center text-white font-poppins text-xs">
          apply to scholarships
        </button>
        <div className="relative w-4 h-4">
          <Image src="/Group 45535.svg" alt="" fill />
        </div>
      </div>
      <div className="flex md:w-1/2 h-[271px]  justify-center">
        {/* <div className="relative">
          <div className="abolute rounded-[50%] bg-slate-700 w-[200px] h-[200px] left-10 z-10" />
        </div> */}

        <div className="relative w-[271px] h-[271px] -mb-6">
          <Image
            src="/DSC08615 2.png"
            alt=""
            fill
            // style={{objectFit:"contain"}}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 font-semibold font-poppins">
        <div className="md:text-5xl text-3xl">
          <span className="text-white">get up to</span>{" "}
          <span className="text-gold"> 50% scholarships!</span>
        </div>
        <div className="text-md text-[#cecfd0] font-poppins font-thin text-xs">
          over <span className="font-semibold">500+</span> students awarded
          scholarships worth of
          <span> 50L</span>
        </div>
        <div className="hidden md:flex bg-royalblue md:w-1/3 rounded-md justify-center items-center px-4 py-1 ">
          <button className="bg-transparent self-center text-white font-poppins text-xs">
            apply to scholarships
          </button>
          <div className="relative w-4 h-4">
            <Image src="/Group 45535.svg" alt="" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;
