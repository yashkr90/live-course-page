"use client";

import React, { useState } from "react";
import Navitems from "./Navitems";
import Image from "next/image";
import { NextPage } from "next";

const Navbar: NextPage = () => {
  const [isHidden, setIsHidden] = useState<boolean>(false);
  return (
    <div className="flex bg-royalblue w-full justify-between gap-5 py-3">
      <div className="relative h-10 w-3/12">
        <Image src="/Group 1171276429.svg" alt="logo" fill />
      </div>

      <div
        className={`md:flex gap-3 md:flex-row hidden justify-between w-full text-white  items-center bg-royalblue `}
      >
        <Navitems isHidden={isHidden} setIsHidden={setIsHidden} />
      </div>

      <div
        className={`${
          isHidden
            ? "hidden"
            : "absolute md:hidden top-14 left-0  bg-royalblue right-0  mx-auto z-10"
        }`}
      >
        <div className="flex flex-col bg-royalblue mx-auto justify-center w-[90vw] items-center gap-3 text-white py-2 px-2">
          <Navitems isHidden={isHidden} setIsHidden={setIsHidden} />
        </div>
      </div>

      <div className="flex items-center gap-2 md:w-2/12 w-5/12 ml-40">
        <div className=" flex md:w-auto   bg-transparent bg-white rounded-3xl px-5 py-2 text-royalblue outline-none">
          <div>Sign in</div>
        </div>
      </div>

        <div className="flex items-center  w-2/12 justify-center">
        <div
        className="relative  flex w-5 h-5 md:hidden "
        onClick={() => setIsHidden(!isHidden)}
      >
        <Image src="/menu.svg" alt="ham" fill />
      </div>
        </div>

    </div>
  );
};

export default Navbar;
