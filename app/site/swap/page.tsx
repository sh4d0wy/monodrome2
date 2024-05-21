import React from 'react'
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';


const page = () => {
  return (
    <div className="w-full h-fit flex px-4 lg:px-12 flex-col items-center justify-center overflow-x-hidden">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 py-20 w-full lg:w-[90%] items-center justify-center h-[50rem] lg:h-[34rem]">
        <div
          id="swap-box"
          className="bg-[#252d37] w-full lg:w-[50%] h-full py-10 px-4 lg:px-10 flex flex-col gap-4 h-full rounded-xl"
        >
          <div className="flex justify-between w-full text-[#647186]">
            <span>Swap</span>
            <span>Available 0.0 VELO</span>
          </div>
          <div className="w-full flex items-center  border border-[#647186] rounded-lg h-full">
            <div className="border-r border-[#647186] h-full  flex items-start py-2 justify-start w-[50%] lg:w-[30%]">
              <div className="w-full h-full flex justify-between px-4 items-center text-[#647186] gap-8 lg:gap-0">
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

          <div className='flex items-center justify-center w-full gap-2'>
              <hr className='w-[50%] border  border-[#121B2C] border-1'/>
              <div className=" h-fit">
                <Image
                  src="/Images/swap.png"
                  width={25}
                  height={25}
                  alt="swap"
                  className="rounded-sm my-4 relative"
                />
              </div>
              <hr  className='w-[50%] border  border-[#121B2C]'/>
          </div>

          <div className="flex justify-between w-full text-[#647186]">
            <span>For</span>
            <span>Available 0.0 OP</span>
          </div>
          <div className="w-full flex items-center  border border-[#647186] rounded-lg h-full">
            <div className="border-r border-[#647186] h-full  flex items-start py-2 justify-start w-[30%]">
              <div className="w-full h-full flex justify-between px-4 items-center text-[#647186] gap-20 lg:gap-0">
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
        <div className="bg-[#252d37] w-full lg:w-[40%] h-full flex flex-col gap-10 py-4 px-4 lg:py-12 lg:px-12 rounded-xl">
          <div className='text-2xl' >Swap</div>
          <div className="flex flex-col">
            <div className="flex gap-4">
              <div className="bg-[#0F172B] text-white rounded-full py-1 px-1 flex justify-center text-[0.7rem] h-6 w-6">
                1
              </div>
              <div className="text-md text-slate-500">
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
              <div className="text-md text-slate-500">
              Pick the token you want to exchange for
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-4">
              <div className="bg-[#0F172B] text-white rounded-full py-1 px-1 flex justify-center text-[0.7rem] h-6 w-6">
                3
              </div>
              <div className="text-md text-slate-500">
              The quote will be ready in a moment!
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default page