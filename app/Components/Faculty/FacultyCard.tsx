import type { NextPage } from "next";
import Faculty from "./Faculty";
import Image from "next/image";

const FacultyCard: NextPage<{imgsrcs: string, Name: string}> = ({imgsrcs, Name}) => {
  return (
    <div className=" flex text-center p-3  text-2xl text-black font-poppins rounded-xl bg-background-02 shadow-[0px_4px_20px_rgba(0,_96,_169,_0.2)]">
      {/* <div className=" h-full w-full "> */}
      <div className="   flex flex-col items-center justify-center gap-3">
        <div className="self-stretch flex flex-col items-center justify-center gap-[4px]">
          <div className="relative w-80 h-80 rounded-xl ">
            <Image
              fill
              alt=""
              src={imgsrcs}
            />
          </div>
          <div className="  font-semibold">{Name}</div>
          <div className=" text-sm  text-neutral-70">
            10+ Years Teaching | NIT Nagpur
          </div>
        </div>
        <div className=" flex flex-row items-start justify-start gap-2 text-left text-xs">
          <div className="rounded-lg bg-tertiary-10 box-border  flex flex-row items-center justify-center py-1 px-3 border-1 border-solid border-tertiary-60">
            <div className=" font-medium text-tertiary-60">
              Maths
            </div>
          </div>
          <div className="rounded-lg bg-success-60 box-border  flex flex-row items-center py-1 px-3 gap-2 text-forestgreen border-1 border-solid border-forestgreen">
            <div className="relative  w-4 h-4">
              <Image className=" " alt="" src="/workspace_premium.svg" fill />
            </div>
            <div className="flex w-[150px] font-medium">
              taught 64 NEET toppers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
