import React from 'react'
import { RxCross2 } from 'react-icons/rx';
import { AiFillFlag } from 'react-icons/ai';
import { MdOutlineAttachment } from 'react-icons/md';
import { FiClock } from 'react-icons/fi';

import Image from 'next/image'

const AddTask=() => {
    return (
        <div className='bg-[#FFFFFF] p-2 flex flex-col justify-center gap-y-8 w-[230px] h-[115px]'>
            <div className='flex items-center justify-center gap-x-7'>
                <RxCross2 className='w-[30px] h-[30px] text-[#C3CAD9]' />
                <input type="text" className='w-[99px] text-[12px] font-[700] leading-[20px]' placeholder='Task name or type' />
                <div className=''>
                    <Image className='' src="https://res.cloudinary.com/dwh4llt0c/image/upload/v1689311805/smlimg1_gvybdf.png" width={20} height={20} alt="profile" />
                </div>
            </div>
            <div className='flex items-center justify-center  gap-x-11'>
                <div className='flex gap-x-3'>
                    <AiFillFlag className='w-[30px] h-[30px] text-[#C3CAD9]' />
                    <MdOutlineAttachment className='w-[30px] h-[30px] text-[#C3CAD9]' />
                    <FiClock className='w-[30px] h-[30px] text-[#C3CAD9]' />
                </div>
                <button className='text-center h-[30px] px-[10px] py-[5px] text-[10px] font-[900] leading-[20px] text-[#FFFFFF] bg-[#3361FF] rounded-lg'>Save</button>
            </div>

        </div>
    )
}

export default AddTask