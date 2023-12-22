import React from "react";
import { FaShoppingCart } from "react-icons/fa";


const Card = ({mobile}) => {

    const { name, colour, storage, price, description, images } = mobile

    return(
        <div className='flex justify-center items-center flex-col p-5 border rounded-xl shadow-xl relative w-full h-[35rem]'>

            <FaShoppingCart className='absolute top-4 left-4' size={20}/>

            <div className='w-[10rem] h-[10rem] overflow-hidden'>
                <img src={images[0]} alt="mobile" className="w-fit h-[10rem]" />
            </div>



            <div className='flex flex-col justify-start items-start'>


                <h4 className='text-sm font-semibold'>{name}</h4>

                <div className='text-[0.85rem]'><span className='font-semibold'>Color:</span>{colour}</div>

                <div className='text-[0.85rem]'><span className='font-semibold'>Storage:</span>{storage} GB</div>

                <div className='text-[0.85rem]'><span className='font-semibold'>&#x20B9;</span> {price}</div>

                <p className='text-[0.7rem] text-left p-3 border border-gray-400/70 rounded-lg my-2 h-[8rem] sm:h-[11rem] overflow-hidden'>{description}</p>

                <button className='w-full my-1 bg-black text-white hover:bg-transparent hover:text-black duration-200 text-sm'>Buy Now</button>
                <button className='w-full my-1 hover:bg-black hover:text-white duration-200 text-sm'>Learn More</button>


            </div>

        </div>
    )
}

export default Card