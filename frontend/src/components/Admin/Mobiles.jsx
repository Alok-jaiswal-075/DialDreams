import React from "react";
import { IoMdAdd } from "react-icons/io";
import Card from "./Card";

const Mobiles = ()=>{
    return(
        <div className='max-w-[1640px] flex flex-col justify-evenly items-center gap-5 my-10'>
            <button className='p-3 rounded-full bg-gray-300/70 shadow-lg'><IoMdAdd size={30}/></button>

            <div className='max-w-[1640px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center h-'>


                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>

            </div>

        </div>
    )
}

export default Mobiles