import Image from 'next/image'
import React from 'react'
import { FaChevronDown, FaChevronLeft } from 'react-icons/fa'
import { IoSunnySharp } from 'react-icons/io5'
import { RiErrorWarningFill } from 'react-icons/ri'

export const Lock = () => {
  return (
    <div className="w-full h-fit flex px-12 flex-col items-center justify-center">
        <div className=" flex gap-[3vw] items-center justify-center w-[90%] my-[4vw] h-[26vw]">
      
            <div
          id="swap-box"
          className="bg-[#1F283B] w-[40%] h-full py-10 px-20 flex flex-col gap-6"
        >
          <div className="flex justify-between w-full text-[#647186]">
            <span>Amount tolock</span>
            <span>Available 0.0VELO</span>
          </div>
          <div className="w-full flex items-center  border border-[#647186] rounded-lg h-full">
            <div className="border-r border-[#647186] h-full  flex items-start py-2 justify-start w-[30%]">
              <div className="w-full h-full flex justify-between px-4 items-center text-[#647186]">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/Images/velo.png"
                    width={25}
                    height={25}
                    alt={"velo"}
                  />
                  <span>VELO</span>
                </div>
                <FaChevronDown size={10} />
              </div>
            </div>
            <input
              type="text"
              value={"0.0"}
              className="bg-transparent px-4 select-none border-none outline-none text-slate-100"
            />
          </div>
          <div className="w-full h-fit flex items-center justify-center">
            <Image
              src="/Images/swap.png"
              width={20}
              height={20}
              alt="swap"
              className="rounded-sm my-4 relative top-4"
            />
          </div>
          <div>
                <p className='text-lg'>Locking for 4 years for 0.0 veVELO voting power</p>
                <div className='relative z-1'>
                <input type="range" className='w-[100%] accent-green-500 my-[1vw]'/>
                </div>
                <div className="w-[95%] text-[0.7rem] mb-5 text-gray-500 flex h-fit justify-between">
                    <span className="">7 days</span>
                    <span className="">1 year</span>
                    <span className="">2 years</span>
                    <span className="">3 years</span>
                    <span className="">4 years</span>
                </div>
          </div>
          <div className='flex mt-10 w-full'>
            <RiErrorWarningFill className=' w-[2vw] m-2 text-yellow-600'/>
                <p className='text-yellow-600'>
                    Locking will give you an NFT, referred to as a
                    veNFT.You can increase the Lock amount or
                    extend the Lock time at any point after
                </p>
            </div>
           </div>
        <div className="bg-[#192435] w-[40%] h-full flex flex-col gap-10 py-12 px-12">
          <div className='text-xl' >New Lock</div>
          <div className="flex flex-col">
            <div className="flex gap-4">
              <div className="bg-[#0F172B] text-white rounded-full py-1 px-1 flex justify-center text-[0.7rem] h-6 w-6">
                1
              </div>
              <div className="text-lg text-slate-500">
                Start by selecting the token to Swap from and the amount you want to
                exchange
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[2vw]">
            <div className="flex gap-4">
              <div className="bg-[#0F172B] text-white rounded-full py-1 px-1 flex justify-center text-[0.7rem] h-6 w-6">
                2
              </div>
              <div className="text-lg text-slate-500">
              Pick the token you want to exchange for
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-4">
              <div className="bg-[#0F172B] text-white rounded-full py-1 px-1 flex justify-center text-[0.7rem] h-6 w-6">
                3
              </div>
              <div className="text-lg text-slate-500">
              The quote will be ready in a moment!
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-4">
              <div className="bg-[#0F172B] text-white rounded-full py-1 px-1 flex justify-center text-[0.7rem] h-6 w-6">
                4
              </div>
              <div className="text-lg text-slate-500">
              Your lock will be Available in the dashboard
              </div>
            </div>
          </div>
        </div>
    </div>
    {/* <div id='footer' className='h-[50%] flex flex-col pt-44 pb-12 px-8  w-[90%]'>
    <div className='flex justify-between items-center w-full'>
        <div className='flex gap-4 w-full'>
            <span className='text-[1rem] text-slate-400'>Articles Support</span>
            <div className='flex gap-3'>
                <Image src="/Images/logos/x.png" width={20} height={20} alt='x'/>
                <Image src="/Images/logos/logo2.png" width={20} height={20} alt='x'/>
                <Image src="/Images/logos/discord.png" width={20} height={20} alt='x'/>
                <Image src="/Images/logos/logo4.png" width={20} height={20} alt='x'/>
                <Image src="/Images/logos/github.png" width={20} height={20} alt='x'/>
            </div>
            
        </div>
        <div>
            <IoSunnySharp />
        </div>
        <div></div>
    </div>
    <div className='flex justify-between w-full items-center py-8'>
        <div className='flex gap-4 text-[1rem] text-slate-400'>
            <span>Documentation</span>
            <span>Security</span>
            <span>BrandKit</span>
            <span>Tokens</span>
        </div>
        <div className='px-2 py-1 flex text-[1rem] text-slate-400 h-fit border border-slate-700 items-center gap-2 rounded-md'>
            <span>Mirrors</span>
            <FaChevronLeft/>
        </div>
    </div>
    <div className='flex justify-between w-full'></div>
    </div> */}
    </div>
  )
}
