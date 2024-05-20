import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaChevronDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoSunnySharp } from "react-icons/io5";
const page = () => {
  return (
    <div className="w-full h-fit flex lg:px-12 flex-col items-center justify-center overflow-hidden">
         <div className="flex flex-col lg:flex-row gap-10 py-20 w-full items-center justify-center h-[40rem] md:h-[35rem] lg:h-[35rem]">
        <div
          id="swap-box"
          className="bg-[#1F283B] w-[95%] lg:w-[60%] h-full py-5 px-5 lg:py-10 lg:px-20 flex flex-col  gap-[1rem] lg:gap-[2rem] rounded-lg bg-gradient-to-t from-[#0F1820] to-[#162C25] h-full"
        >
          <div className="flex justify-between w-[90%] lg:w-[60%] text-slate-200 text-lg">
           <span>Liquidity Providers (LPs)make low-slippageswaps
possible.Depositand Stakeliquidity toearn VELO.</span>
          </div>
          <div>
            <button className='text-white bg-green-500 px-4 py-2 rounded-xl'>Deposit Liquidity</button>
          </div>
          <div className='flex flex-col lg:flex-row gap-[3.5rem] lg:gap-4 items-center justify-center'>
                <div className='relative w-[80%] lg:w-[75%] h-full'>
                    <div className='w-full  py-6 absolute bg-slate-200 opacity-10 h-9 lg:rounded-lg'>
                    
                    </div>
                    <div className='w-full absolute px-2 lg:px-10 py-2 text-md text-white flex items-center justify-center'>
                    TVL~$177,457,167.99
                    </div>

                </div>
                <div className='relative w-[80%] lg:w-[75%] h-full'>
                    <div className='w-full  py-6 absolute bg-slate-200 opacity-10 h-9 lg:rounded-lg'>
                    
                    </div>
                    <div className='w-full absolute px-2 lg:px-10 py-2 text-md text-white flex items-center justify-center'>
                    TVL~$177,457,167.99
                    </div>

                </div>
                <div className='relative w-[80%] lg:w-[75%] h-full'>
                    <div className='w-full  py-6 absolute bg-slate-200 opacity-10 h-9 lg:rounded-lg'>
                    
                    </div>
                    <div className='w-full absolute px-2 lg:px-10 py-2 text-md text-white flex items-center justify-center'>
                    TVL~$177,457,167.99
                    </div>

                </div>
          </div>
          
          <p className='mt-[3rem] lg:mt-[2vw] text-slate-300'><span className='text-slate-400'>There are currently 159 tokens listed</span> View Tokens <span className='text-slate-400'>or</span> List New Token</p>
          
        </div>
          <div className='w-[30%] hidden lg:flex flex-col gap-[4vw] items-start justify-center bg-[#121B2C] h-full'>
            <div className='px-[3vw] py-[4vw] pt-[1.5vw] flex flex-col gap-14 items-start justify-center w-[90%]'>
              <div className='text-2xl text-slate-400 '>How it works</div>
              <div className='text-md text-slate-400'>
              The deeper the liquidity (TVL), the lower the slippage a pool will offer. LPs get AERO emissions, while veAERO lockers get the pool trading fees as an incentive to vote on the most productive pools.
              </div>
              <div className='text-xl text-slate-400'>Read more</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default page