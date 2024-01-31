import React from 'react'

const StreetLineChart = () => {
  return (
    <div className="bg-[#F7F9FB] p-6 rounded-2xl mt-7 xl:col-start-6 col-span-7 xl:mt-0">
            <p className=" text-[#18] font-bold text-center">
              Traffic by Website
            </p>

            <div className="flex items-center justify-center gap-[35px] mt-4">
              <p>Google</p>
              <div className=" w-1/2 rounded-3xl h-1 bg-[#E1E3E5]"></div>
            </div>
            <div className="flex items-center justify-center gap-[35px] mt-4">
              <p>Youtube</p>
              <div className=" w-1/2 rounded-3xl h-1 bg-[#E1E3E5]"></div>
            </div>
            <div className="flex items-center justify-center gap-[35px] mt-4">
              <p>Instagram</p>
              <div className=" w-1/2 rounded-3xl h-1 bg-[#1C1C1C]"></div>
            </div>
            <div className="flex items-center justify-center gap-[35px] mt-4">
              <p>printer</p>
              <div className=" w-1/2 rounded-3xl h-1 bg-[#E1E3E5]"></div>
            </div>
            <div className="flex items-center justify-center gap-[35px] mt-4">
              <p>Facebook</p>
              <div className=" w-1/2 rounded-3xl h-1 bg-[#E1E3E5]"></div>
            </div>
            <div className="flex items-center justify-center gap-[35px] mt-4">
              <p>Twitter</p>
              <div className=" w-1/2 rounded-3xl h-1 bg-[#E1E3E5]"></div>
            </div>
            <div className="flex items-center justify-center gap-[35px] mt-4">
              <p>tumblr</p>
              <div className=" w-1/2 rounded-3xl h-1 bg-[#E1E3E5]"></div>
            </div>
          </div>
  )
}

export default StreetLineChart;