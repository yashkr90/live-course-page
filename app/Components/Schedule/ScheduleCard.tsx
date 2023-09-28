import React from 'react'
import type { NextPage } from "next";
import SubjectCard from './SubjectCard'

interface ScheduleCardProps {
    day: string; 
    date: string;
    subject:Array<string>;
  }

const ScheduleCard:NextPage<ScheduleCardProps> = ({day, date, subject}) => {
  return (
    <div className="flex flex-row items-center md:justify-start justify-between">
    <div className="w-32 flex flex-col items-start justify-center self-start">
      <div className="text-lg font-poppins font-semibold">{day}</div>
      <div className="relative text-base leading-[27px] text-neutral-60">
       {date}
      </div>
    </div>
    <div className="flex md:flex-row flex-col items-start justify-start gap-10 text-xl">
      <SubjectCard subject={subject[0]} chapname={'morphology - flowering plants'} chapter={"Chapter 1"} time={'10:45 am - 12:15 pm'} />
      <SubjectCard subject={subject[1]} chapname={'morphology - flowering plants'} chapter={"Chapter 1"} time={'10:45 am - 12:15 pm'} />
      
    </div>
  </div>
  )
}

export default ScheduleCard