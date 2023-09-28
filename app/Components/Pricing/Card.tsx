"use client"
import Image from "next/image";
import React from "react";
import { NextPage } from "next";
import { motion } from "framer-motion";

interface propsitem {
  months:string;
  cost:string;
  recom:Boolean;
}
const Card:NextPage<propsitem> = ({ months, cost, recom }) => {
  return (
    <div className="flex flex-col rounded-2xl gap-3 bg-white p-4">

      {recom?(<div className="relative w-[200px] h-14 -ml-8">
        <Image src="/Tags.png" alt="" fill />
      </div>):''}
      
      <div className="flex justify-between gap-4">
        <div className=" flex aspect-square p-1 md:p-3 flex-col bg-blue-950 text-white justify-center rounded-2xl font-poppins">
          <div className="flex flex-col justify-center items-center">
            <div className=" md:text-3xl font-semibold text-md">{months}</div>
            <div className="md:text-md font-thin text-sm">months</div>

            {/* <div className="relative"> */}
            <div className="flex items-center justify-center rounded-2xl bg-gold w-full -mb-5 z-20">
              <div className="  text-xs text-neutral-100">
                <span>save22%</span>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-wrap md:flex-nowrap">
            <span className="flex">
              <span>₹</span>
            </span>
            <span className="flex md:text-4xl  text-3xl text-royalblue font-poppins font-bold">
              {cost}
            </span>{" "}
            <span className="flex md:text-base text-sm self-center lowercase font-medium  text-black  opacity-[0.6]">
              /month
            </span>
          </div>
          <div className=" flex text-base text-black font-poppins ">
            <span className="text-[10px]">total</span>{" "}
            <span className="font-semibold text-[12px]">₹60,000</span>
          </div>
          <div className="flex text-[10px] [text-decoration:line-through] lowercase font-medium font-poppins text-black opacity-[0.6]">
            ₹90,000
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="relative w-16 h-8 ">
          <Image src="/Group 45627.svg" alt="" fill />
        </div>
        <div className="text-xs self-center font-semibold font-poppins">42.1k students enrolled</div>
      </div>
      <motion.button 
            whileHover={{ scale: 1.1,transition:{
              scale:{duration:0.2}
        } }}
        whileTap={{ scale: 0.9 }}
        initial={{ y: -100 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{
          staggerChildren: 0.6,
          duration: 0.5,
        }}
      className="flex w-full bg-royalblue rounded-md p-3 justify-center gap-3 items-center">
        <div className="text-white self-center">enrol</div>
        <div className=" relative w-4 h-6 ">
          <Image src="Group 45535.svg" alt="" fill />
        </div>
      </motion.button>
    </div>
  );
};

export default Card;
