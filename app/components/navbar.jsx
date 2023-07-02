'use client';

import { useState, useEffect } from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


export default function Navbar() {

    const [ nav, setNav ] = useState(false)
  

    function handleClick() {
        setNav(!nav)
    }


    return (
        <div className='navbar fixed z-50 w-full flex justify-between items-center h-20 px-4 md:px-12'>
                    <div className="">
                        <a className="text-2xl font-bold w-full px-2" href="/">Becca Kasdan</a>
                    </div>
            <ul className="hidden md:flex xl:text-lg xl:font-semibold sm:text-sm sm:font-semibold sm:text-center">
                <li className="p-8 group">
                    <a href="/about" className="relative overflow-hidden inline-block">About
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-maroon transform scale-x-0 group-hover:scale-x-100 transition duration-300 ease-in-out"></span>
                    </a>
                </li>
                <li className="p-8 group">
                    <a href="/violinsOfHope" className="relative overflow-hidden inline-block"> VoH Cabaret Concert
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-maroon transform scale-x-0 group-hover:scale-x-100 transition duration-300 ease-in-out"></span>
                    </a>
                </li>
                <li className="p-8 group">
                    <a href="/videos" className="relative overflow-hidden inline-block">Media
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-maroon transform scale-x-0 group-hover:scale-x-100 transition duration-300 ease-in-out"></span>
                    </a>
                </li>
                <li className="p-8 group">
                    <a href="/community" className="relative overflow-hidden inline-block">Community Engagement
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-maroon transform scale-x-0 group-hover:scale-x-100 transition duration-300 ease-in-out"></span>
                    </a>
                </li>
                <li className="p-8 group">
                    <a href="/teaching" className="relative overflow-hidden inline-block">Teaching
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-maroon transform scale-x-0 group-hover:scale-x-100 transition duration-300 ease-in-out"></span>
                    </a>
                </li>
                <li className="p-8 group">
                    <a href="/upcoming" className="relative overflow-hidden inline-block">Upcoming Events
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-maroon transform scale-x-0 group-hover:scale-x-100 transition duration-300 ease-in-out"></span>
                    </a>
                </li>
                <li className="p-8 group">
                    <a href="/contact" className="relative overflow-hidden inline-block">Contact
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-maroon transform scale-x-0 group-hover:scale-x-100 transition duration-300 ease-in-out"></span>
                    </a>
                </li>
            </ul>
                <div onClick={handleClick} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>
                <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-300 bg-gray-100 ease-in-out duration-500 z-50': 'ease-in-out duration-500 fixed left-[-100%] z-50'}>
                <div className="m-4 p-4">
                    <a className="text-2xl font-bold" href="/">Becca Kasdan</a>
                </div>
                <ul className='uppercase p-4 '>
                    <li className="text-md p-4 border-b border-r-gray-300 group">
                        <a href="/about" className="relative overflow-hidden inline-block">About
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-maroon transform scale-x-0 group-hover:scale-x-100 transition duration-300 ease-in-out"></span>
                        </a>
                    </li>
                    <li className="text-md p-4 border-b border-r-gray-300 group">
                    <a href="/violinsOfHope" className="relative overflow-hidden inline-block">VoH Cabaret Concert
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-maroon transform scale-x-0 group-hover:scale-x-100 transition duration-300 ease-in-out"></span>
                    </a>
                    </li>
                    <li className="p-4 border-b border-r-gray-300 group" >
                        <a href="/videos" className="relative overflow-hidden inline-block">Media
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-maroon transform scale-x-0 group-hover:scale-x-100 transition duration-300 ease-in-out"></span>
                        </a>
                    </li>
                    <li className="p-4 border-b border-r-gray-300 group">
                        <a href="/community" className="relative overflow-hidden inline-block">Community Engagement
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-maroon transform scale-x-0 group-hover:scale-x-100 transition duration-300 ease-in-out"></span>
                        </a>
                    </li>
                    <li className="p-4 border-b border-r-gray-300 group">
                        <a href="/teaching" className="relative overflow-hidden inline-block">Teaching
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-maroon transform scale-x-0 group-hover:scale-x-100 transition duration-300 ease-in-out"></span>
                        </a>
                    </li>
                    <li className="p-4 border-b border-r-gray-300 group">
                        <a href="/upcoming" className="relative overflow-hidden inline-block">Upcoming Events
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-maroon transform scale-x-0 group-hover:scale-x-100 transition duration-300 ease-in-out"></span>
                            </a>
                    </li>
                    <li className="p-4 border-b border-r-gray-300 group">
                        <a href="/contact" className="relative overflow-hidden inline-block">Contact
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-maroon transform scale-x-0 group-hover:scale-x-100 transition duration-300 ease-in-out"></span>
                        </a>
                    </li>
                </ul>
             </div>
        </div>
    )
}



// <nav style: w-full mx-auto ps-20 bg-transparent fixed shadow-lg top-0 z-50 color:white >
// div below nav: md:items-center md:flex md:space-between
// fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-300 bg-gray-100