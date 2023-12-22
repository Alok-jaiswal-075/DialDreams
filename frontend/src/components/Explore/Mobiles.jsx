import React from "react";
import Card from "./Card";

const Mobiles = ({mobiles}) => {
    return (
        <div className='my-[2rem]'>

            <div className='max-w-[1640px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center h-'>


                {mobiles && mobiles.map((mobile,index) => <Card key={index} mobile={mobile} />)}

            </div>
        </div>
    )
}

export default Mobiles