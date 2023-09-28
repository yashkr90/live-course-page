import type { NextPage } from "next";
import Image from "next/image";

const Banner: NextPage = () => {
  return (
    <div className="flex md:flex-row md:justify-between w-full p-4 flex-col-reverse rounded-5 shadow-[0px_4px_20px_rgba(0,_96,_169,_0.2)] bg-[#d4e9ff] rounded-lg gap-4 z-20">
      <div className="flex md:w-2/3 md:h-auto h-[268px] -mb-4 justify-start z-20">
      {/* <div className=" rounded-[50%] bg-yellow-300 h-[250px] w-[250px] z-0"></div> */}
        <div className="relative w-full z-20">
         
          <Image
            src="/Group 1171275950teacher_yellow.png"
            alt=""
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className="flex flex-col md:pr-15 gap-5">
        <div className="md:text-4xl text-2xl font-semibold  font-poppins">
          mind over matters with <span className="text-royalblue">mentors</span>
        </div>
        <div className="text-sm font-poppins text-neutral-70">
          We’ll guide you in making a study plan that helps you study
          efficiently and in a balanced manner!
        </div>
        <div className="flex justify-center items-centerbg-royalblue w-3/4 rounded-md bg-royalblue p-2">
          <button className="outline-none bg-transparent text-white">
            lets plan together
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
