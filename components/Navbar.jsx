import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsThreeDots } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { LiaUserCircleSolid } from 'react-icons/lia'
import { TbBellRingingFilled } from 'react-icons/tb'
import { ImCross } from 'react-icons/im'
const Navbar=() => {
    const [isMenuOpen, setIsMenuOpen]=useState(false);

    const toggleMenu=() => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-[#EDEFF2] border-b-2 border-[#b7b8b9]">
            <div className="">
                <div className="flex items-center justify-between h-24 px-5">
                    <div className="flex items-center">
                        <div className='p-3 rounded-full bg-white'>
                            <RxHamburgerMenu />
                        </div>
                        <div className="pl-7 flex-shrink-0">
                            <h2 className='text-[#4D5E80] text-[18px] font-[700] leading-[30px]'>Constructor</h2>
                        </div>
                        <div className="hidden md:block mr-8">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="#" className="text-[#7D8FB3] hover:text-white px-3 py-2 rounded-md text-[13px] leading-[25px] font-[700]">Dashboard</a>
                                <a href="#" className="text-[#7D8FB3] hover:text-white px-3 py-2 rounded-md text-[13px] leading-[25px] font-[700]">About Us</a>
                                <a href="#" className="text-[#7D8FB3] hover:text-white px-3 py-2 rounded-md text-[13px] leading-[25px] font-[700]">News</a>
                                <a href="#" className="text-[#7D8FB3] hover:text-white px-3 py-2 rounded-md text-[13px] leading-[25px] font-[700]">User Policy</a>
                                <a href="#" className="text-[#7D8FB3] hover:text-white px-3 py-2 rounded-md text-[13px] leading-[25px] font-[700]">Contacts</a>
                                <BsThreeDots className='text-[#C3CAD9]' />
                            </div>
                        </div>
                        <div className='flex rounded-3xl p-2  w-[430px] ml-auto bg-white h-[50px]'>
                            <BiSearch className="text-[#98A2B3] text-[2rem]" />
                            <input type="text" placeholder='Search Products, Orders and Clients' className=' text-[#667085] text-[12px] font-[700] w-full leading-[20px] rounded-2xl pl-2 focus:outline-none' />
                        </div>
                    </div>
                    <div className="">
                        <div className='flex p-2 gap-x-3'>
                            <LiaUserCircleSolid className='text-[#C3CAD9] h-[30px] w-[30px]' />
                            <p className='text-[#7D8FB3] px-2 py-1 hover:text-white text-[13px] leading-[25px] font-[700]'>Clayton Santos</p>
                            <div className='p-3 bg-white rounded-full'>
                                <TbBellRingingFilled className='h-[20px] w-[20px] text-[#C3CAD9]' />
                            </div>
                            <div className='p-3 bg-white rounded-full'>
                                <ImCross className='h-[20px] w-[20px] text-[#C3CAD9]' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
