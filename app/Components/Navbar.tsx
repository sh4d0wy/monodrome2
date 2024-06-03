"use client"
import React, { useState,useContext } from 'react'
import {UserContext} from '../Context/UserContextProvider';
// import { ConnectButton } from '@rainbow-me/rainbowkit';
import RainbowButton from './RainbowButton';
import Link from 'next/link';
import { useAccount } from 'wagmi';
import Image from 'next/image';
import { FaHamburger } from 'react-icons/fa';
import { IoMdMenu } from 'react-icons/io';
import { FaX } from 'react-icons/fa6';
import ConnectButton from './ConnectButton';

const Navbar = () => {
    const address = useAccount()
    const items = ["Swap","Liquidity","Dashboard","Vote","Lock","Incentivize"];
    const [page,setPage] = useState(-1);
    const [menu,setMenu] = useState(false);
  return (
    <div className='w-full flex items-center justify-center relative z-100 '>
    <div className='w-[90%] h-fit my-10 flex justify-between '>
        <div className='text-xl w-full  lg:text-2xl flex gap-1 items-center justify-center'>
        <Link href="/" className='text-xl w-full  lg:text-2xl flex gap-1 items-center justify-center'>
            <Image src="/Images/logos/megadrome.png" width={50} height={50} alt="logo"/>
            <span> 
                megadrome
            </span>
        </Link>
        </div>
        
        <div className=' hidden w-full px-12 items-end lg:flex lg:justify-center gap-10 '>
            {items.map((item,index)=>{
                if(!address.address){
                    if(index<2)
                    return(
                        <Link href={`/site/${item.toLowerCase()}`}>
                    <div className={`${index!=page?'text-[#6A768A]  hover:text-white py-2':'text-white font-bold border-b-4 border-b-[#8A0656] text-lg py-2'} cursor-pointer`}
                    onClick={()=>setPage(index)}>
                    {item}
                    </div>
                    </Link>
                    )
                }else{

                    return(
                        <Link href={`/site/${item.toLowerCase()}`}>
                        <div className={`${index!=page?'text-[#6A768A] hover:text-white py-2':'text-white font-bold border-b-4 border-b-[#8A0656] text-lg py-2'} cursor-pointer`}
                        onClick={()=>setPage(index)}>
                        {item}
                        </div>
                        </Link>
                    )
                }
            })}
        </div>
        <button className='text-sm lg:text-md w-full flex justify-center items-center '>
            <ConnectButton/>
        </button>
        <div className='w-[5%] flex lg:hidden items-center justify-end'>
            <IoMdMenu size={20} onClick={()=>setMenu(true)}/>
        </div>
        {menu&&
        <div className="w-[80%] h-[100vh] lg:hidden absolute z-100 bg-[#1C2232] right-0 top-0">
                <div className='items-end flex w-full justify-end py-8 px-8'>
                    <FaX size={20} className='text-white' onClick={()=>setMenu(false)}/>
                </div>
               <div className='flex flex-col gap-4 px-12 py-20'>
               {items.map((item,index)=>{
                if(!address.address){
                    if(index<2)
                    return(
                        <Link href={`/site/${item.toLowerCase()}`} onClick={()=>setMenu(false)}>
                    <div className={`${index!=page?'text-white text-xl hover:text-white py-2':'text-white font-bold border-b-4 border-b-[#8A0656] text-lg py-2'} cursor-pointer`}
                    onClick={()=>setPage(index)}>
                    {item}
                    </div>
                    </Link>
                    )
                }else{

                    return(
                        <Link href={`/site/${item.toLowerCase()}`} onClick={()=>setMenu(false)}>
                        <div className={`${index!=page?'text-white text-xl hover:text-white py-2':'text-white font-bold border-b-4 border-b-[#8A0656] text-lg py-2'} cursor-pointer`}
                        onClick={()=>setPage(index)}>
                        {item}
                        </div>
                        </Link>
                    )
                }
            })}
                </div> 
        </div>
        }
    </div>
    </div>
  )
}

export default Navbar