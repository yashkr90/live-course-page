import type { NextPage } from "next";
import FacultyCard from "./FacultyCard";
import Image from "next/image";
import Teacherbtn from "./Teacherbtn";

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

   

      <Teacherbtn />
    </div>
  );
};

export default Faculty;
