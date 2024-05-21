import React from 'react'
import Image from 'next/image';
import { FaChevronDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { IoSunnySharp } from "react-icons/io5";
import { RiErrorWarningFill } from "react-icons/ri";
import { GoQuestion } from "react-icons/go";
import Footer from '../../Components/Footer'

const page = () => {
    const relays=[
        {
            name:"veAERO Maxi",
            updated:"Updated 2 days ago",
            wallet:"0xc981...EF14f",
            power:"9,821,838.42VO",
            APR:"51.62%"
        },
        {
            name:"veAERO Maxi",
            updated:"Updated 2 days ago",
            wallet:"0xc981...EF14f",
            power:"9,821,838.42VO",
            APR:"51.62%"
        },
         {
            name:"veAERO Maxi",
            updated:"Updated 2 days ago",
            wallet:"0xc981...EF14f",
            power:"9,821,838.42VO",
            APR:"51.62%"
        },
        {
            name:"veAERO Maxi",
            updated:"Updated 2 days ago",
            wallet:"0xc981...EF14f",
            power:"9,821,838.42VO",
            APR:"51.62%"
        },
        {
            name:"veAERO Maxi",
            updated:"Updated 2 days ago",
            wallet:"0xc981...EF14f",
            power:"9,821,838.42VO",
            APR:"51.62%"
        }, {
            name:"veAERO Maxi",
            updated:"Updated 2 days ago",
            wallet:"0xc981...EF14f",
            power:"9,821,838.42VO",
            APR:"51.62%"
        }, {
            name:"veAERO Maxi",
            updated:"Updated 2 days ago",
            wallet:"0xc981...EF14f",
            power:"9,821,838.42VO",
            APR:"51.62%"
        }, {
            name:"veAERO Maxi",
            updated:"Updated 2 days ago",
            wallet:"0xc981...EF14f",
            power:"9,821,838.42VO",
            APR:"51.62%"
        }, {
            name:"veAERO Maxi",
            updated:"Updated 2 days ago",
            wallet:"0xc981...EF14f",
            power:"9,821,838.42VO",
            APR:"51.62%"
        }, {
            name:"veAERO Maxi",
            updated:"Updated 2 days ago",
            wallet:"0xc981...EF14f",
            power:"9,821,838.42VO",
            APR:"51.62%"
        }, {
            name:"veAERO Maxi",
            updated:"Updated 2 days ago",
            wallet:"0xc981...EF14f",
            power:"9,821,838.42VO",
            APR:"51.62%"
        }
    ]
  return (
    <div className="w-full h-fit flex py-2 lg:py-0 px-2 lg:px-12 flex-col items-center justify-center gap-[3rem] lg:gap-[5rem]">
        <div className='w-[95%] lg:w-[90%] bg-gradient-to-t from-[#0F1820] to-[#162C25] rounded-xl'>
            <div className='flex flex-col lg:flex-row items-center justify-around p-[2rem] lg:p-[2.5rem] gap-[2rem] lg:gap-0'>
                <p className='text-lg'>Gain greater <span className='text-bold'>voting power and higher rewards</span> , by locking more tokens for longer.</p>
                <button className='text-white bg-green-500 px-4 py-2 rounded-xl self-start lg:self-center'>Create Lock</button>
            </div>
        </div>
        <div className='flex flex-col w-[90%] h-full gap-4 '>
                    <div className='flex w-[90%] justify-between '>
                            <div className='flex items-center gap-2 text-[1rem] lg:text-[1.5rem] text-slate-300  '>
                                <span>Locks</span>
                                <GoQuestion />
                            </div>
                    </div>
                    <div className='w-full bg-[#252d37] py-6 px-6 text-[1rem]'>
                        <input type='text' placeholder='To receive emissions deposit and stake your liquidity first.' className='bg-transparent w-full outline-none border-none'/>
                    </div>
        </div>
        <div className='flex flex-col w-[90%] h-full gap-4 '>
                    <div className='flex w-full justify-between '>
                            <div className='flex items-center gap-2 text-[1rem] lg:text-[1.5rem] text-slate-300  '>
                                <span>Relay</span>
                                <GoQuestion />
                            </div>
                    </div>
                    <div className='flex flex-col gap-3 w-full'>
                        {relays.map((relay)=>{
                            return(
                                <div className='bg-[#252d37] p-[2rem] rounded-xl'>
                                    <div className='flex flex-col gap-[1rem]'>
                                    <div className='flex'>
                                        <div></div>
                                        <div className='flex flex-col'>
                                            <p className='text-lg'>{relay.name}</p>
                                            <p className='text-sm lg:text-md text-slate-400'>{relay.updated} <span className='hidden lg:inline-block'>. {relay.wallet}</span></p>
                                        </div>
                                    </div>
                                    <hr className='w-full border border-[#121B2C]'/>
                                    <div className='flex flex-col lg:flex-row gap-[1rem] lg:gap-0 items-center justify-between text-slate-400'>
                                        <div className=' bg-[#121B2C] p-2 rounded-md'>Rewards <span className='text-slate-300'>VELO</span> </div>
                                        <div className='flex lg:flex-col items-center justify-center gap-[0.5rem]'>
                                            <div>voting power</div>
                                            <div className='text-slate-300'>{relay.power}</div>
                                        </div>
                                        <div className='flex lg:flex-col items-center justify-center gap-[0.5rem]'>
                                            <div>APR</div>
                                            <div className='text-slate-300'>{relay.APR}</div>
                                        </div>
                                        <button className='border border-1 border-slate-300 p-2 rounded-md'>Deposit Lock</button>
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
