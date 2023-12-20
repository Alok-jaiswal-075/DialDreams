import React from "react";

const Navigation = ({active,handleActive})=>{
    return (
        <div className='flex items-center justify-center'>
            <div className='flex justify-center items-center p-1 rounded-full bg-gray-200/60 w-fit'>
                <div className={active ? 'w-fit px-2 rounded-full  cursor-pointer' : 'w-fit px-4 py-1 rounded-full bg-black text-white cursor-pointer'  } onClick={handleActive}>Orders</div>
                <div className={active ? 'w-fit px-4 py-1 rounded-full bg-black text-white cursor-pointer' :'w-fit px-2 rounded-full  cursor-pointer' }  onClick={handleActive}>Mobiles</div>
            </div>
        </div>
    )
}

export default Navigation