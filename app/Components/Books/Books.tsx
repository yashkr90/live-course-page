import type { NextPage } from "next";
import Image from "next/image";

const features = [
  "based on latest NEET pattern",
  "concise theory+ practice questions",
  "topic-wise detailed mcqs for revision",
];

const Books: NextPage = () => {
  return (
    <div className="flex w-full md:h-[724px] font-poppins flex-col md:flex-row ">
      <div className="flex flex-col w-full md:w-1/2 bg-[#d4e9ff] justify-center items-center gap-5">
        <div className=" relative w-60 h-[400px] ">
          <Image style={{objectFit:"contain"}} alt="" src="/image 9book.png" fill />
        </div>
        <div className="md:flex hidden gap-2">
          <div className=" relative rounded-lg w-8 h-8 shrink-0 opacity-[0.5]">
            <Image className=" " alt="" src="/Frame 1000006570.svg" fill/>
          </div>
          <div className=" relative rounded-lg w-8 h-8 overflow-hidden shrink-0">
            <Image className=" " alt="" src="/Frame 1000006571.svg" fill/>
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-1/2 justify-center items-center bg-[#fffbef]">
        <div className="flex flex-col gap-14 items-center ">
          <div className="md:block hidden text-[48px] leading-[60px] font-poppins font-bold ">
            <span className="text-royalblue">IL books</span>
            <span className="text-gray">for NEET</span>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div>
              <span className="leading-[48px] font-semibold text-[32px] ">
                Botany Class 11
              </span>
              <span className="ext-[20px] leading-[30px] text-neutral-60 inline-block  shrink-0">
                (12 Books)
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {features.map((item) => {
                return (
                  <div key={item} className="flex  items-center justify-start gap-[12px] text-[18px] text-neutral-70 font-poppins">
                    <div className="relative w-6 h-6">
                      <Image src="/checklist 1.svg" alt="" fill/>
                    </div>
                    <div className=" font-medium">{item}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-lg box-border md:w-[90%] w-full flex flex-row items-center justify-center py-3   text-[16px] text-neutral-100 font-poppins border-[1px] border-solid border-neutral-40">
            <div className="flex flex-row items-center justify-center gap-[8px]">
              <div className="relative leading-[150%] font-semibold">
                <span className="">download sample (PDF)</span>
              </div >
              <div className="relative w-6 h-6">
              <Image
                className=""
                alt=""
                src="/Component 285down.svg"
                fill
              />
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Books;
