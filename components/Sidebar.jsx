import React from 'react'
import { AiFillCompass, AiFillStar, AiFillCloud, AiFillSetting } from 'react-icons/ai'
import { BiSolidMessageSquareDetail, BiSolidDashboard } from 'react-icons/bi'
import { BsFillArrowUpRightCircleFill, BsBuildingsFill, BsFillPersonFill, BsThreeDots } from 'react-icons/bs'
import { FaGlobeAmericas } from 'react-icons/fa'
import { IoIosAddCircle } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { VscTasklist } from 'react-icons/vsc'
import { HiUserGroup } from 'react-icons/hi'


import Image from 'next/image'
const Sidebar=() => {
    return (
        <div className='absolute flex bg-[#EDEFF2]'>
            <div className='flex flex-col justify-between px-5 pt-10 border-r-2 border-[#b7b8b9] h-[1075px]'>
                <div className='flex flex-col gap-y-4'>
                    <div className='h-[50px] w-[50px] bg-white rounded-full p-2.5'>
                        <AiFillCompass className='w-[30px] h-[30px] text-[#C3CAD9] hover:text-[#3361FF]' />
                    </div>
                    <div className='h-[50px] w-[50px] bg-white rounded-full p-2.5'>
                        <AiFillStar className='w-[30px] h-[30px] text-[#C3CAD9] hover:text-[#3361FF]' />
                    </div>
                    <div className='h-[50px] w-[50px] bg-white rounded-full p-2.5'>
                        <BiSolidMessageSquareDetail className='w-[30px] h-[30px] text-[#C3CAD9] hover:text-[#3361FF]' />
                    </div>
                    <div className='h-[50px] w-[50px] bg-white rounded-full p-2.5'>
                        <BsFillArrowUpRightCircleFill className='w-[30px] h-[30px] text-[#C3CAD9] hover:text-[#3361FF]' />
                    </div>
                    <div className='h-[50px] w-[50px] bg-white rounded-full p-2.5'>
                        <FaGlobeAmericas className='w-[30px] h-[30px] text-[#C3CAD9] hover:text-[#3361FF]' />
                    </div>
                    <div className='h-[50px] w-[50px] bg-white rounded-full p-2.5'>
                        <BsBuildingsFill className='w-[30px] h-[30px] text-[#C3CAD9] hover:text-[#3361FF]' />
                    </div>
                </div>
                <div className='flex flex-col justify-end gap-y-3 pb-6'>
                    <div className='h-[50px] w-[50px] bg-white rounded-full'>
                        <Image src="https://res.cloudinary.com/dwh4llt0c/image/upload/v1689311804/avatarimg1_woxe55.png" width={50} height={50} alt='img' className=' text-[#C3CAD9] hover:text-[#3361FF]' />
                    </div>
                    <div className='h-[50px] w-[50px] bg-white rounded-full'>
                        <Image src="https://res.cloudinary.com/dwh4llt0c/image/upload/v1689311804/avatarimg3_kpbe6p.png" width={50} height={50} alt='img' className=' text-[#C3CAD9] hover:text-[#3361FF]' />
                    </div>
                    <div className='h-[50px] w-[50px] bg-white rounded-full'>
                        <Image src="https://res.cloudinary.com/dwh4llt0c/image/upload/v1689311804/avatarimg4_ofy0cu.png" width={50} height={50} alt='img' className=' text-[#C3CAD9] hover:text-[#3361FF]' />
                    </div>
                    <div className='h-[50px] w-[50px] bg-white rounded-full'>
                        <Image src="https://res.cloudinary.com/dwh4llt0c/image/upload/v1689311804/avatarimg2_erul35.png" width={50} height={50} alt='img' className=' text-[#C3CAD9] hover:text-[#3361FF]' />
                    </div>
                    <div className='h-[50px] w-[50px] bg-white rounded-full p-2.5'>
                        <IoIosAddCircle className='w-[30px] h-[30px] text-[#C3CAD9] hover:text-[#3361FF]' />
                    </div>
                </div>
            </div>
            <div className='pt-10 px-14'>
                <div className='w-[240px] h-[283px]'>
                    <div className='flex'>
                        <div className='h-[50px] w-[50px] bg-white rounded-full p-2.5'>
                            <BsFillPersonFill className='w-[30px] h-[30px] text-[#C3CAD9] hover:text-[#3361FF]' />
                        </div>
                        <div className='h-[50px] w-[50px] bg-white rounded-full p-2.5 ml-auto'>
                            <BsThreeDots className='w-[30px] h-[30px] text-[#C3CAD9] hover:text-[#3361FF]' />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='border-2 rounded-full border-blue-600 p-3'>
                            <div class="bg-yellow-400 rounded-full w-40 h-40">
                                <Image src="https://res.cloudinary.com/dwh4llt0c/image/upload/v1689311805/main_vjgimz.png" width={110} height={110} alt='main' className="w-full h-full rounded-full" />
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col pt-10 gap-3'>
                        <p className='text-[#6B7A99] text-center text-[16px] font-[700] leading-[30px]'>Hello Alfred Bryant</p>
                        <p className='text-[#6B7A99] text-center text-[16px] font-[700] leading-[30px]'>adrain.nader@yahoo.com</p>
                    </div>

                    <div className='grid grid-cols-2 pt-8 gap-10 '>
                        <div className='flex justify-center'>
                            <div className='hover:cursor-pointer'>
                                <div className='flex justify-center pb-5'>
                                    <BiSolidDashboard className='w-[30px] h-[30px] text-[#C3CAD9] hover:text-[#3361FF]' />
                                </div>
                                <p className='text-center text-[#6B7A99] text-[12px] font-[700] leading-[20px]'>Dashboard</p>
                            </div>
                        </div>
                        <div className='flex justify-center gap-7'>
                            <div className='hover:cursor-pointer'>
                                <div className='flex justify-center pb-5'>
                                    <VscTasklist className='w-[30px] h-[30px] text-[#C3CAD9] hover:text-[#3361FF]' />
                                </div>
                                <p className='text-center text-[#6B7A99] text-[12px] font-[700] leading-[20px]'>Notes</p>
                            </div>
                        </div>
                        <div className='flex justify-center gap-7'>
                            <div className='hover:cursor-pointer'>
                                <div className='flex justify-center pb-5'>
                                    <VscTasklist className='w-[30px] h-[30px] text-[#C3CAD9] hover:text-[#3361FF]' />
                                </div>
                                <p className='text-center text-[#6B7A99] text-[12px] font-[700] leading-[20px]'>Tasks</p>
                            </div>
                        </div>
                        <div className='flex justify-center gap-7'>
                            <div className='hover:cursor-pointer'>
                                <div className='flex justify-center pb-5'>
                                    <AiFillCloud className='w-[30px] h-[30px] text-[#C3CAD9] hover:text-[#3361FF]' />
                                </div>
                                <p className='text-center text-[#6B7A99] text-[12px] font-[700] leading-[20px]'>Files</p>
                            </div>
                        </div>
                        <div className='flex justify-center gap-7'>
                            <div className='hover:cursor-pointer'>
                                <div className='flex justify-center pb-5'>
                                    <MdEmail className='w-[30px] h-[30px] text-[#C3CAD9] hover:text-[#3361FF]' />
                                </div>
                                <p className='text-center text-[#6B7A99] text-[12px] font-[700] leading-[20px]'>Emails</p>
                            </div>
                        </div>
                        <div className='flex justify-center gap-7'>
                            <div className='hover:cursor-pointer'>
                                <div className='flex justify-center pb-5'>
                                    <BiSolidDashboard className='w-[30px] h-[30px] text-[#C3CAD9] hover:text-[#3361FF]' />
                                </div>
                                <p className='text-center text-[#6B7A99] text-[12px] font-[700] leading-[20px]'>Client</p>
                            </div>
                        </div>
                        <div className='flex justify-center gap-7'>
                            <div className='hover:cursor-pointer'>
                                <div className='flex justify-center pb-5'>
                                    <HiUserGroup className='w-[30px] h-[30px] text-[#C3CAD9] hover:text-[#3361FF]' />
                                </div>
                                <p className='text-center text-[#6B7A99] text-[12px] font-[700] leading-[20px]'>Calaender</p>
                            </div>
                        </div>
                        <div className='flex justify-center gap-7'>
                            <div className='hover:cursor-pointer'>
                                <div className='flex justify-center pb-5'>
                                    <AiFillSetting className='w-[30px] h-[30px] text-[#C3CAD9] hover:text-[#3361FF]' />
                                </div>
                                <p className='text-center text-[#6B7A99] text-[12px] font-[700] hover:text-[#3361FF] leading-[20px]'>Settings</p>
                            </div>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sidebar