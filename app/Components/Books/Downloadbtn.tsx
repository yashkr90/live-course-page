"use client";
import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";

const Downloadbtn: NextPage = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: {
          scale: { duration: 0.2 },
        },
      }}
      whileTap={{ scale: 0.9 }}
      initial={{ x: -100 }}
      whileInView={{ x: 0 }}
      viewport={{ once: true }}
      transition={{
        staggerChildren: 0.6,
        duration: 0.5,
      }}
      className="rounded-lg box-border md:w-[90%] w-full flex flex-row items-center justify-center py-3   text-[16px] text-neutral-100 font-poppins border-[1px] border-solid border-neutral-40"
    >
      <div className="flex flex-row items-center justify-center gap-[8px]">
        <div className="relative leading-[150%] font-semibold">
          <span className="">download sample (PDF)</span>
        </div>
        <div className="relative w-6 h-6">
          <Image className="" alt="" src="/Component 285down.svg" fill />
        </div>
      </div>
    </motion.div>
  );
};

export default Downloadbtn;
