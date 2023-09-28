import type { NextPage } from "next";
import Image from "next/image";
// import Heroimg from "../../public/";
import Card from "./Card";
import Buttons from "./Buttons";

const buttons = [
  {
    text: "enrol at ₹1,660/month",
    bg: "bg-white",
    textcol: "text-primary-60",
    imgsrcs: "/Group 45535 (2).svg",
  },
  {
    text: "start learning for free",
    bg: "bg-primary-60",
    textcol: "text-white",
    imgsrcs: "/Group 45535 (3).svg",
  },
];

const subjects = [
  {
    id: 1,
    com: <div className="">Biology, Physics, Chemistry</div>,
    imgsrc: "/Group.svg",
  },
  {
    id: 2,
    com: (
      <div className="">
        batch starts at <span className="font-bold">24th June</span>
      </div>
    ),
    imgsrc: "/Group 1000006369.svg",
  },
];

const Hero: NextPage = () => {
  return (
    <div className=" md:bg-primary-60  w-full flex md:flex-row flex-col h-auto items-center justify-center md:py-10 md:px-28 box-border gap-10 text-left text-base  font-poppins">
      <div className="  bg-primary-60  pt-4 md:w-2/5 w-full md:max-w-[500px]">
        <div className="relative border-2 border-solid border-yellow-300 rounded-2xl md:w-full w-[80%] md:h-96 h-80">
          <Image
            alt=""
            src="/image 1504.png"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      <div className="px-5 md:px-0 flex">
        <div className=" bg-white   md:bg-primary-60 flex md:w-3/5 w-full max-w-md flex-col   justify-between  gap-3 flex-grow">
          <div className=" w-full flex flex-col items-start justify-start gap-[12px]">
            <div className="self-stretch relative leading-[24px] lowercase">
              <span className="font-semibold text-[#ff7a00] md:text-gold">
                Full Syllabus Course
              </span>
              <span className="md:text-white text-dimgray">
                {" "}
                + Revision + Test Series
              </span>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-3 text-5xl">
              <div className="self-stretch relative leading-[60px]">
                <span className="font-bold font-poppins md:text-gold text-royalblue">
                  NEET
                </span>
                <span className="md:text-white text-gray-900 font-bold">
                  {" "}
                  rankers course
                </span>
              </div>
              <div className="self-stretch relative md:text-lg text-sm leading-[27px] text-neutral-70 md:text-whitesmoke">
                <p className="m-0 font-thin ">
                  write a short description of the course here that talks about
                  what is included and why it should be taken.
                </p>
              </div>
            </div>
          </div>
          <div className=" flex md:flex-row flex-col items-start justify-start gap-5 md:text-whitesmoke  text-neutral-100">
            {subjects.map((sub, idx) => {
              return (
                <div
                  key={sub.id}
                  className="flex flex-row items-center justify-start gap-3"
                >
                  <div className="relative w-14 h-10">
                    <Image alt="" src={sub.imgsrc} fill />
                  </div>

                  {sub.com}
                </div>
              );
            })}
          </div>
          {/* <div className=" w-full text-sm"> */}

          <Card />
          <div className=" w-full flex flex-col md:items-start md:justify-start  justify-center gap-5">
            {/* <div className="self-stretch flex flex-col items-start justify-start "> */}
            <Buttons />
            <div className=" overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-0 box-border gap-[4px]">
              {/* <div> */}
              <div className=" font-normal md:text-white text-royalblue">
                download brochure
              </div>
              <div className=" relative w-6 h-6 overflow-hidden shrink-0">
                <Image className=" " alt="" src="/Component 285down.svg" fill />
              </div>
              {/* </div> */}
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
