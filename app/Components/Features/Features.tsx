import type { NextPage } from "next";
import Image from "next/image";
import FeatureNav from "./FeatureNav";
import Featureimg from "../../../public/Group1000006191.png";
import Checklist from "../../../public/checklist 1.svg";

const features = [
  <>
    <span className="text-neutral-100">1000+ hrs</span>
    <span className="font-semibold"> live classes</span>
  </>,
  <>
    <span className="text-neutral-100">3500+ hrs</span>
    <span className="font-semibold">recorded content</span>
  </>,
  <>
    <span className="text-neutral-100 font-semibold">ATS</span>
    <span className=""> - 24 biweekly mock tests</span>
  </>,
  <>
    <span className="text-neutral-100">world class</span>
    <span className="font-semibold">IL books</span>
  </>,
];

const Features: NextPage = () => {
  return (
    <div className=" w-full  bg-background-03 font-display-02-bold text-base flex flex-col items-center justify-center py-10 md:py-20  box-border gap-[60px]">
      <FeatureNav />

      <div className=" flex md:flex-row flex-col-reverse items-center justify-between md:w self-center">
        <div className="   flex flex-col items-start justify-center py-0 pr-0  box-border gap-10 w-full">
          <div className="    text-left text-5xl ">
            <div className=" inline-block h-30 font-bold">
              <div>all-rounder </div>
              <div className="text-royalblue font-bold">learning!</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-4 text-lg">
            {features.map((feature,idx) => {
              return (
                <div className="self-stretch flex flex-row items-center justify-start gap-4 font-poppins" key={idx}>
                  <div className="relative w-8 h-8 ">
                    <Image
                      style={{ objectFit: "cover" }}
                      alt=""
                      src="/checklist 1.svg"
                      fill
                    />
                  </div>
                  <div className="flex-1 relative ">{feature}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex self-stretch justify-center w-full h-auto">
          <div className="relative  border-2 ">
            <Image className="" alt="" src="/Group1000006191.png" height={300} width={300}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
