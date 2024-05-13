import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaChevronDown } from 'react-icons/fa'
const page = () => {
  return (
    <div className="w-full h-fit flex px-12 flex-col items-center justify-center">
         <div className="flex gap-10 py-20 h-[50%] w-[90%] items-center justify-center">
        <div
          id="swap-box"
          className="bg-[#1F283B] w-[60%] h-full py-10 px-20 flex flex-col gap-4"
        >
          <div className="flex justify-between w-full text-slate-200">
           <span>Liquidity Providers (LPs)make low-slippageswaps
possible.Depositand Stakeliquidity toearn VELO.</span>
          </div>
          <div>
            <button className='text-white bg-green-500 px-4 py-2 rounded-xl'>Deposit Liquidity</button>
          </div>
          <div className='flex gap-2'>
                <div className='relative w-full h-full'>
                    <div className='w-full  py-3 px-6 absolute bg-black opacity-25 h-9 rounded-lg'>
                    
                    </div>
                    <div className='w-full absolute px-4 py-2 text-sm text-slate-300'>
                    TVL~$177,457,167.99
                    </div>

                </div>
                <div className='relative w-full h-full'>
                    <div className='w-full  py-3 px-6 absolute bg-black opacity-25 h-9 rounded-lg'>
                    
                    </div>
                    <div className='w-full absolute px-4 py-2 text-sm text-slate-300'>
                    TVL~$177,457,167.99
                    </div>

                </div>
                <div className='relative w-full h-full'>
                    <div className='w-full  py-3 px-6 absolute bg-black opacity-25 h-9 rounded-lg'>
                    
                    </div>
                    <div className='w-full absolute px-4 py-2 text-sm text-slate-300'>
                    TVL~$177,457,167.99
                    </div>

                </div>
          </div>
          
          
          
        </div>
        <div className="bg-[#192435] w-[40%] h-full flex flex-col gap-10 py-12 px-12">
          <div>Swap</div>
          <div className="flex flex-col">
            <div className="flex gap-4">
              <div className="bg-[#0F172B] text-white rounded-full py-1 px-1 flex justify-center text-[0.7rem] h-6 w-6">
                1
              </div>
              <div className="text-[0.8rem] text-slate-500">
                Start by selecting the token to Swap from and the amount you want to
                exchange
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-4">
              <div className="bg-[#0F172B] text-white rounded-full py-1 px-1 flex justify-center text-[0.7rem] h-6 w-6">
                2
              </div>
              <div className="text-[0.8rem] text-slate-500">
              Pick the token you want to exchange for
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-4">
              <div className="bg-[#0F172B] text-white rounded-full py-1 px-1 flex justify-center text-[0.7rem] h-6 w-6">
                3
              </div>
              <div className="text-[0.8rem] text-slate-500">
              The quote will be ready in a moment!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page