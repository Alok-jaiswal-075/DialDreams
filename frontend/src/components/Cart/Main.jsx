import React from "react";
import Navbar from "../Utilities/Navbar/Navbar";

const Cart = ()=>{
    return(
        <div className='relative top-0 right-0'>
            {nav && <div className='bg-black/80 w-full h-screen fixed z-10 top-0 left-0'></div>}

            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 ease-in-out' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 ease-in-out'}>
                <IoIosClose size={30} className='absolute right-4 top-4 cursor-pointer' onClick={()=>{setNav(!nav)}} />
                <div className='pl-2 py-4 text-md sm:text-lg md:text-2xl'>
                    Dial <span className='font-bold text-orange-600/80'>Dreams</span>
                </div>


                <ul className='flex flex-col justify-start items-start mt-[70px] px-[40px] gap-5'>
                    <Link to='/'><li className='flex gap-3 justify-center items-center'><GoHomeFill/>Home</li></Link>
                    <Link><li className='flex gap-3 justify-center items-center'><FaTruck />Orders</li></Link>
                    <Link><li className='flex gap-3 justify-center items-center'><IoMdHelp />Help</li></Link>
                    <Link to='/dashboard'><li className='flex gap-3 justify-center items-center'><CgProfile/>Profile</li></Link>
                    <Link to='/admin'><li className='flex gap-3 justify-center items-center'><RiAdminFill />Admin</li></Link>

                </ul>
            </div>
        </div>
    )
}

export default Cart