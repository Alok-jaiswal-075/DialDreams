import React from "react";
import { IoMdAdd } from "react-icons/io";
import Card from "./Card";
import { Link } from "react-router-dom";

const Mobiles = ({mobiles})=>{
    return(
        <div className='max-w-[1640px] flex flex-col justify-evenly items-center gap-5 my-10'>
            <Link to='/mobile/add'><button className='p-3 rounded-full bg-gray-300/70 shadow-lg'><IoMdAdd size={30} /></button></Link>

            <div className='max-w-[1640px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center h-'>

                {mobiles && mobiles.map((mobile,index)=><Card key={index} mobile={mobile}/>)}
                
            </div>

        </div>
    )
}

export default Mobiles