import React from 'react'
import { AiOutlineUnorderedList, AiOutlineClockCircle } from 'react-icons/ai'
import { MdAttachment } from 'react-icons/md'
import Image from 'next/image'


const ImgCard=({ title, img }) => {
    return (
        <div className='flex flex-col justify-between gap-y-4 py-3 px-4 bg-white rounded-lg'>
            <Image src={img} alt="building" width={230} height={170} />
            <div className='flex '>
                <p className='text-[#ADB8CC]  text-[10px] font-[700] leading-[20px]'>
                    Space Tasks 2
                </p>
                <div className='ml-auto'>
                    <Image className='' src="https://res.cloudinary.com/dwh4llt0c/image/upload/v1689311805/smlimg1_gvybdf.png" alt="profile" width={20} height={20} />
                </div>
            </div>
            <p className='text-[#6B7A99] text-[12px] font-[700] leading-[20px]'>
                {title}
            </p>
            <div className='flex justify-center gap-x-5'>
                <div className='flex justify-center items-center gap-x-3'>
                    <AiOutlineUnorderedList className='w-[30px] h-[30px] text-[#C3CAD9]' />
                    <span className='text-[#6B7A99] text-[10px] font-[700] leading-[20px]'>4</span>
                </div>
                <div className='flex justify-center items-center gap-x-3'>
                    <MdAttachment className='w-[30px] h-[30px] text-[#C3CAD9]' />
                    <span className='text-[#6B7A99] text-[10px] font-[700] leading-[20px]'>2</span>
                </div>
                <div className='flex justify-center items-center gap-x-3'>
                    <AiOutlineClockCircle className='w-[30px] h-[30px] text-[#C3CAD9]' />
                    <span className='text-[#6B7A99] text-[10px] font-[700] leading-[20px]'>6 Days Left</span>
                </div>
            </div>
        </div>
    )
}

export default ImgCard