"use client"
import React, { useState } from 'react'
import Link from 'next/link';
const Navbar = () => {
    const items = ["Swap","Dashboard","Liquidity","Vote","Lock","Incentivize"];
    const [page,setPage] = useState(0);
  return (
    <div className='w-full flex items-center justify-center '>
    <div className='w-[90%] h-fit lg:py-10 lg:px-12 flex justify-between py-2 px-1'>
        <div className='text-xl font-bold lg:text-3xl'>
                megadrome
        </div>
        <div className=' hidden lg:flex gap-10 text-lg'>
            {items.map((item,index)=>{
                return(
                    <Link href={`/site/${item.toLowerCase()}`}>
                    <div className={`${index!=page?'text-[#6A768A] text-lg hover:text-white py-2':'text-white font-bold border-b-4 border-b-[#8A0656] text-lg py-2'} cursor-pointer`}
                    onClick={()=>setPage(index)}>
                    {item}
                    </div>
                    </Link>
                )
                
            })}
        </div>
        <button className='text-sm lg:text-md border border-slate-400 p-[1%] rounded-xl hover:bg-[#6A768A] '>
            Connect Wallet
        </button>
    </div>
    </div>
  )
}

export default Navbar