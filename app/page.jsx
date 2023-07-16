"use client"

import React, { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Main from '@/components/Hero/Main'
import Navbar from '@/components/Navbar'


const Home=() => {
    const [isMenuOpen, setIsMenuOpen]=useState(true);
    return (
        <div>
            <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <div className='flex mt-[6rem]'>
                <Sidebar className='' isMenuOpen={isMenuOpen} />
                <Main />
            </div>
        </div>
    )
}

export default Home