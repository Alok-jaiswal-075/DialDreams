import React from "react";
import Card from "./Card";

const Mobiles = () => {
    return (
        <div className='my-[2rem]'>

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