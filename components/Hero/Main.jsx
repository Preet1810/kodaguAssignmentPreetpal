import React from 'react'
import { HiUserGroup } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'

import { BiSolidDashboard } from 'react-icons/bi'
import { BsBuildingsFill, BsFillPersonFill } from 'react-icons/bs'
import { FaGlobeAmericas } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import Headcard from './Headcard'
import ImgCard from './ImgCard'
import SmlCard from './SmlCard'
import AddTask from './AddTask'
import DevApps from './DevApps'

const Main=() => {
    return (
        <div className=''>
            <div className='hidden md:flex py-6 justify-between px-2  border-b-2 border-l-2 border-[#b7b8b9] bg-[#EDEFF2] '>
                <div className='flex gap-x-4 justify-center mt-2 '>
                    <HiUserGroup className='h-[30px] w-[30px] text-[#ADB8CC]' />
                    <p className='text-[#6B7A99] text-center text-[12px] font-[700] leading-[30px]'>List Tasks</p>
                </div>
                <div className='flex gap-x-4 justify-center mt-2'>
                    <MdEmail className='h-[30px] w-[30px] text-[#ADB8CC]' />
                    <p className='text-[#6B7A99] text-center text-[12px] font-[700] leading-[30px]'>Boards</p>
                </div>
                <div className='flex gap-x-4 justify-center mt-2'>
                    <BsBuildingsFill className='h-[30px] w-[30px] text-[#ADB8CC]' />
                    <p className='text-[#6B7A99] text-center text-[12px] font-[700] leading-[30px]'>Calendar</p>
                </div>
                <div className='flex gap-x-4 justify-center mt-2'>
                    <BsFillPersonFill className='h-[30px] w-[30px] text-[#ADB8CC]' />
                    <p className='text-[#6B7A99] text-center text-[12px] font-[700] leading-[30px]'>Gantt</p>
                </div>
                <div className='flex gap-x-4 justify-center mt-2'>
                    <FaGlobeAmericas className='h-[30px] w-[30px] text-[#ADB8CC]' />
                    <p className='text-[#6B7A99] text-center text-[12px] font-[700] leading-[30px]'>Timeline</p>
                </div>
                <div className='flex gap-x-4 justify-center mt-2'>
                    <BiSolidDashboard className='h-[30px] w-[30px] text-[#ADB8CC]' />
                    <p className='text-[#6B7A99] text-center text-[12px] font-[700] leading-[30px]'>Activity</p>
                </div>
                <div className='flex justify-end'>
                    <div className='flex justify-center rounded-3xl p-2  w-[230px] ml-auto bg-white h-[50px]'>
                        <BiSearch className="text-[#98A2B3] text-[2rem]" />
                        <input type="text" placeholder='Search Tasks' className=' text-[#667085] text-[12px] font-[700] w-full leading-[20px] rounded-2xl pl-2 focus:outline-none' />
                    </div>
                </div>
            </div>

            <div className='md:hidden flex py-6 justify-between px-2 border-b-2 border-l-2 border-[#b7b8b9] bg-[#EDEFF2] w-[400px]'>
                <Swiper
                    slidesPerView={1}
                    modules={[Navigation]}
                    className="mySwiper flex justify-center">
                    <SwiperSlide className=''>
                        <div className='flex gap-x-4 justify-center mt-2 '>
                            <HiUserGroup className='h-[30px] w-[30px] text-[#ADB8CC]' />
                            <p className='text-[#6B7A99] text-center text-[12px] font-[700] leading-[30px]'>List Tasks</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='text-center'>
                        <div className='flex gap-x-4 justify-center mt-2'>
                            <MdEmail className='h-[30px] w-[30px] text-[#ADB8CC]' />
                            <p className='text-[#6B7A99] text-center text-[12px] font-[700] leading-[30px]'>List Tasks</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='text-center'>
                        <div className='flex gap-x-4 justify-center mt-2'>
                            <BsBuildingsFill className='h-[30px] w-[30px] text-[#ADB8CC]' />
                            <p className='text-[#6B7A99] text-center text-[12px] font-[700] leading-[30px]'>List Tasks</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='text-center'>
                        <div className='flex gap-x-4 justify-center mt-2'>
                            <BsFillPersonFill className='h-[30px] w-[30px] text-[#ADB8CC]' />
                            <p className='text-[#6B7A99] text-center text-[12px] font-[700] leading-[30px]'>List Tasks</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='text-center'>
                        <div className='flex gap-x-4 justify-center mt-2'>
                            <FaGlobeAmericas className='h-[30px] w-[30px] text-[#ADB8CC]' />
                            <p className='text-[#6B7A99] text-center text-[12px] font-[700] leading-[30px]'>List Tasks</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='text-center'>
                        <div className='flex gap-x-4 justify-center mt-2'>
                            <BiSolidDashboard className='h-[30px] w-[30px] text-[#ADB8CC]' />
                            <p className='text-[#6B7A99] text-center text-[12px] font-[700] leading-[30px]'>List Tasks</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className='h-[50px] w-[50px] bg-white rounded-full p-2.5'>
                    <BiSearch className='w-[30px] h-[30px] text-[#C3CAD9] hover:text-[#3361FF]' />
                </div>
            </div>


            <div className='flex sm:hidden bg-[#EDEFF2] py-10 px-3 justify-center border border-[#b7b8b9] overflow-auto w-[400px]'>
                <Swiper slidesPerView={1}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    centeredSlides={true}
                    modules={[Pagination]}
                    className="mySwiper flex justify-center ">
                    <SwiperSlide>
                        <div className=' flex flex-col justify-center items-center'>
                            <Headcard title="TO DO" borderColor="border-[#8833FF]" />
                            <div className='flex flex-col justify-center items-center gap-y-3 mt-5'>
                                <div className='w-[230px] h-[285px] mb-4'>
                                    <ImgCard title="Make Money Online Through" img="https://res.cloudinary.com/dwh4llt0c/image/upload/v1689311805/cardimg1_sdpiiw.png" />
                                </div>
                                <SmlCard title="Make Money Online Through" />
                                <SmlCard title="Search Engine Optimization ..." />
                                <SmlCard title="Characteristics Of A Successful" />
                                <SmlCard title="Getting Free Publicity" />
                                <SmlCard title="Importance Of The Custom ..." />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col justify-center items-center'>
                            <Headcard title="IN WORK" borderColor="border-[#33BFFF]" />
                            <div className='flex flex-col justify-center items-center gap-y-3 mt-5'>
                                <SmlCard title="Types Of Paper In Catalog" />
                                <div className='w-[230px] h-[285px] mb-4'>
                                    <ImgCard title="Global Resorts Network" img="https://res.cloudinary.com/dwh4llt0c/image/upload/v1689311805/cardimg2_mij6dq.png" />
                                </div>

                                <SmlCard title="Development Apps" />
                                <SmlCard title="Copper Canyon" />
                                <SmlCard title="Make Money Online Through" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col justify-center items-center'>
                            <Headcard title="REVIEW" borderColor="border-[#FFCB33]" />
                            <div className='flex flex-col justify-center items-center gap-y-3 mt-5'>
                                <SmlCard title="Astronomy Or Astrology" />
                                <SmlCard title="Astronomy Binoculars A Great" />
                                <SmlCard title="Task name or type " />
                                <div className='w-[230px] h-[285px] mb-4'>
                                    <ImgCard title="Make Money Online Through" img="https://res.cloudinary.com/dwh4llt0c/image/upload/v1689311805/cardimg1_sdpiiw.png" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col justify-center items-center'>
                            <Headcard title="DONE" borderColor="border-[#29CC39]" />
                            <div className='flex flex-col justify-center items-center gap-y-3 mt-5'>
                                <SmlCard title="Copper Canyon" />
                                <div className='w-[230px] h-[285px] mb-4'>
                                    <ImgCard title="Make Money Online Through" img="https://res.cloudinary.com/dwh4llt0c/image/upload/v1689311805/cardimg2_mij6dq.png" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='hidden sm:flex bg-[#EDEFF2] py-10 px-5 justify-center gap-x-4 border border-[#b7b8b9] overflow-auto '>
                <div className=' flex flex-col justify-center'>
                    <Headcard title="TO DO" borderColor="border-[#8833FF]" />
                    <div className='flex flex-col gap-y-3 mt-5 '>
                        <div className='w-[230px] h-[285px] mb-4'>
                            <ImgCard title="Make Money Online Through" img="https://res.cloudinary.com/dwh4llt0c/image/upload/v1689311805/cardimg1_sdpiiw.png" />
                        </div>
                        <SmlCard title="Make Money Online Through" />
                        <SmlCard title="Search Engine Optimization ..." />
                        <SmlCard title="Characteristics Of A Successful" />
                        <SmlCard title="Getting Free Publicity" />
                        <SmlCard title="Importance Of The Custom ..." />
                        <div className='p-3'>
                            <p className='text-left text-[#6B7A99]  text-[12px] font-[700] leading-[20px] cursor-pointer' >+ NEW TASK</p>
                        </div>
                    </div>
                </div>

                <div>
                    <Headcard title="IN WORK" borderColor="border-[#33BFFF]" />
                    <div className='flex flex-col gap-y-3 mt-5'>
                        <SmlCard title="Types Of Paper In Catalog" />
                        <div className='w-[230px] h-[285px] mb-4'>
                            <ImgCard title="Global Resorts Network" img="https://res.cloudinary.com/dwh4llt0c/image/upload/v1689311805/cardimg2_mij6dq.png" />
                        </div>

                        <SmlCard title="Development Apps" />
                        <SmlCard title="Copper Canyon" />
                        <SmlCard title="Make Money Online Through" />
                        <div className='p-3'>
                            <p className='text-[#6B7A99] text-left text-[12px] font-[700] leading-[20px] cursor-pointer' >+ NEW TASK</p>
                        </div>
                    </div>
                </div>

                <div>
                    <Headcard title="REVIEW" borderColor="border-[#FFCB33]" />
                    <div className='flex flex-col gap-y-3 mt-5'>
                        <SmlCard title="Astronomy Or Astrology" />
                        <SmlCard title="Astronomy Binoculars A Great" />
                        <AddTask />
                    </div>
                </div>

                <div>
                    <Headcard title="DONE" borderColor="border-[#29CC39]" />
                    <div className='flex flex-col gap-y-3 mt-5'>
                        <SmlCard title="Copper Canyon" />
                        <div className='w-[230px] h-[285px] mb-4'>
                            <ImgCard title="Global Resorts Network" img="https://res.cloudinary.com/dwh4llt0c/image/upload/v1689311805/cardimg2_mij6dq.png" />
                        </div>
                        <AddTask />
                    </div>
                </div>

                {/* <div className='absolute right-0 bottom-0'>
                    <DevApps />
                </div> */}
            </div>

        </div>
    )
}

export default Main