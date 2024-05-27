import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import { GoQuestion } from "react-icons/go";
const page = () => {
  return (
    <div className='w-full flex justify-center items-center h-full'>
    <div className='w-[85%] lg:w-[75%] h-full py-12 text-slate-400 text-[0.9rem] gap-12 flex flex-col'>
            <div id='section1' className='flex flex-col w-full h-full gap-4 '>
                    <div className='flex w-full justify-between '>
                            <div className='flex items-center gap-2 text-[1rem] text-slate-300  '>
                                <span>Deposited & Stacked Liquidity</span>
                                <GoQuestion />
                            </div>
                            <span className='hidden lg:flex'>New Deposit</span>
                    </div>
                    <div className='w-full bg-[#252d37] py-6 px-6 text-[1rem] rounded-md'>
                        <input type='text' placeholder='To receive emissions deposit and stake your liquidity first.' className='bg-transparent w-full outline-none border-none'/>
                    </div>
            </div>
            <div id='section2' className='flex flex-col w-full h-full gap-4 '>
                    <div className='flex w-full justify-between '>
                            <div className='flex items-center gap-2 text-[1rem] text-slate-300  '>
                                <span>Locks</span>
                                <GoQuestion />
                            </div>
                    </div>
                    <div className='w-full bg-[#252d37] py-6 px-6 text-[1rem] rounded-md'>
                        <input type='text' placeholder='To receive emissions deposit and stake your liquidity first.' className='bg-transparent w-full outline-none border-none rounded-md'/>
                    </div>
            </div>
            <div id='section3' className='flex flex-col w-full h-full gap-4 '>
                    <div className='flex w-full justify-between '>
                            <div className='flex items-center gap-2 text-[1rem] text-slate-300  '>
                                <span>Relay</span>
                                <GoQuestion />
                            </div>
                            <span className='hidden lg:flex'>All Relays</span>
                    </div>
                    <div className='w-full bg-[#252d37] py-6 px-6 text-[1rem] rounded-md'>
                        <input type='text' placeholder='To receive emissions deposit and stake your liquidity first.' className='bg-transparent w-full outline-none border-none rounded-md '/>
                    </div>
            </div>
            <div id='section4' className='flex flex-col w-full h-full gap-4 '>
                    <div className='flex w-full justify-between '>
                            <div className='flex items-center gap-2 text-[1rem] text-slate-300  '>
                                <span>Liquidity & Rewards</span>
                                <GoQuestion />
                            </div>
                    </div>
                    <div className='w-full bg-[#252d37] py-6 px-6 text-[1rem] rounded-md'>
                        <input type='text' placeholder='To receive emissions deposit and stake your liquidity first.' className='bg-transparent w-full outline-none border-none rounded-md'/>
                    </div>
            </div>
            <div id='section5' className='flex flex-col w-full h-full gap-4 '>
                    <div className='flex w-full justify-between '>
                            <div className='flex items-center gap-2 text-[1rem] text-slate-300  '>
                                <span>Voting Rewards</span>
                                <GoQuestion />
                            </div>
                            <span className='hidden lg:flex'>New Deposit</span>
                    </div>
                    <div className='w-full bg-[#252d37] py-6 px-6 text-[1rem] rounded-md'>
                        <input type='text' placeholder='To receive emissions deposit and stake your liquidity first.' className='bg-transparent w-full outline-none border-none rounded-md'/>
                    </div>
            </div>
    </div>
    </div>
  )
}

export default page