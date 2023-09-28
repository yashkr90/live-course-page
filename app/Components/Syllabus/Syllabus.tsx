import React from "react";
import type { NextPage } from "next";
import Image from "next/image";


const subjects = [
  {
    imgsrc: "/Chemistry_Icon_InLn (2).svg",
    sub: "Chemistry",
    bg: "bg-[#ffedf0]",
  },
  {
    imgsrc: "/Physics_Icon_InLn (3).svg",
    sub: "Physics",
    bg: "bg-[#fff3ec]",
  },
  {
    imgsrc: "/Biology_Icon_InLn (2).svg",
    sub: "Biology",
    bg: "bg-[#f2ffed]",
  },
];

const Syllabus: NextPage = () => {
  return (
    <div className="flex md:py-40 md:px-2 justify-center pt-5">
      <div className="flex flex-col gap-10">
        <div className="text-5xl inline-block font-poppins text-neutral-100 text-center font-bold">
          syllabus
        </div>
        <div className="grid md:grid-cols-3 md:grid-rows-1 grid-cols-1  flex-col md:flex-row gap-4">
          {subjects.map((item) => {
            return (
              <Sub
                imgsrc={item.imgsrc}
                sub={item.sub}
                bg={item.bg}
                key={item.sub}
              />
            );
          })}

        
        </div>
      </div>
    </div>
  );
};

const Sub:NextPage<{imgsrc:string,sub:string,bg:string}> = ({imgsrc,sub,bg}) => {
  return (
    <div className="flex px-3 bg-[#ffedf0] rounded-2xl aspect-auto">
      <div className="flex w-[80vw] md:w-full justify-between md:gap-12 items-center  py-8  ">
        <div className=" flex justify-between gap-5 items-center">
          <div className=" relative w-16 h-16 max-w-full overflow-hidden max-h-full">
            <Image src={imgsrc} alt="beaker" fill />
          </div>
          <div className=" text-2xl font-semibold font-poppins text-black text-left">
            {sub}
          </div>
        </div>

        <div className="relative h-6 w-6 max-w-full overflow-hidden max-h-full 2 flex-shrink">
          <Image src="/Group 1000006372.svg" alt="arrow" fill />
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
