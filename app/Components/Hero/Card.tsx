import React from 'react'

const Card = () => {
  return (
    <div className=" flex items-center p-3  justify-between rounded-xl w-full md:border-yellow-400 bg-aliceblue md:bg-royalblue border-solid md:border-4">
    <div className="flex flex-col gap-2">
      <div className="md:text-sm text-xs  text-neutral-100 md:text-gold font-semibold">
        Starting at
      </div>
      <div>
        <span className="text-3xl md:text-5xl font-poppins md:text-gold font-bold">
          ₹1,660
        </span>{" "}
        <span className="text-xs md:text-xl text-neutral-100 md:text-gold font-semibold">
          /month
        </span>
      </div>
      <div>
        <span className="md:text-lg text-xs [text-decoration:line-through] md:font-medium font-semibold font-poppins md:text-crimson text-neutral-100">
          ₹ 2,550
        </span>
        <span className="text-neutral-100 font-poppins text-xs md:text-sm md:text-whitesmoke">
          * offer valid until 21st June
        </span>
      </div>
    </div>
    <div className=" flex aspect-square p-1 md:p-4 flex-col bg-blue-950 text-white rounded-2xl justify-center items-center font-poppins">
      <div className="text-2xl md:text-3xl font-semibold">40%</div>
      <div className="text-lg md:text-xl font-normal">OFF</div>
    </div>
  </div>
  )
}

export default Card