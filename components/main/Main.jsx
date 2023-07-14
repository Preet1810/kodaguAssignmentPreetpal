import React from 'react'
import { HiUserGroup } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'

import { BiSolidDashboard } from 'react-icons/bi'
import { BsFillArrowUpRightCircleFill, BsBuildingsFill, BsFillPersonFill, BsThreeDots } from 'react-icons/bs'
import { FaGlobeAmericas } from 'react-icons/fa'
import { MdAttachment } from 'react-icons/md'
import { MdEmail } from 'react-icons/md'
import { AiOutlineUnorderedList, AiOutlineClockCircle } from 'react-icons/ai'

import cardImg1 from '../../public/assets/cardImg1.png'
import cardImg2 from '../../public/assets/cardImg2.png'
import smlimg1 from '../../public/assets/smlimg1.png'
import Headcard from './Headcard'
import ImgCard from './ImgCard'
import SmlCard from './SmlCard'
import Image from 'next/image'
const Main=() => {
    return (
        <div className='pl-[30rem] '>
            <div className='flex py-6 justify-between px-2  border-b-2 border-l-2 border-[#b7b8b9] bg-[#EDEFF2]'>
                <div className='flex gap-x-4 justify-center mt-2 '>
                    <HiUserGroup className='h-[30px] w-[30px] text-[#ADB8CC]' />
                    <p className='text-[#6B7A99] text-center text-[12px] font-[700] leading-[30px]'>List Tasks</p>
                </div>
                <div className='flex gap-x-4 justify-center mt-2'>
                    <MdEmail className='h-[30px] w-[30px] text-[#ADB8CC]' />
                    <p className='text-[#6B7A99] text-center text-[12px] font-[700] leading-[30px]'>List Tasks</p>
                </div>
                <div className='flex gap-x-4 justify-center mt-2'>
                    <BsBuildingsFill className='h-[30px] w-[30px] text-[#ADB8CC]' />
                    <p className='text-[#6B7A99] text-center text-[12px] font-[700] leading-[30px]'>List Tasks</p>
                </div>
                <div className='flex gap-x-4 justify-center mt-2'>
                    <BsFillPersonFill className='h-[30px] w-[30px] text-[#ADB8CC]' />
                    <p className='text-[#6B7A99] text-center text-[12px] font-[700] leading-[30px]'>List Tasks</p>
                </div>
                <div className='flex gap-x-4 justify-center mt-2'>
                    <FaGlobeAmericas className='h-[30px] w-[30px] text-[#ADB8CC]' />
                    <p className='text-[#6B7A99] text-center text-[12px] font-[700] leading-[30px]'>List Tasks</p>
                </div>
                <div className='flex gap-x-4 justify-center mt-2'>
                    <BiSolidDashboard className='h-[30px] w-[30px] text-[#ADB8CC]' />
                    <p className='text-[#6B7A99] text-center text-[12px] font-[700] leading-[30px]'>List Tasks</p>
                </div>
                <div className='flex justify-end'>
                    <div className='flex justify-center rounded-3xl p-2  w-[230px] ml-auto bg-white h-[50px]'>
                        <BiSearch className="text-[#98A2B3] text-[2rem]" />
                        <input type="text" placeholder='Search Tasks' className=' text-[#667085] text-[12px] font-[700] w-full leading-[20px] rounded-2xl pl-2 focus:outline-none' />
                    </div>
                </div>
            </div>
            <div className='flex bg-[#EDEFF2] py-10 px-5 justify-center gap-x-4 border border-[#b7b8b9]'>
                <div className=''>
                    <Headcard title="TO DO" borderColor="border-[#8833FF]" />
                    <div className='flex flex-col gap-y-3 mt-5'>
                        <div className='w-[230px] h-[285px] mb-4'>
                            <ImgCard title="Make Money Online Through" img={cardImg1} />
                        </div>
                        <SmlCard title="Make Money Online Through" />
                        <SmlCard title="Search Engine Optimization ..." />
                        <SmlCard title="Characteristics Of A Successful" />
                        <SmlCard title="Getting Free Publicity" />
                        <SmlCard title="Importance Of The Custom ..." />
                    </div>
                </div>
                <div>
                    <Headcard title="IN WORK" borderColor="border-[#33BFFF]" />
                    <div className='flex flex-col gap-y-3 mt-5'>
                        <SmlCard title="Types Of Paper In Catalog" />
                        <div className='w-[230px] h-[285px] mb-4'>
                            <ImgCard title="Global Resorts Network" img={cardImg2} />
                        </div>

                        <SmlCard title="Development Apps" />
                        <SmlCard title="Copper Canyon" />
                        <SmlCard title="Make Money Online Through" />
                    </div>
                </div>
                <div>
                    <Headcard title="REVIEW" borderColor="border-[#FFCB33]" />
                    <div className='flex flex-col gap-y-3 mt-5'>
                        <SmlCard title="Astronomy Or Astrology" />
                        <SmlCard title="Astronomy Binoculars A Great" />
                        <SmlCard title="Task name or type " />
                        <div className='w-[230px] h-[285px] mb-4'>
                            <ImgCard title="Make Money Online Through" img={cardImg1} />
                        </div>
                    </div>
                </div>
                <div>
                    <Headcard title="DONE" borderColor="border-[#29CC39]" />
                    <div className='flex flex-col gap-y-3 mt-5'>
                        <SmlCard title="Copper Canyon" />
                        <div className='w-[230px] h-[285px] mb-4'>
                            <ImgCard title="Make Money Online Through" img={cardImg1} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main