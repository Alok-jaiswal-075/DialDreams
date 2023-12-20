import React from "react";
import mobile1 from '../../assets/mobile1.avif'
import mobile2 from '../../assets/mobile2.avif'
import { FaShoppingCart } from "react-icons/fa";


const Card = () => {
    return(
        <div className='flex justify-center items-center flex-col p-5 border rounded-xl shadow-xl relative w-full h-[35rem]'>

            <div className='w-[10rem] h-[10rem] overflow-hidden'>
            <img src={mobile1} alt="mobile" className="w-[10rem] h-[10rem]"/>
            </div>



            <div className='flex flex-col justify-start items-start'>


                <h4 className='text-sm font-semibold'>Galaxy Z Fold5 (Special Edition)</h4>

                <div className='text-[0.85rem]'><span className='font-semibold'>Color:</span>Gray</div>

                <div className='text-[0.85rem]'><span className='font-semibold'>Storage:</span>256 GB</div>

                <div className='text-[0.85rem]'><span className='font-semibold'>&#x20B9;</span> 164999.00</div>

                <p className='text-[0.7rem] text-left p-3 border border-gray-400/70 rounded-lg my-2 h-[8rem] sm:h-[11rem] overflow-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, saepe perferendis facere pariatur in exercitationem doloribus, debitis quas est deserunt cum suscipit, provident aperiam alias nam eius. Nisi, incidunt recusandae.</p>

                <button className='w-full my-1 bg-black text-white hover:bg-transparent hover:text-black duration-200 text-sm'>Edit</button>
                <button className='w-full my-1 hover:bg-black hover:text-white duration-200 text-sm'>Learn More</button>


            </div>

        </div>
    )
}

export default Card