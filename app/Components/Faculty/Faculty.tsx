import type { NextPage } from "next";
import FacultyCard from "./FacultyCard";
import Image from "next/image";

const items = [
  {
    imgsrcs: "/Rectangle 34625181.png",
    Name: "Prerana AR",
  },
  {
    imgsrcs: "/Rectangle 34625181 (1).png",
    Name: "Anirudh",
  },
  {
    imgsrcs: "/Rectangle 34625181 (2).png",
    Name: "Aparna",
  }
];

const Faculty: NextPage = () => {
  return (
    <div className="flex flex-col w-full  pb-8 gap-10 justify-center items-center text-base text-neutral-100 font-poppins bg-whitesmoke">
      <div className="flex  w-full flex-col gap-10   ">
        <div className="flex justify-center items-center w-full">
          <div className="text-5xl  font-poppins text-neutral-100 text-center  font-bold">
            faculty
          </div>
        </div>
        <div className="flex md:justify-evenly gap-4 overflow-hidden overflow-x-auto">
          {items.map((item) => {
            return <FacultyCard key={item.Name} imgsrcs={item.imgsrcs} Name={item.Name} />;
          })}
        </div>
      </div>

      <div className="rounded-lg shadow-[0px_7px_7px_rgba(0,_123,_255,_0.12)] box-border  overflow-hidden flex flex-row items-center justify-center p-3 border-1 border-solid border-neutral-40">
        <div className="flex flex-row items-center justify-center gap-[8px] outline-none p-0">
          <div className="  font-semibold shrink-0">meet the teachers</div>
          <div className=" relative w-6 h-6 ">
            <Image className="" alt="" src="/Group45535(1).svg" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
