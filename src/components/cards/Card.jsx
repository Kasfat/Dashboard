import React from 'react'
import arrowdown from "../../assets/images/ArrowLineDown.svg";
import arrowrise from "../../assets/images/ArrowRise.svg"

const Card = () => {
  return (
    <>
        <div className=' p-7'>
            <div className=' flex gap-2 items-center pl-2 mb-5'>
                <p className=' text-[18px] font-semibold'>Today</p>
                <div>
                    <img className='text-center cursor-pointer' src={arrowdown}/>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-6'>
              <div className=' min-w-50 bg-[#E3F5FF] p-6 rounded-3xl'>
                <div>
                  <h3 className=' font-semibold text-xl mb-2'>Views</h3>
                  <div className=' flex justify-between mt-2'>
                    <h1 className=' font-bold text-2xl'>721K</h1>
                    <div className='flex items-center'>
                      <span className=' mr-1'>+11.01%</span>
                      <img src={arrowrise}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className=' min-w-50 bg-[#E5ECF6] p-6 rounded-3xl'>
                <div>
                  <h3 className=' font-semibold text-xl mb-2'>Visits</h3>
                  <div className=' flex justify-between mt-2'>
                    <h1 className=' font-bold text-2xl'>367K</h1>
                    <div className='flex items-center'>
                      <span className=' mr-1'>-0.03%</span>
                      <img src={arrowrise}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className=' min-w-50 bg-[#E3F5FF] p-6 rounded-3xl'>
                <div>
                  <h3 className=' font-semibold text-xl mb-2'>New Users</h3>
                  <div className=' flex justify-between mt-2'>
                    <h1 className=' font-bold text-2xl'>1156</h1>
                    <div className='flex items-center'>
                      <span className=' mr-1'>+15.03%</span>
                      <img src={arrowrise}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className=' min-w-50 bg-[#E5ECF6] p-6 rounded-3xl'>
                <div>
                  <h3 className=' font-semibold text-xl mb-2'>Active Users</h3>
                  <div className=' flex justify-between mt-2'>
                    <h1 className=' font-bold text-2xl'>239K</h1>
                    <div className='flex items-center'>
                      <span className=' mr-1'>+06.08%</span>
                      <img src={arrowrise}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Card