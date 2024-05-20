import React from 'react'
import { GoQuestion } from "react-icons/go";

const page = () => {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-center overflow-x-hidden gap-[5rem] ">

      <div className='flex flex-col  bg-[#192435] border border-[#192435] hover:border-slate-700 hover:bg-[#1F283B] rounded-lg p-[1%] gap-[1rem] w-[90%]'>
        <div className='flex justify-between items-center'>
            <div className='flex gap-2 text-lg text-slate-400'>
                <div>Current voting round</div>
                <div className='bg-[#272D45] rounded-xl px-3 font-bold'>ends in 3 days</div>
            </div>
            <div className='text-lg text-slate-400'>Voters earn a share of transaction fees and incentives for helping govern how emissions are distributed.</div>
        </div>
        <hr className='w-full border border-[#141D28]'/>
        <div className='flex justify-between items-center'>
            <div className='flex text-md text-slate-400 gap-2'>
                <div>Total voting power available for this epoch</div>
                <div className='bg-[#272D45] rounded-xl px-3 font-bold'>591,536,042.56 </div>
            </div>
            <div className='flex gap-3 text-md text-slate-600'>
                <div>Total Fees: <span className='text-slate-400 '>~$1,322,198.65</span></div>
                <div>Total Incentives: <span className='text-slate-400 '>~$1,322,198.65</span></div>
                <div>Total Rewards: <span className='text-slate-400 '>~$1,322,198.65</span></div>
                <div>New Emissions: <span className='text-slate-400 '>1,884,086.83 </span></div>
            </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='flex'>
            <div>Select Liquidity Pools for Voting</div>
            <GoQuestion />
        </div>
      </div>
    </div>
  )
}

export default page
