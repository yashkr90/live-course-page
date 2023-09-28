import React from "react";
import type { NextPage } from "next";
import Card from "./Card";
import Banner from "./Banner";
import SwiperCom from "./SwiperCom";
import Image from "next/image";

const items = [
  {
    id: 1,
    months: "24",
    cost: "3,750",
    recom: true,
  },
  { id: 2, months: "12", cost: "5000", recom: false },
  { id: 3, months: "6", cost: "5000", recom: false },
];

const Pricing: NextPage = () => {
  return (
    <>
      <div className="flex flex-col gap-10 flex-grow bg-whitesmoke py-4">
        <div className="md:pl-5 py-5 w-full flex flex-col md:flex-row md:justify-between items-center gap-4">
          <div className="flex flex-col w-full md:w-2/6 gap-4 justify-center md:justify-start items-center md:items-start">
            <div className="md:text-4xl text-3xl font-poppins">
              <span className="text-gray-950">multiyear</span>{" "}
              <span className="text-royalblue">benefits</span>
            </div>
            <div className="text-xs">choose your plan accordingly</div>
            <div className="hidden md:flex gap-2">
              <div className=" relative rounded-[2px] w-3 h-3 ">
                <Image alt="" src="/Frame 1000006434.svg" fill />
              </div>
              <div className="relative rounded-[2px] w-3 h-3 border-2 ">
                <Image fill alt="" src="/Frame 1000006435.svg" />
              </div>
            </div>
          </div>
          <div className="flex md:w-4/6 w-[80%] md:pl-4  md:overflow-hidden md:overflow-x-auto gap-5 flex-col md:flex-row">
            {items.map((item) => {
              return (
                <Card
                  months={item.months}
                  cost={item.cost}
                  recom={item.recom}
                  key={item.id}
                />
              );
            })}
          </div>
        </div>
        <div className="flex md:w-[80%] justify-center items-center self-center px-3">
          <Banner />
        </div>
      </div>
    </>
  );
};

export default Pricing;
