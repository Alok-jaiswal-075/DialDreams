import React from "react";
import { IoIosClose } from "react-icons/io";
import {Link} from 'react-router-dom'


const Cart = ({cartOpen,handleSetCartOpen})=>{
    return(
        <>
            {cartOpen && <div className='bg-black/80 w-full h-screen fixed z-10 top-0 left-0'></div>}

            <div className={cartOpen ? 'fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300 linear sm:w-3/5 cursor-pointer' : 'fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300 linear sm:w-3/5 cursor-pointer' } onClick={()=>{handleSetCartOpen()}}>

                <IoIosClose size={30} className='absolute left-4 top-4 cursor-pointer' onClick={()=>{handleSetCartOpen()}} />
                <div className='pl-2 py-4 text-md sm:text-lg md:text-2xl'>
                    Dial <span className='font-bold text-orange-600/80'>Dreams</span>
                </div>

            </div>
        </>
    )
}

export default Cart