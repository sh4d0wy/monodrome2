import React from 'react'
import Image from 'next/image';
import { FaChevronDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoSunnySharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='flex items-center justify-center lg:flex'>
      <div id='footer' className='h-fit flex flex-col pt-4 lg:pt-44 pb-12 px-8  w-[90%] items-center justify-center gap-[2rem]'>
        <div className='flex justify-between items-center w-full'>
            <div className='flex flex-col lg:flex-row gap-10 w-full'>
                <span className='text-[1.2rem] text-white'>Articles</span>
                <span className='text-[1.2rem] text-white'> Support</span>
                <div className='flex gap-6'>
                    <Image src="/Images/logos/x.png" width={30} height={30} alt='x'/>
                    <Image src="/Images/logos/logo2.png" width={30} height={30} alt='x'/>
                    <Image src="/Images/logos/discord.png" width={30} height={30} alt='x'/>
                    <Image src="/Images/logos/logo4.png" width={30} height={30} alt='x'/>
                    <Image src="/Images/logos/github.png" width={30} height={30} alt='x'/>
                </div>
                
            </div>
            <div>
                <IoSunnySharp size={30} />
            </div>
            <div></div>
        </div>
        <div className='w-full'>
            <hr className='w-full border border-slate-800 '/>
        </div>
        <div className='flex justify-between w-full items-center '>
            <div className='flex flex-col lg:flex-row gap-10 text-[1.2rem] text-white'>
                <span>Documentation</span>
                <span>Security</span>
                <span>BrandKit</span>
                <span>Tokens</span>
            </div>
            <div className='px-2 py-1 flex text-[1rem] text-slate-400 h-fit border border-slate-700 items-center gap-2 rounded-md'>
                <span>Mirrors</span>
                <FaChevronLeft/>
            </div>
        </div>
        {/* <div className='flex justify-between w-full'></div> */}
        </div>
    </div>
  )
}

export default Footer;
