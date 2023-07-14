import React from 'react'
import Image from 'next/image'

const SmlCard=({ title }) => {
    return (
        <div className=' w-[230px] h-[75px] py-3 px-4 bg-white rounded-lg'>
            <div className='flex'>
                <p className='text-[#ADB8CC]  text-[10px] font-[700] leading-[20px]'>Space Tasks 2</p>
                <div className='ml-auto'>
                    <Image className='right-0' src="https://res.cloudinary.com/dwh4llt0c/image/upload/v1689311805/smlimg1_gvybdf.png" width={20} height={20} alt="profile" />
                </div>
            </div>
            <h2 className='text-[#6B7A99] text-[12px] font-[700] leading-[20px] mt-3'>{title}</h2>
        </div>
    )
}

export default SmlCard