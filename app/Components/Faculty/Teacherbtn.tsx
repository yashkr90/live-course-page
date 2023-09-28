"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { NextPage } from "next";

const Teacherbtn: NextPage = () => {
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
      className="rounded-lg shadow-[0px_7px_7px_rgba(0,_123,_255,_0.12)] box-border  overflow-hidden flex flex-row items-center justify-center p-3 border-1 border-solid border-neutral-40"
    >
      <div className="flex flex-row items-center justify-center gap-[8px] outline-none p-0">
        <div className="  font-semibold shrink-0">meet the teachers</div>
        <div className=" relative w-6 h-6 ">
          <Image className="" alt="" src="/Group45535(1).svg" fill />
        </div>
      </div>
    </motion.div>
  );
};

export default Teacherbtn;
