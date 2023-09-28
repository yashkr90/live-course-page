import type { NextPage } from "next";
import ScheduleCard from "./ScheduleCard";
import Image from "next/image";

const Schedule: NextPage = () => {
  return (
    <div className=" w-full overflow-hidden flex flex-col items-center justify-center md:px-24 py-20  px-14 box-border text-left text-[48px] text-neutral-100 font-display-03-semibold">
      {/* <div className="flex flex-col items-center justify-center"> */}

      <div className="rounded-xl bg-whitesmoke flex flex-col items-start justify-start w-full  pt-10 px-10 pb-[180px] gap-16">
        <div className="w-full flex flex-col items-start justify-start gap-[4px]">
          <div className="leading-[60px]">schedule</div>
          <div className="w-full self-stretch flex md:flex-row flex-col items-center justify-between text-[18px] text-neutral-70">
            <div className="leading-[27px]">
              <span>
                syllabus will be completed by{" "}
                <span className="font-semibold text-neutral-100">
                  12 Dec, 2023
                </span>
                after which revision will commence.
              </span>
            </div>
            <div className="w-full md:w-[251px] rounded-xl bg-aliceblue flex items-start justify-between py-2.5 px-5 text-base text-neutral-100 border-[1px] border-solid border-primary-60">
              <div className="relative leading-[24px] font-medium">
                15 June to 22 June
              </div>
              <div className="relative w-6 h-6 ">
                <Image className="" alt="" src="/expand_more.svg" fill style={{ objectFit: "fill" }}/>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:justify-start justify-between gap-12 w-full text-5xl">
          <div className="flex flex-col w-full md:items-start md:justify-start justify-between gap-10">
            {/* <ScheduleCard /> */}
            <ScheduleCard
              day={"Mon"}
              date={"15 June"}
              subject={["Biology", "Physics"]}
            />
            <ScheduleCard
              day={"Tue"}
              date={"16 June"}
              subject={["Chemistry", "Biology"]}
            />
            <ScheduleCard
              day={"Wed"}
              date={"17 June"}
              subject={["Physics", "Chemistry"]}
            />
            {/* <ScheduleCard /> */}
          </div>

          <div className="rounded-xl h-9 overflow-hidden shrink-0 flex flex-row items-center justify-start py-3 px-0 box-border gap-[4px] text-base text-primary-60">
            <div className="relative leading-[24px] lowercase font-semibold">
              view more
            </div  >
            <div className="relative w-6 h-6">
            <Image className="" alt="expand" src="/expand_more.svg" fill />
            </div>
           
          </div>
        </div>
      </div>

    </div>
  );
};

export default Schedule;
