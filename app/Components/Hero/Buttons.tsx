"use client"

import React from 'react'
import { NextPage } from 'next'
import { motion } from "framer-motion";
import Image from "next/image";

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

const Buttons:NextPage = () => {
  return (
    <div className=" flex md:flex-row w-full flex-col items-start justify-start gap-[20px]">
    {buttons.map((but, idx) => {
      return (
        <motion.button
        whileHover={{ scale: 1.1,transition:{
            scale:{duration:0.2}
      } }}
      whileTap={{ scale: 0.9 }}
      initial={{ x: -100 }}
      whileInView={{ x: 0 }}
      viewport={{ once: true }}
      transition={{
        staggerChildren: 0.6,
        duration: 0.5,
      }}
          key={but.text}
          className={`flex-1 w-full rounded-2xl ${
            but.bg
          } shadow-[0px_7px_7px_rgba(0,_123,_255,_0.12)] overflow-hidden flex flex-row items-center justify-center py-3 ${
            idx == 1
              ? " text-gold border-2 border-solid border-gold"
              : ""
          }`}
        >
          <div className="flex flex-row items-center justify-center ">
            <div
              className={` ${but.textcol} font-semibold ${
                idx == 1 ? "text-gold" : ""
              }`}
            >
              {but.text}
            </div>
            <div className=" relative  w-6 h-5">
              <Image alt="" src={but.imgsrcs} fill />
            </div>
          </div>
        </motion.button>
      );
    })}

 
  </div>
  )
}

export default Buttons