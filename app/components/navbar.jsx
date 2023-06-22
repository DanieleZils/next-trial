'use client';

import { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


export default function Navbar() {

    const [ nav, setNav ] = useState(false)

    function handleClick() {
        setNav(!nav)
    }

    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 ">
                    <div className="">
                        <a className="text-2xl font-bold w-full" href="/">Becca</a>
                    </div>
            <ul className="hidden md:flex text-md ">
                <li className="p-8">
                    <a href="/about">About</a>
                </li>
                <li className="p-8">
                    <a href="/violinsOfHope"> Violins of Hope </a>
                </li>
                <li className="p-8">
                    <a href="/videos">Media</a>
                </li>
                <li className="p-8">
                    <a href="/community">Community Engagement</a>
                </li>
                <li className="p-8">
                    <a href="/teaching">Teaching</a>
                </li>
                <li className="p-8">
                    <a href="/upcoming">Events</a>
                </li>
                <li className="p-8">
                    <a href="/contact">Contact</a>
                </li>
            </ul>
                <div onClick={handleClick} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>
                <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-300 bg-gray-100 ease-in-out duration-500 z-50': 'ease-in-out duration-500 fixed left-[-100%] z-50'}>
                <div className="m-4 p-4">
                    <a className="text-2xl font-bold" href="/">Becca</a>
                </div>
                <ul className='uppercase p-4 '>
                    <li className="text-md p-4 border-b border-r-gray-300">
                        <a href="/about">About</a>
                    </li>
                    <li className="text-md p-4 border-b border-r-gray-300">
                        <a href="/violinsOfHope"> Violins of Hope </a>
                    </li>
                    <li className="p-4 border-b border-r-gray-300" >
                        <a href="/videos">Media</a>
                    </li>
                    <li className="p-4 border-b border-r-gray-300">
                        <a href="/community">Community Engagement</a>
                    </li>
                    <li className="p-4 border-b border-r-gray-300">
                        <a href="/teaching">Teaching</a>
                    </li>
                    <li className="p-4 border-b border-r-gray-300">
                        <a href="/upcoming"> Events</a>
                    </li>
                    <li className="p-4 border-b border-r-gray-300">
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
             </div>
        </div>
    )
}



// <nav style: w-full mx-auto ps-20 bg-transparent fixed shadow-lg top-0 z-50 color:white >
// div below nav: md:items-center md:flex md:space-between
// fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-300 bg-gray-100