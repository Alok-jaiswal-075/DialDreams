import React from "react";
import { FaFilter } from "react-icons/fa";
import { MdOutlineSort } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

//name, type, price, processor, memory, OS

const Filter = ({filterBox,handleFilterBox})=>{
    return (
        <div className='max-w-[1640px] border w-full h-7 my-6 rounded-full flex justify-between items-center px-8'>

            

            <div className="flex gap-1 justify-center items-center cursor-pointer text-sm" onClick={()=>{handleFilterBox()}} >
                <FaFilter/> <span>Filter</span>
            </div>





            {!filterBox && <div className='fixed w-full h-screen top-0 left-0 bg-black/80 z-10'></div>}

            <div className={!filterBox ? 'fixed m-auto w-[85%] sm:w-[75%] lg:w-[60%] h-[70%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white z-10 rounded-xl': 'hidden'}>

            <IoIosClose size={30} className='absolute left-4 top-4 cursor-pointer' onClick={()=>{handleFilterBox()}} />

            </div>






            <div className="flex gap-1 justify-center items-center cursor-pointer text-sm">
                <MdOutlineSort /> <span>Sort By</span>
            </div>

        </div>
    )
}

export default Filter