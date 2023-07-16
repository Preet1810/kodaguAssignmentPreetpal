import React from 'react'
import { MdOutlineAttachment } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { BsArrowReturnRight } from 'react-icons/bs';
import { AiFillCloud, AiFillFlag, AiFillPlayCircle } from 'react-icons/ai';
import { BiSolidMessageDetail } from 'react-icons/bi';
import { IoIosArrowForward } from 'react-icons/io';




const DevApps=() => {
    return (
        <div className='w-[450px] h-[340px] p-3 bg-blue-100 flex flex-col gap-y-4'>
            <div className='flex flex-col gap-y-8 border-b-2 border-[#F5F6F7] p-4'>
                <div className='flex justify-between'>
                    <div className='flex gap-x-6'>
                        <h2 className='text-[14px] font-[700] leading-[30px] text-[#4D5E80]'>Development Apps</h2>
                        <MdOutlineAttachment className='w-[30px] h-[30px] text-[#C3CAD9]' />
                    </div>
                    <div className='justify-end'>
                        <RxCross2 className='w-[30px] h-[30px] text-[#C3CAD9]' />
                    </div>
                </div>
                <div className='flex justify-center gap-x-28'>
                    <div className='flex flex-col gap-y-8'>
                        <div className='flex gap-x-6'>
                            <BsArrowReturnRight className='w-[30px] h-[30px] text-[#C3CAD9]' />
                            <p className='text-[12px] font-[700] leading-[20px] text-[#4D5E80]'>4 Subtasks</p>
                        </div>
                        <div className='flex gap-x-6'>
                            <AiFillCloud className='w-[30px] h-[30px] text-[#C3CAD9]' />
                            <p className='text-[12px] font-[700] leading-[20px] text-[#4D5E80]'>3 Files</p>
                        </div>
                        <div className='flex gap-x-6'>
                            <img className='' src="https://res.cloudinary.com/dwh4llt0c/image/upload/v1689311805/smlimg1_gvybdf.png" width={20} height={20} alt="profile" />
                            <p className='text-[12px] font-[700] leading-[20px] text-[#4D5E80]'>4 Subtasks</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-8'>
                        <div className='flex gap-x-6'>
                            <AiFillFlag className='w-[30px] h-[30px] text-[#C3CAD9]' />
                            <p className='text-[12px] font-[700] leading-[20px] text-[#4D5E80]'>Priority Enabled</p>
                        </div>
                        <div className='flex gap-x-6'>
                            <BiSolidMessageDetail className='w-[30px] h-[30px] text-[#C3CAD9]' />
                            <p className='text-[12px] font-[700] leading-[20px] text-[#4D5E80]'>7 Comments</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center gap-x-8'>
                <div>
                    <h2 className='text-[12px] font-[900] leading-[20px] text-[#7D8FB3]'>START DATE</h2>
                    <p className='text-[12px] font-[900] leading-[20px] text-[#4D5E80]'>Sep 3, 9:00 pm</p>
                </div>
                <div>
                    <IoIosArrowForward className='w-[30px] h-[30px] text-[#C3CAD9]' />
                </div>
                <div>
                    <h2 className='text-[12px] font-[900] leading-[20px] text-[#7D8FB3]'>DUE DATE</h2>
                    <p className='text-[12px] font-[900] leading-[20px] text-[#4D5E80]'>Sep 4, 9:00 pm</p>
                </div>
                <div className='flex justify-center items-center gap-x-4'>
                    <AiFillPlayCircle className='w-[30px] h-[30px] text-[#29CC39]' />
                    <p className='text-[12px] font-[900] leading-[20px] text-[#4D5E80]'>0:00</p>
                </div>
            </div>
        </div>
    )
}

export default DevApps