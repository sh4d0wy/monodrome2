"use client"
import React, { useState } from 'react'
import Link from 'next/link';
const Navbar = () => {
    const items = ["Swap","Dashboard","Liquidity","Vote","Lock","Incentivize"];
    const [page,setPage] = useState(0);
  return (
    <div className='w-full flex items-center justify-center'>
    <div className='w-[90%] h-fit py-10 px-12 flex justify-between'>
        <div className='text-2xl font-bold'>
                megadrome
        </div>
        <div className='flex gap-6'>
            {items.map((item,index)=>{
                return(
                    <Link href={`/site/${item.toLowerCase()}`}>
                    <div className={`${index!=page?'text-[#6A768A]':'text-white font-bold border-b border-b-green-200'} cursor-pointer`}
                    onClick={()=>setPage(index)}>
                    {item}
                    </div>
                    </Link>
                )
                
            })}
        </div>
        <div>
            Connect Wallet
        </div>
    </div>
    </div>
  )
}

export default Navbar