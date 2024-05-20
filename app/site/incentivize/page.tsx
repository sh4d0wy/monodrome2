import react from 'react';
import Image from 'next/image';
import { FaChevronDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoSunnySharp } from "react-icons/io5";

const page=()=>{
    return(
        <div className="w-full h-fit flex px-4 lg:px-12 flex-col items-center justify-center overflow-hidden">
            <div className="w-full h-full flex flex-col lg:flex-row flex items-center justify-center gap-[5vw] mt-[4%] mb-[4%]">
            <div className='flex flex-col w-[98%] md:w-[80%] lg:w-[40%] gap-[1vw] bg-[#1F283B] p-[2rem] lg:p-[2%] rounded-xl'>
                <p></p>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div className='flex justify-between w-full text-[#647186]'>
                    <div className='flex flex-col gap-[0.5vw]'>
                        <p className='font-light text-sm lg:text-md'>Liquidity</p>
                        <p className='text-md lg:text-xl'><span className='text-[#fffa] '>55,378.64</span> $BIF</p>
                        <p className='text-md lg:text-xl'><span className='text-[#fffa]'>0.00005</span> WETH</p>
                    </div>
                    <div className='flex flex-col gap-[0.5vw]'>
                        <p className='font-light text-sm lg:text-md'>Your Deposits</p>
                        <p className='text-md lg:text-xl'><span className='text-[#fffa]'>0.0</span> $BIF</p>
                        <p className='text-md lg:text-xl'><span className='text-[#fffa]'>0.0</span> WETH</p>
                    </div>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div className='flex justify-between w-full text-[#647186]'>
                    <div className='flex flex-col gap-[0.5vw] items-center justify-center'>
                            <p className='font-light text-sm lg:text-md'>APR</p>
                            <p className='text-md lg:text-xl'><span className='text-[#fffa]'>0.0%</span></p>
                    </div>
                    <div className='flex flex-col gap-[0.5vw] items-center justify-center'>
                        <p className='font-light text-sm lg:text-md'>Current votes</p>
                        <p className='text-md lg:text-xl'><span className='text-[#fffa]'>0.0</span></p>
                    </div>
                    <div className='flex flex-col gap-[0.5vw] items-center justify-center'>
                        <p className='font-light text-sm lg:text-md'>Current incentives</p>
                        <p className='text-md lg:text-xl'><span className='text-[#fffa]'>~$0.0</span></p>
                    </div>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div className='flex flex-col gap-[1vw]'>
                <div className="flex justify-between w-full text-[#647186]">
                    <span className='text-sm lg:text-lg  text-[#D4CFCF]' >Your Incentive</span>
                    <span className='text-sm lg:text-md'>Available 0.0 AERO</span>
                </div>

                <div className="w-full flex items-center  border border-[#647186] rounded-lg h-full">
                <div className="border-r border-[#647186] h-full  flex items-start py-2 justify-start w-[45%] lg:w-[30%]">
                    <div className="w-full h-full flex justify-between px-4 items-center text-[#647186] gap-[1.5rem] lg:gap-0">
                        <div className="flex gap-2 items-center">
                        <Image
                            src="/Images/velo.png"
                            width={25}
                            height={25}
                            alt={"velo"}
                        />
                        <span>VELO</span>
                        </div>
                        <FaChevronDown size={10} />
                    </div>
                </div>
                <input
                type="text"
                value={"0.0"}
                className="bg-transparent px-4 select-none border-none outline-none text-slate-100"
                />
          </div>
                </div>
          </div>
          <div className='flex flex-col gap-[2vw] bg-gradient-to-t from-[#0F1820] to-[#162C25] w-[98%] md:w-[80%] lg:w-[35%] p-[1.5rem] lg:p-[4vw] rounded-xl'>
            <p className='text-md lg:text-xl'>Incentives are usually provided by the
                protocols.By continuing with the next
                steps you acknowledge that you understand 
                the mechanics of the protocol and that after
                depositing any rewards as incentives you won't
                be able to withdraw them</p>
            <p className='w-full text-md lg:text-xl'>By providing an incentive, you may draw more
                liguidity providers,Votes area decisive factor
                on how much emissions a liquidity pool will get nextepoch.The
                more emissions are flowing to a liguidity pool,the
                 more rewards for those
                who provide liquidity for the pool</p>
            <button className='w-full bg-white text-black p-[2%]'>Continue</button>
          </div>
        </div>
        </div>
    )
}

export default page;