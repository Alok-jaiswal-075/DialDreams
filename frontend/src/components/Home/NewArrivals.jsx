import React from "react";
import Card from "./Card";

const NewArrivals = () => {
    return (
        <div className='my-[4rem]'>

            <h1 className='text-[1.5rem] font-semibold text-left px-5'>New Arrivals</h1>

            <hr className='mb-[2rem] w-2/3 border-t-4 rounded-full border-orange-400 '/>

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

export default NewArrivals