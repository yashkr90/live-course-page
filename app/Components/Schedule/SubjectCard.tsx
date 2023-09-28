import React from "react";
import { NextPage } from "next";

interface itemprops{
  subject:string;
  chapter:string;
  chapname:string;
  time:string;
}

const SubjectCard:NextPage<itemprops> = ({subject,chapter, chapname, time}) => {

    let back="bg-red-500"
    switch (subject) {
        case "Biology":back="bg-darkseagreen"
            
            break;
        case "Chemistry":back="bg-indianred"
            break;
        case "Physics":back="bg-crimson"
        default:
            break;
    }
  return (
    <div className="flex gap-4 items-center rounded-xl bg-white  w-full pt-3 pb-3 pr-3 w-249 font-poppins">
      <div className= {`rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none ${back} w-[6px] h-12`} />
      <div className=" w-full flex flex-col justify-between gap-3">

        <div className=" w-full flex justify-between items-center ">
          <div className="text-lg font-semibold">{subject}</div>
          <div className=" pr-5 text-sm lowercase font-medium text-neutral-70">
            {time}
          </div>
        </div>

        <div className="  flex flex-row items-start justify-start gap-3 text-sm text-neutral-60">
          <div className="text-sm">{chapter}</div>
          <div className="  lowercase font-medium text-neutral-100">
           {chapname}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SubjectCard;
