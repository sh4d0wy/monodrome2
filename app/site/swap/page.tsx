"use client"
import React,{useState} from 'react'
import Image from 'next/image';
import { FaChevronDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { IoSunnySharp } from "react-icons/io5";
import { DiVim } from 'react-icons/di';
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
const page = () => {
  const [openTokens,setOpenTokens]= useState(false);
  const tokens=[{
    image:'https://assets.smold.app/api/token/8453/0x96e890c6b2501a69cad5dba402bfb871a2a2874c/logo.svg',
    name:'VELO',
    wallet:'0x308...254ca'
  },{
    image:'https://assets.smold.app/api/token/8453/0x96e890c6b2501a69cad5dba402bfb871a2a2874c/logo.svg',
    name:'AAG',
    wallet:'0x308...254ca'
  },{
    image:'https://assets.smold.app/api/token/8453/0x96e890c6b2501a69cad5dba402bfb871a2a2874c/logo.svg',
    name:'OP',
    wallet:'0x308...254ca'
  },{
    image:'https://assets.smold.app/api/token/8453/0x96e890c6b2501a69cad5dba402bfb871a2a2874c/logo.svg',
    name:'AERO',
    wallet:'0x308...254ca'
  },{
    image:'https://assets.smold.app/api/token/8453/0x96e890c6b2501a69cad5dba402bfb871a2a2874c/logo.svg',
    name:'mfer',
    wallet:'0x308...254ca'
  },{
    image:'https://assets.smold.app/api/token/8453/0x96e890c6b2501a69cad5dba402bfb871a2a2874c/logo.svg',
    name:'ATH',
    wallet:'0x308...254ca'
  },{
    image:'https://assets.smold.app/api/token/8453/0x96e890c6b2501a69cad5dba402bfb871a2a2874c/logo.svg',
    name:'ANIME',
    wallet:'0x308...254ca'
  },{
    image:'https://assets.smold.app/api/token/8453/0x96e890c6b2501a69cad5dba402bfb871a2a2874c/logo.svg',
    name:'AYB',
    wallet:'0x308...254ca'
  },{
    image:'https://assets.smold.app/api/token/8453/0x96e890c6b2501a69cad5dba402bfb871a2a2874c/logo.svg',
    name:'BASED',
    wallet:'0x308...254ca'
  },{
    image:'https://assets.smold.app/api/token/8453/0x96e890c6b2501a69cad5dba402bfb871a2a2874c/logo.svg',
    name:'BUIDL',
    wallet:'0x308...254ca'
  },{
    image:'https://assets.smold.app/api/token/8453/0x96e890c6b2501a69cad5dba402bfb871a2a2874c/logo.svg',
    name:'CHAD',
    wallet:'0x308...254ca'
  }]
  const [selectedToken,setSelectedToken]= useState('VELO');
  return (
    <div className="w-full h-fit flex px-4 lg:px-12 flex-col items-center justify-center overflow-x-hidden">
      {openTokens&& 
          <div className='w-[100vw] h-[100vh] flex items-center justify-center absolute z-20'>
            <div className='flex items-start justify-center bg-[#1F233C] w-[45%] h-[35rem] rounded-lg overflow-y-scroll'>
            <div className='flex flex-col w-[90%] gap-[2rem] p-[1vw]'>
              <div className='absolute z-20 top-20 bg-slate-500 rounded-xl p-2 self-end' onClick={()=>{setOpenTokens(false)}}><RxCross2 /></div>
              <div className='flex border border-slate-700 rounded-md p-2'>
                <IoSearch className='text-slate-400 mr-2' size={25}/>
                <input type="text" placeholder='WETH, USDC,0x....' className='bg-transparent outline-none'/>
              </div>
              <div className=''>
              <div className='flex flex-col gap-[2rem]'>
                {tokens.map((token)=>{
                  return(
                    <div className='flex gap-[1rem] hover:bg-slate-400 p-4 rounded-md' onClick={()=>{setSelectedToken(`${token.name}`)}}>
                      <Image src={token.image}
                      alt="token"
                      width={50}
                      height={50} />
                      <div className='flex flex-col gap-[0.2rem]'>
                          <div className='text-md text-white'>{token.name}</div>
                          <div className='text-sm text-slate-400'>{token.wallet}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
              </div>
            </div>
          </div>
          </div>
        }
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 py-20 w-full lg:w-[90%] items-center justify-center h-[50rem] lg:h-[30rem] relative z-10">       
        <div
          id="swap-box"
          className="bg-[#252d37] w-full lg:w-[50%] h-full py-10 px-4 lg:px-10 flex flex-col gap-4 h-full rounded-xl"
        >
          <div className="flex justify-between w-full text-[#647186]">
            <span>Swap</span>
            <span>Available 0.0 {selectedToken}</span>
          </div>
          <div className="w-full flex items-center  border border-[#647186] rounded-lg h-[95%]">
            <div className="border-r border-[#647186] h-full  flex items-start py-2 justify-start w-[50%] lg:w-[30%]">
              <div className="w-full h-full flex justify-between px-4 items-center text-[#647186] gap-8 lg:gap-0">
                <div className="flex gap-2 items-center" onClick={()=>{setOpenTokens(true)} }>
                  <Image
                    src="/Images/velo.png"
                    width={25}
                    height={25}
                    alt={"velo"}
                  />
                  <span>{selectedToken}</span>
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
          <div className="w-full flex items-center  border border-[#647186] rounded-lg h-[95%]">
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
        <div className="bg-[#252d37] w-full lg:w-[40%] h-full flex flex-col gap-10 py-4 px-4 lg:py-7 lg:px-12 rounded-xl">
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