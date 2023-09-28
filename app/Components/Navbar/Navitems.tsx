import Image from "next/image";
import React, { useState } from "react";
import { NextPage } from "next";

interface NavitemProps {
  isHidden: boolean;
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navitems: NextPage<NavitemProps> = ({ isHidden, setIsHidden }) => {
  return (
    <>
      {/* <div className={`${isHidden?"flex":'absolute'}`}> */}

      <div
        className={` md:w-auto w-full justify-center rounded-2xl border-2 border-white border-solid flex text-white md:py-1 py-2 items-center `}
      >
        <button className="bg-transparent outline-none  text-white text-sm">
          {" "}
          class 12+ | NEET
        </button>
        <div className="relative w-6 h-6">
          <Image src="/expand_more (1).svg" alt="" fill />
        </div>
      </div>

      <div className="flex md:w-auto w-full justify-center items-center">
        <div>study material</div>
        <div className="relative w-6 h-6">
          <Image src="/expand_more (1).svg" alt="" fill />
        </div>
      </div>

      <div className="flex md:w-auto w-full justify-center items-center">result</div>
      <div className="flex  md:w-auto w-full justify-center ">
        <div>more</div>
        <div className="relative w-6 h-6">
          <Image src="/expand_more (1).svg" alt="" fill />
        </div>
      </div>

      <div className="flex md:w-auto w-full justify-center items-center">
        <div className="relative w-60 h-10">
          <Image src="./Frame 1000006292.svg" alt="helpline" fill />
        </div>
      </div>
    </>
  );
};

export default Navitems;
