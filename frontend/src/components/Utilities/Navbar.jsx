import React, { useState } from "react";
import {Link} from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import { GoHomeFill } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { FaTruck } from "react-icons/fa";
import { IoMdHelp } from "react-icons/io";

const Navbar = ()=>{

    const [nav,setNav] = useState(false)


    return(
    <div className="max-w-[1640px] mx-auto flex justify-between items-center sm:p-2 md:p-4">
        <div className="flex justify-between items-center">
            <div className='cursor-pointer'>
                <AiOutlineMenu size={20} onClick={() => setNav(!nav)}/>
            </div>
            <div className='pl-2 text-xl sm:text-2xl md:text-3xl'>
                Dial <span className='font-bold text-orange-600/80'>Dreams</span>
            </div>
        </div>
            
        <div className='hidden sm:flex bg-gray-200 items-center pl-4 gap-2 p-1 sm:px-3 rounded-full w-[200px] sm:w-[400px] lg:[500px]'>
            <FaSearch />
            <input type="text" placeholder="Search for mobile..." className='bg-transparent w-full focus:outline-none'/>
        </div>

        <button className=' bg-black text-white rounded-full'>
            <FaShoppingCart size={20}/>
        </button>

        {nav && <div className='bg-black/80 w-full h-screen fixed z-10 top-0 left-0'></div>}

        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 ease-in-out' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 ease-in-out'}>
            <IoIosClose size={30} className='absolute right-4 top-4 cursor-pointer' onClick={()=>{setNav(!nav)}} />
            <div className='pl-2 py-4 text-md sm:text-lg md:text-2xl'>
                Dial <span className='font-bold text-orange-600/80'>Dreams</span>
            </div>


            <ul className='flex flex-col justify-start items-start mt-[70px] px-[40px] gap-5'>
                <li className='flex gap-3 justify-center items-center'><GoHomeFill/>Home</li>
                <li className='flex gap-3 justify-center items-center'><FaTruck />Orders</li>
                <li className='flex gap-3 justify-center items-center'><IoMdHelp />Help</li>
                <li className='flex gap-3 justify-center items-center'><CgProfile/>Profile</li>
            </ul>
        </div>
    </div>
    )
}

export default Navbar