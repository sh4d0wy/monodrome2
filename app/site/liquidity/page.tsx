import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaChevronDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoSunnySharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { GoQuestion } from 'react-icons/go'
const page = () => {
  const poolArr = ["Active","Stable","Volatile","Concentrated","Incentivized","Low TVL","Participating","All Pools"];
  const arr = ["All Pool","Stable","Volatile","Concentrated","Incentivized","Low TVL","Participating"];
  const liquidity_pools=[{
    pool:'vAMM-WETH/USDC',
    percent:'0.3%',
    APR:'16.51%',
    TVL:'~$99,062,569',
    Volume:'~$9,673,410.44',
    Volume_weth:'1,475.73',
    Volume_usdc:'5,062,654.72',
    Fees:'~$29,020.23',
    fees_weth:'4.43',
    fees_usdc:'15,247.96',
    balance_weth:'15,939.47',
    balance_usdc:'49,482,203.64'
  },{
    pool:'vAMM-WETH/USDC',
    percent:'0.3%',
    APR:'16.51%',
    TVL:'~$99,062,569',
    Volume:'~$9,673,410.44',
    Volume_weth:'1,475.73',
    Volume_usdc:'5,062,654.72',
    Fees:'~$29,020.23',
    fees_weth:'4.43',
    fees_usdc:'15,247.96',
    balance_weth:'15,939.47',
    balance_usdc:'49,482,203.64'
  },{
    pool:'vAMM-WETH/USDC',
    percent:'0.3%',
    APR:'16.51%',
    TVL:'~$99,062,569',
    Volume:'~$9,673,410.44',
    Volume_weth:'1,475.73',
    Volume_usdc:'5,062,654.72',
    Fees:'~$29,020.23',
    fees_weth:'4.43',
    fees_usdc:'15,247.96',
    balance_weth:'15,939.47',
    balance_usdc:'49,482,203.64'
  },{
    pool:'vAMM-WETH/USDC',
    percent:'0.3%',
    APR:'16.51%',
    TVL:'~$99,062,569',
    Volume:'~$9,673,410.44',
    Volume_weth:'1,475.73',
    Volume_usdc:'5,062,654.72',
    Fees:'~$29,020.23',
    fees_weth:'4.43',
    fees_usdc:'15,247.96',
    balance_weth:'15,939.47',
    balance_usdc:'49,482,203.64'
  },{
    pool:'vAMM-WETH/USDC',
    percent:'0.3%',
    APR:'16.51%',
    TVL:'~$99,062,569',
    Volume:'~$9,673,410.44',
    Volume_weth:'1,475.73',
    Volume_usdc:'5,062,654.72',
    Fees:'~$29,020.23',
    fees_weth:'4.43',
    fees_usdc:'15,247.96',
    balance_weth:'15,939.47',
    balance_usdc:'49,482,203.64'
  },{
    pool:'vAMM-WETH/USDC',
    percent:'0.3%',
    APR:'16.51%',
    TVL:'~$99,062,569',
    Volume:'~$9,673,410.44',
    Volume_weth:'1,475.73',
    Volume_usdc:'5,062,654.72',
    Fees:'~$29,020.23',
    fees_weth:'4.43',
    fees_usdc:'15,247.96',
    balance_weth:'15,939.47',
    balance_usdc:'49,482,203.64'
  },{
    pool:'vAMM-WETH/USDC',
    percent:'0.3%',
    APR:'16.51%',
    TVL:'~$99,062,569',
    Volume:'~$9,673,410.44',
    Volume_weth:'1,475.73',
    Volume_usdc:'5,062,654.72',
    Fees:'~$29,020.23',
    fees_weth:'4.43',
    fees_usdc:'15,247.96',
    balance_weth:'15,939.47',
    balance_usdc:'49,482,203.64'
  },{
    pool:'vAMM-WETH/USDC',
    percent:'0.3%',
    APR:'16.51%',
    TVL:'~$99,062,569',
    Volume:'~$9,673,410.44',
    Volume_weth:'1,475.73',
    Volume_usdc:'5,062,654.72',
    Fees:'~$29,020.23',
    fees_weth:'4.43',
    fees_usdc:'15,247.96',
    balance_weth:'15,939.47',
    balance_usdc:'49,482,203.64'
  },{
    pool:'vAMM-WETH/USDC',
    percent:'0.3%',
    APR:'16.51%',
    TVL:'~$99,062,569',
    Volume:'~$9,673,410.44',
    Volume_weth:'1,475.73',
    Volume_usdc:'5,062,654.72',
    Fees:'~$29,020.23',
    fees_weth:'4.43',
    fees_usdc:'15,247.96',
    balance_weth:'15,939.47',
    balance_usdc:'49,482,203.64'
  },{
    pool:'vAMM-WETH/USDC',
    percent:'0.3%',
    APR:'16.51%',
    TVL:'~$99,062,569',
    Volume:'~$9,673,410.44',
    Volume_weth:'1,475.73',
    Volume_usdc:'5,062,654.72',
    Fees:'~$29,020.23',
    fees_weth:'4.43',
    fees_usdc:'15,247.96',
    balance_weth:'15,939.47',
    balance_usdc:'49,482,203.64'
  }];
  return (
    <div className="w-full h-fit flex lg:px-12 flex-col items-center justify-center overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-10 mb-20 md:m-5 md:mb-10 w-full items-center justify-center h-[20rem] md:h-[20rem] lg:h-[16rem]">
        <div
          id="swap-box"
          className="bg-[#1F283B] w-[95%] lg:w-[60%] h-full py-5 px-5 lg:py-10 lg:px-20 flex flex-col  gap-[1rem] lg:gap-[2rem] rounded-lg bg-gradient-to-r from-[#770250] to-[#230249] border border-[#5F0755] h-full"
        >
          <div className='flex justify-between md:flex-col lg:flex-row md:gap-2'>
            <div className="flex justify-between w-[90%] lg:w-[60%] text-slate-200  text-xs">
              <span>
                Liquidity Providers (LPs)make low-slip page swaps
                possible. Deposit and Stake liquidity to earn VELO.
              </span>
            </div>
            <div>
              <button className="text-white bg-transparent border border-neutral-400 px-4 py-2 rounded-md hover:bg-[#5F024E]">
                Deposit Liquidity
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-[3.5rem] lg:gap-4 items-center justify-center">
            <div className="relative w-[80%] lg:w-[75%] h-full">
              <div className="w-full  py-6 absolute bg-neutral-200 opacity-10 h-9 lg:rounded-lg"></div>
              <div className="w-full absolute px-2 lg:px-10 py-2 text-md text-white flex items-center justify-center">
                TVL~$177,457,167.99
              </div>
            </div>
            <div className="relative w-[80%] lg:w-[75%] h-full">
              <div className="w-full  py-6 absolute bg-slate-200 opacity-10 h-9 lg:rounded-lg"></div>
              <div className="w-full absolute px-2 lg:px-10 py-2 text-md text-white flex items-center justify-center">
                TVL~$177,457,167.99
              </div>
            </div>
            <div className="relative w-[80%] lg:w-[75%] h-full">
              <div className="w-full  py-6 absolute bg-slate-200 opacity-10 h-9 lg:rounded-lg"></div>
              <div className="w-full absolute px-2 lg:px-10 py-2 text-md text-white flex items-center justify-center">
                TVL~$177,457,167.99
              </div>
            </div>
          </div>
          <p className="mt-[3rem] lg:mt-[4vw] text-slate-300 text-xs">
            <span className="text-slate-400">
              There are currently 159 tokens listed
            </span>{" "}
            View Tokens <span className="text-slate-400">or</span> List New
            Token
          </p>
        </div>
        <div className="w-[30%] hidden lg:flex flex-col gap-[4vw] items-center justify-center bg-[#252d37] h-full rounded-md border border-slate-700">
          <div className="px-[1vw] py-[4vw] pr-[5vw] flex flex-col gap-7 items-start justify-center w-[90%]">
            <div className="text-md font-bold text-slate-400 ">How it works</div>
            <div className="text-sm text-slate-400 font-light">
              The deeper the liquidity (TVL), the lower the slippage a pool will
              offer. LPs get AERO emissions, while veAERO lockers get the pool
              trading fees as an incentive to vote on the most productive pools.
            </div>
            <div className="text-md text-slate-400 underline-offset-0">Read more</div>
          </div>
        </div>
        
      </div>
      <div className='px-4 lg:px-12 flex flex-col  w-full h-full'>
          <div className='flex flex-col lg:flex-col-reverse gap-3 justify-between'>
            <div className=' flex  md:w-[50%] md:overflow-scroll lg:w-[60%] lg:overflow-hidden'>
                {arr.map((option,index)=>{
                  return(
                    <div key={index} className={` w-full px-4 py-2 border-slate-700 border text-sm ${(index==0) &&"rounded-l-md"} ${index==6 && "rounded-r-md"}`}>
                      {option}
                    </div>
                  )
                })}
            </div>
            <div className='flex gap-2 border border-1 border-slate-700 p-2 pl-2 rounded-md lg:w-[40%]'>
              <IoSearch className=' text-slate-400' size={25}/>
              <input type="text" placeholder='Search symbols or address....' className='bg-transparent outline-none'/>
            </div>
          </div>
          <div className='w-full flex h-full my-2 mt-4 text-[0.8rem] text-neutral-400 bg-[#252d37] py-1 rounded-lg px-4'>
              <div className='w-[45%] md:w-[25%]'>LIQUIDITY POOL</div>
              <div className='w-[55%] md:w-[75%] flex justify-between '>
                <div className=' underline-offset-4 hover:no-underline underline decoration-dotted'>APR</div>
                <div className=' underline-offset-4 hover:no-underline underline decoration-dotted'>VOLUME</div>
                <div className=' underline-offset-4 hover:no-underline underline decoration-dotted'>FEES</div>
                <div className=' underline-offset-4 hover:no-underline underline decoration-dotted self-end'>POOR BALANCE</div>
              </div>
          </div>
          <div className='flex flex-col gap-1'>
              {liquidity_pools.map((pool,index)=>{
                return(
                  <div className='flex flex-col lg:flex-row bg-[#252D37] py-4 pb-3 px-4 rounded hover:border-slate-700 hover:border hover:border-slate-600 gap-1 md:gap-4 lg:gap-0'>
                    <div className='w-[45%] md:w-[85%] flex flex-col gap-2 '>
                      <div>
                        <div className='font-bold'>{pool.pool}</div>
                        <div className='text-yellow-600 text-sm'>Basic Volatile . <span className='text-neutral-400'>{pool.percent}</span> . </div>
                      </div>
                      <div className='text-sm text-slate-500'>TVL <span className='text-neutral-400'>~$89,744,780</span></div>
                    </div>
                    <div className='w-[55%] md:w-[90%] flex flex-col md:flex-row md:justify-between lg:flex-row lg:justify-between gap-[8vw] lg:gap-0'>
                      <div className='text-slate-400 text-sm'>{pool.APR}</div>
                      <div className='flex flex-col items-start lg:items-end gap-[0.5rem]'>
                        <span className='lg:hidden text-sm'>Volume</span>
                        <div className='text-slate-400 text-sm'>{pool.Volume}</div>
                        <div className='flex flex-col gap-[0.2rem] items-start lg:items-end'>
                          <div className=' text-xs text-slate-600'><span className='text-slate-500'>{pool.Volume_weth}</span> WETH</div>
                          <div className=' text-xs text-slate-600'><span className='text-slate-500'>{pool.Volume_usdc}</span> USDC</div>
                        </div>
                      </div>
                      <div className='flex flex-col items-start lg:items-end gap-[0.5rem] '>
                        <span className='lg:hidden text-sm'>Fees</span>
                        <div className='text-slate-400 text-sm'>{pool.Fees}</div>
                        <div className='flex flex-col gap-[0.2rem] items-start lg:items-end'>
                          <div className=' text-xs text-slate-600'><span className='text-slate-500'>{pool.fees_weth}</span> WETH</div>
                          <div className=' text-xs text-slate-600'><span className='text-slate-500'>{pool.fees_usdc}</span> USDC</div>
                        </div>
                      </div>
                      <div className='flex flex-col items-start lg:items-end gap-3'>
                        <div className='flex flex-col items-start lg:items-end'>
                          <span className='lg:hidden text-sm'>Pool Balance</span>
                          <div className=' text-slate-600 text-sm'><span className='text-slate-500 text-sm'>{pool.balance_weth}</span> WETH</div>
                          <div className=' text-slate-600 text-sm'><span className='text-slate-500 text-sm'>{pool.balance_usdc}</span> USDC</div>
                        </div>
                        <div><button className='text-neutal-200 border border-1 border-slate-600 text-xs p-2 rounded'>Desposit</button></div>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
      </div>
    </div>
  );
}

export default page;