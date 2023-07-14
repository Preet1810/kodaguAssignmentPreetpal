import React from 'react'
import smlimg1 from '../public/assets/smlimg1.png'
import Image from 'next/image'

const SmlCard=({ title }) => {
    return (
        <div className=' w-[230px] h-[75px] py-3 px-4 bg-white rounded-lg'>
            <div className='flex'>
                <p className='text-[#ADB8CC]  text-[10px] font-[700] leading-[20px]'>Space Tasks 2</p>
                <div className='ml-auto'>
                    <Image className='right-0' src={smlimg1} alt="profile" />
                </div>
            </div>
            <h2 className='text-[#6B7A99] text-[12px] font-[700] leading-[20px] mt-3'>{title}</h2>
        </div>
    )
}

export default SmlCard