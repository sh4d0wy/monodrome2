import react from 'react';
import Image from 'next/image';
import { FaChevronDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoSunnySharp } from "react-icons/io5";

const page=()=>{
    return(
        <div className="w-full h-fit flex px-4 lg:px-12 flex-col items-center justify-center overflow-hidden">
            <div className="w-full h-full flex flex-col lg:flex-row flex items-center justify-center gap-[2vw] mt-[4%] mb-[4%] lg:h-[30rem]">
            <div className='flex flex-col w-[98%] md:w-[60%] lg:w-[40%] gap-[0.5rem] bg-[#252d37] p-[2rem] lg:p-[2%] rounded-xl h-full'>
                <p></p>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div className='flex justify-between w-full text-[#647186]'>
                    <div className='flex flex-col gap-[0.5vw]'>
                        <p className='font-light text-sm lg:text-xs'>Liquidity</p>
                        <p className='text-sm '><span className='text-[#fffa] '>55,378.64</span> $BIF</p>
                        <p className='text-sm '><span className='text-[#fffa]'>0.00005</span> WETH</p>
                    </div>
                    <div className='flex flex-col gap-[0.5vw]'>
                        <p className='font-light text-sm lg:text-xs'>Your Deposits</p>
                        <p className='text-sm'><span className='text-[#fffa]'>0.0</span> $BIF</p>
                        <p className='text-sm'><span className='text-[#fffa]'>0.0</span> WETH</p>
                    </div>
                </div>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div className='flex justify-between w-full text-[#647186]'>
                    <div className='flex flex-col gap-[0.5vw] items-center justify-center'>
                            <p className='font-light text-xs'>APR</p>
                            <p className='text-sm'><span className='text-[#fffa]'>0.0%</span></p>
                    </div>
                    <div className='flex flex-col gap-[0.5vw] items-center justify-center'>
                        <p className='font-light text-xs'>Current votes</p>
                        <p className='text-sm'><span className='text-[#fffa]'>0.0</span></p>
                    </div>
                    <div className='flex flex-col gap-[0.5vw] items-center justify-center'>
                        <p className='font-light text-xs'>Current incentives</p>
                        <p className='text-sm'><span className='text-[#fffa]'>~$0.0</span></p>
                    </div>
                </div>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div className='flex flex-col gap-[1vw] mt-[1rem]'>
                <div className="flex justify-between w-full text-[#647186]">
                    <span className='text-sm  text-[#D4CFCF]' >Your Incentive</span>
                    <span className='text-xs'>Available 0.0 AERO</span>
                </div>

                <div className="w-full flex items-center  border border-[#647186] rounded-lg h-full">
                <div className="border-r border-[#647186] h-full  flex items-start py-2 justify-start w-[45%]  lg:w-[30%]">
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
          <div className='flex flex-col gap-[2vw] bg-gradient-to-r from-[#770250] to-[#230249] border border-[#5F0755] w-[98%] md:w-[60%] lg:w-[32%] p-[1.5rem] lg:p-[3vw] rounded-xl h-full'>
            <p className='text-md lg:text-sm font-bold w-[85%]'>Incentives are usually provided by the
                protocols.By continuing with the next
                steps you acknowledge that you understand 
                the mechanics of the protocol and that after
                depositing any rewards as incentives you won't
                be able to withdraw them</p>
            <p className='w-full text-md lg:text-sm w-[85%]'>By providing an incentive, you may draw more
                liguidity providers,Votes area decisive factor
                on how much emissions a liquidity pool will get nextepoch.The
                more emissions are flowing to a liguidity pool,the
                 more rewards for those
                who provide liquidity for the pool</p>
            <button className='w-full bg-white text-black p-[2%] rounded-md'>Continue</button>
          </div>
        </div>
        </div>
    )
}

export default page;