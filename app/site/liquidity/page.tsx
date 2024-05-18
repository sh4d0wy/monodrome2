import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaChevronDown } from 'react-icons/fa'
import { GoQuestion } from 'react-icons/go'
const page = () => {
  const poolArr = ["Active","Stable","Volatile","Concentrated","Incentivized","Low TVL","Participating","All Pools"];
  return (
    <div className="w-full h-fit flex px-12 flex-col items-center justify-center">
      <div className="flex gap-10 py-20 h-[50%] w-[90%] items-center justify-center">
        <div
          id="swap-box"
          className="bg-gradient-to-tr from-[#0F1821] to-[#152B23] w-[60%] h-full py-10 px-20 flex flex-col gap-6"
        >
          <div className="flex justify-between w-full text-slate-200 text-sm">
            <span>
              Liquidity Providers(LPs) make low-slippage swaps possible. Deposit
              and Stake liquidity to earn VELO.
            </span>
          </div>
          <div>
            <button className="text-white bg-green-500 px-4 py-2 text-sm rounded-xl">
              Deposit Liquidity
            </button>
          </div>
          <div className="flex gap-2">
            <div className="relative w-full h-full">
              <div className="w-full  py-3 px-6 absolute bg-black opacity-20 h-9 rounded-lg"></div>
              <div className="w-full absolute px-4 py-2 text-sm text-slate-300">
                TVL~$177,457,167.99
              </div>
            </div>
            <div className="relative w-full h-full">
              <div className="w-full  py-3 px-6 absolute bg-black opacity-20 h-9 rounded-lg"></div>
              <div className="w-full absolute px-4 py-2 text-sm text-slate-300">
                TVL~$177,457,167.99
              </div>
            </div>
            <div className="relative w-full h-full">
              <div className="w-full  py-3 px-6 absolute bg-black opacity-20 h-9 rounded-lg"></div>
              <div className="w-full absolute px-4 py-2 text-sm text-slate-300">
                TVL~$177,457,167.99
              </div>
            </div>
          </div>

          <div className="w-full h-full pt-20 flex gap-2">
            <span className="text-sm text-slate-400 ">
              There are currently 126 tokens listed.
            </span>
            <span className="text-sm text-slate-400 font-bold">
              See all tokens
            </span>
            <span className="text-sm text-slate-400 ">or</span>
            <span className="text-sm text-slate-400 font-bold">
              request a new token listing.
            </span>
          </div>
        </div>
        <div className="bg-[#192435] w-[40%] h-full flex flex-col gap-10 py-12 px-12">
          <div className='text-lg text-slate-400'>How it works</div>
          <div className=" w-full h-full py-2  text-sm text-slate-400">
            <span className=''>
              The deeper the liquidity(TVL) the lower the slippage pool will
              offer.LPs get VELO emissions, while VELO lockers get the pool trading
              fees as an incentive to vote on the most productive pools.
            </span>
          </div>
         
          <div className='flex text-slate-400 text-md items-center gap-2'>
          <span>Read More</span>
          <GoQuestion/>
          </div>
        </div>
      </div>
      <div className='w-[90%] h-full'>
          <div className='text-2xl'>
            Liquidity Pool
          </div>
          <div className='w-full'>
              <div className='w-[60%] border-slate-400 border rounded-lg h-full flex'>
                  {poolArr.map((pool,i)=>{
                    return(
                      <>
                        <div className={`w-full justify-center py-2 px-3 text-[0.8rem] text-slate-300 font-bold flex items-center ${i!=7&&'border-r border-r-slate-400'}`} key={i}>
                            {pool}
                        </div>
                      </>
                    )
                  })}
              </div>
          </div>
      </div>
    </div>
  );
}

export default page