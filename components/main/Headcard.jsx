import React from 'react'
import { BsFillPersonFill, BsThreeDots } from 'react-icons/bs'

const Headcard=({ title, borderColor }) => {
    return (
        <div className={`bg-white rounded-md w-[230px] h-[60px] p-3 border-l-4 ${borderColor} flex justify-center items-center`}>
            <div className='flex items-center justify-center gap-x-4'>
                <span className='text-[#6B7A99] text-center text-[12px] font-[900] leading-[20px]'>{title}</span>
                <div class="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[white] shadow-lg">
                    <span class="text-[#6B7A99] text-[10px] font-[900] leading-[20px]">5</span>
                </div>
                <BsThreeDots className='text-[#C3CAD9] h-[30px] w-[30px]' />
                <BsFillPersonFill className='h-[30px] w-[30px] text-[#ADB8CC]' />
            </div>
        </div>

    )
}

export default Headcard