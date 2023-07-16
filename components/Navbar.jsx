'use client'
import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BiSearch } from 'react-icons/bi'
import { LiaUserCircleSolid } from 'react-icons/lia'
import { TbBellRingingFilled } from 'react-icons/tb'
import { ImCross } from 'react-icons/im'
const Navbar=({ isMenuOpen, setIsMenuOpen }) => {

    const toggleMenu=() => {
        setIsMenuOpen(!isMenuOpen);
    };

    let Links=[
        { name: "Dashboard", link: "/" },
        { name: "About Us", link: "/" },
        { name: "News", link: "/" },
        { name: "User Policy", link: "/" },
        { name: "Contacts", link: "/" },
    ];
    let [open, setOpen]=useState(false);

    return (
        <div className='bg-[#EDEFF2] border-b-2 border-[#b7b8b9] h-[75px] shadow-md w-full fixed top-0 left-0 z-50'>
            <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
                <div className='cursor-pointer flex items-center
      text-gray-800'>
                    <div className='p-3 rounded-full bg-white md:block hidden'>
                        <RxHamburgerMenu className='cursor-pointer' onClick={toggleMenu} />
                    </div>
                    <div className="pl-7 flex-shrink-0">
                        <h2 className='text-[#4D5E80] text-[18px] font-[700] leading-[30px]'>Constructor</h2>
                    </div>
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    {open? (
                        <RxHamburgerMenu className='text-black' />
                    ):<RxHamburgerMenu className='text-black' />
                    }
                </div>
                <div className='flex justify-center items-center align-middle'>
                    <ul className={`bg-white md:bg-[#0000] mr-4 md:flex md:items-center md:pb-0 pb-12 absolute md:static w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in z-50 ${open? 'top-20  ':'top-[-490px]'}`}>
                        {
                            Links.map((link) => (
                                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                    <a href={link.link} className=' hover:text-gray-400 text-[#7D8FB3] px-3 py-2 rounded-md text-[13px] leading-[25px] font-[700] duration-500'>{link.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='mr-6 hidden md:flex rounded-3xl p-2  w-[330px] ml-auto bg-white h-[50px]'>
                        <BiSearch className="text-[#98A2B3] text-[2rem]" />
                        <input type="text" placeholder='Search Products, Orders and Clients' className=' text-[#667085] text-[12px] font-[700] w-full leading-[20px] rounded-2xl pl-2 focus:outline-none' />
                    </div>
                    <div className='hidden md:flex items-center right-0 gap-x-3'>
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

    );
};

export default Navbar;

{/* <nav className="bg-[#EDEFF2] border-b-2 border-[#b7b8b9] h-[75px] flex items-center w-full justify-between px-7">
            <div className="flex items-center">
                <div className='p-3 rounded-full bg-white'>
                    <RxHamburgerMenu className='cursor-pointer' onClick={toggleMenu} />
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
                <div className='hidden md:flex rounded-3xl p-2  w-[330px] ml-auto bg-white h-[50px]'>
                    <BiSearch className="text-[#98A2B3] text-[2rem]" />
                    <input type="text" placeholder='Search Products, Orders and Clients' className=' text-[#667085] text-[12px] font-[700] w-full leading-[20px] rounded-2xl pl-2 focus:outline-none' />
                </div>
            </div>
            <div className='block md:hidden items-center right-0'>
                <LiaUserCircleSolid className='text-[#C3CAD9] h-[30px] w-[30px]' />
            </div>
            <div className='hidden md:flex items-center right-0 gap-x-3'>
                <LiaUserCircleSolid className='text-[#C3CAD9] h-[30px] w-[30px]' />
                <p className='text-[#7D8FB3] px-2 py-1 hover:text-white text-[13px] leading-[25px] font-[700]'>Clayton Santos</p>
                <div className='p-3 bg-white rounded-full'>
                    <TbBellRingingFilled className='h-[20px] w-[20px] text-[#C3CAD9]' />
                </div>
                <div className='p-3 bg-white rounded-full'>
                    <ImCross className='h-[20px] w-[20px] text-[#C3CAD9]' />
                </div>
            </div>

        </nav> */}