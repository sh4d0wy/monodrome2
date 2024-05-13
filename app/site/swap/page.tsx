import React from 'react'
import Image from 'next/image';
import { FaChevronDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { IoSunnySharp } from "react-icons/io5";

const page = () => {
  return (
    <div className="w-full h-fit flex px-12 flex-col items-center justify-center">
      <div className="flex gap-10 py-20 h-[50%] w-[90%] items-center justify-center">
        <div
          id="swap-box"
          className="bg-[#1F283B] w-[60%] h-full py-10 px-20 flex flex-col gap-4"
        >
          <div className="flex justify-between w-full text-[#647186]">
            <span>Swap</span>
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
          <div className="flex justify-between w-full text-[#647186]">
            <span>For</span>
            <span>Available 0.0OP</span>
          </div>
          <div className="w-full flex items-center  border border-[#647186] rounded-lg h-full">
            <div className="border-r border-[#647186] h-full  flex items-start py-2 justify-start w-[30%]">
              <div className="w-full h-full flex justify-between px-4 items-center text-[#647186]">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/Images/op.png"
                    width={25}
                    height={25}
                    alt={"velo"}
                  />
                  <span>OP</span>
                </div>
                <FaChevronDown size={10} />
              </div>
            </div>
            <input
              type="text"
              value={"0.0"}
              className="bg-transparent select-none px-4 border-none outline-none text-slate-100"
            />
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
      <div id='footer' className='h-[50%] flex flex-col pt-44 pb-12 px-8  w-[90%]'>
        <div className='flex justify-between items-center w-full'>
            <div className='flex gap-4 w-full'>
                <span className='text-[0.8rem] text-slate-400'>Articles Support</span>
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
            <div className='flex gap-4 text-[0.8rem] text-slate-400'>
                <span>Documentation</span>
                <span>Security</span>
                <span>BrandKit</span>
                <span>Tokens</span>
            </div>
            <div className='px-2 py-1 flex text-[0.6rem] text-slate-400 h-fit border border-slate-700 items-center gap-2 rounded-md'>
                <span>Mirrors</span>
                <FaChevronLeft/>
            </div>
        </div>
        <div className='flex justify-between w-full'></div>
      </div>
    </div>
  );
}

export default page