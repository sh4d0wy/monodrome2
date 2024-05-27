import Image from 'next/image';
import React from 'react'
import { FaClock, FaTimesCircle } from 'react-icons/fa';
import { GoQuestion } from "react-icons/go";
import { LuTimerReset } from "react-icons/lu";
const page = () => {
  const pool=[{},{},{},{},{},{},{}]
  return (
    <div className="w-full h-fit flex flex-col items-center justify-center overflow-x-hidden gap-[5rem] ">

      <div className='flex flex-col  bg-[#252d37] border border-[#192435] hover:border-slate-700 rounded-lg p-[3%] lg:p-[1%] gap-3 w-[90%]'>
        <div className='flex justify-between items-center'>
            <div className='flex gap-3 text-sm text-slate-400 items-center'>
                <div className='flex'>
                  <LuTimerReset size={20}/>
                  <div>Current voting round</div>
                </div>
                <div className='bg-[#1E242B] rounded-xl px-3 py-1'>ends in 3 days</div>
            </div>
        </div>
        <hr className='w-full border border-[#1e242a]'/>

        <div className='text-sm text-slate-400 hidden lg:flex'>Voters earn a share of transaction fees and incentives for helping govern how emissions are distributed.</div>
        <hr className='w-full border border-[#141D28] hidden lg:block'/>
        <div className='flex justify-between items-center'>
            <div className='flex flex-col lg:flex-row text-sm text-slate-400 gap-2 items-center'>
                <div>Total voting power available for this epoch</div>
                <div className='bg-[#1e242a] rounded-xl px-3 py-1'>591,536,042.56 </div>
            </div>
        </div>
        <hr className='w-full border border-[#1e242a]'/>

        <div className='flex gap-3 text-sm text-slate-600 items-center justify-between'>
                <div className='flex flex-col lg:flex-row lg:gap-2'>
                  <div>Total Fees: <span className='text-slate-400 block lg:inline-block'>~$1,322,198.65</span></div>
                  <div>Total Incentives: <span className='text-slate-400 block lg:inline-block '>~$1,322,198.65</span></div>
                </div>
                <div className='flex flex-col lg:flex-row lg:gap-2'>
                <div>Total Rewards: <span className='text-slate-400 block lg:inline-block '>~$1,322,198.65</span></div>
                <div>New Emissions: <span className='text-slate-400 block lg:inline-block '>1,884,086.83 </span></div>
                </div>
            </div>
      </div> 
      <div className='flex flex-col w-[90%] h-full gap-3'>
        <div className='flex items-center justify-start w-full gap-2 '>
            <div className='text-lg'>Select Liquidity Pools for Voting</div>
            <GoQuestion  size={15} className='text-slate-300'/>
        </div>
        <div className='flex'>
            <button className='border w-[10rem] focus:bg-blue-700 focus:text-white rounded-l-lg border-gray-500 text-sm text-gray-400 px-6 py-2'>Most Rewarded</button>
            <button className='border w-[10rem] focus:bg-blue-700 focus:text-white border-gray-500 text-sm text-gray-400 px-6 py-2'>Least Rewarded</button>
            <button className='border w-[10rem] focus:bg-blue-700 focus:text-white rounded-r-lg border-gray-500 text-sm text-gray-400 px-6 py-2'>All Pools</button>
        </div>
        <div className='flex flex-col gap-1 w-full text-[0.75rem]'>
            <div className='w-full rounded-lg flex w-full bg-[#252D37] px-6 py-1'>
              <span className='w-[40%]'>POOLS</span>
              <div className='flex justify-between w-full items-end'>
                <span className='w-[16%] flex justify-end px-1'>FEES</span>
                <span className='w-[16%] flex justify-end px-1'>INCENTIVES</span>
                <span className='w-[16%] flex justify-end px-1'>TOTAL REWARDS</span>
                <div className='w-[30%] flex '>
                <span className='w-2/3 flex justify-end px-1'>vAPR</span>
                <span className='w-full flex justify-end px-1'>SELECT POOL</span>
                </div> 
              </div>
            </div>
            {pool.map((p)=>{
              return(
                <div>
                  <div className='w-full h-full flex flex-col bg-[#252d37] px-6 py-6 gap-8'>
              <div className='w-full h-full flex-col flex lg:flex-row py-2'>
                  <div id="pools" className='flex items-start gap-2 w-[40%]'>
                    <div className='relative flex justify-start'>
                      <Image src="/Images/Pools/logo1.svg" width={35} height={35} alt='logo' className='relative bg-[#1e272a] rounded-full hover:z-20'/>
                      <Image src="/Images/Pools/logo2.svg" width={35} height={35} alt='logo' className='relative z-10 right-2'/>
                      </div>
                      <div className='flex flex-col'>
                          <span className='text-[0.9rem] font-bold ml-3 lg:ml-0'>vAMM-Virtual/Weth</span>
                          <div className='text-[0.7rem] flex flex-col my-1'>
                          <div className=' hidden lg:flex gap-1'>
                            <span>Basic Volatile:</span>
                            <span>1.0%</span>
                          </div>
                          <div className=' hidden lg:flex gap-1'>
                            <span>Votes:</span>
                            <span>42,739,843.06</span>
                            <span>{"=>"}</span>
                            <span>7.22%</span>
                          </div>
                          <div className=' hidden lg:flex gap-1'>
                            <span>TVL:</span>
                            <span>~$25,004,510.26</span>
                          </div>
                          </div>
                      </div>
                  </div>
                  <div className='w-full flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between'>
                      <div id='fees' className='w-[90%] lg:w-[18%] h-full flex items-center'>
                        <div className=' w-full h-[15vh] bg-[#1E242A] rounded-lg h-full flex flex-col items-start justify-center md:items-center lg:items-end lg:justify-between py-4 px-3'>
                          <span className='lg:hidden'>Fees</span>
                          <span className='h-[30%] text-[0.9rem] text-gray-200'>~$115,248.92</span>
                          <div className='flex flex-col gap-0 w-full items-start md:items-center lg:items-end mt-3'>
                            <span className='text-md lg:text-[0.65rem] text-gray-400'>391,526.1 VIRTUAL</span>
                            <span className='text-md lg:text-[0.65rem] text-gray-400'>16.69 WETH</span>
                          </div>
                      </div>

                  </div>
                  <div id='Incentives' className='w-[90%] lg:w-[18%]  h-full flex items-center'>
                  <div className=' w-full h-[15vh] bg-[#1E242A] rounded-lg h-full flex flex-col items-start justify-center md:items-center lg:items-end lg:justify-between py-4 px-3'>
                          <span className='lg:hidden'>Incentives</span>
                          <span className='h-[30%] text-[0.9rem] text-gray-200'>~$115,248.92</span>
                          <div className='flex flex-col gap-0 w-full items-start md:items-center lg:items-end mt-3'>
                            <span className='text-md lg:text-[0.65rem] text-gray-400'>391,526.1 VIRTUAL</span>
                            <span className='text-md lg:text-[0.65rem] text-gray-400'>16.69 WETH</span>
                          </div>
                      </div>
                  </div>
                  <div id='Total Rewards'  className='w-[90%] lg:w-[18%]  h-full flex items-center'>
                  <div className=' w-full h-[15vh] bg-[#1E242A] rounded-lg h-full flex flex-col items-start justify-center md:items-center  lg:items-end lg:justify-between py-4 px-3'>
                          <span className='lg:hidden'>Rewards</span>
                          <span className='h-[30%] text-[0.9rem] text-gray-200'>~$115,248.92</span>
                          <div className='flex flex-col gap-0 w-full items-start md:items-center lg:items-end mt-3'>
                            <span className='text-md lg:text-[0.65rem] text-gray-400'>391,526.1 VIRTUAL</span>
                            <span className='text-md lg:text-[0.65rem] text-gray-400'>16.69 WETH</span>
                          </div>
                      </div>
                  </div>
                  <div className='w-[90%] lg:w-[20%] flex '>
                    <div className='flex flex-col gap-1 lg:gap-0'>
                      <span className='lg:hidden'>APR</span>
                      <div id='vAPR' className='w-2/3 h-full flex items-center lg:justify-end'>
                        <span>52.9%</span>
                      </div>
                    </div>
                    <div id='Select Pool' className='w-full flex items-center justify-end px-4'>
                        <button className='border px-4 py-2 border-gray-600 rounded-xl text-gray-400'>Select</button>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default page
