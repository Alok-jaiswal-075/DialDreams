import React from "react";
import heroimg from '../../assets/hero.jpg'
import { Link } from "react-router-dom";

const Hero = ()=>{
    return (
        <div className='max-w-[1640px] flex justify-center items-center sm:grid sm:grid-cols-2 sm:gap-4 my-[2rem]'>

            <div className="flex flex-col justify-center items-start p-2">
                <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl my-[0.5rem]'><span className='font-bold text-orange-600/80'>Ordering</span> made effortless</h1>
                <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl my-[0.5rem]'><span className='font-bold text-orange-600/80'>Your</span> favorite phones,</h2>
                <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl my-[0.5rem]'><span className='font-bold text-orange-600/80'>Just</span> a tap away</h2>
                <Link to='/explore'><button className='my-[0.6rem] border border-orange-500 bg-orange-400 rounded-3xl hover:bg-transparent duration-300'>Explore</button></Link>
            </div>
            <div className="hidden sm:flex">
                <img src={heroimg} alt='Mobile' className="w-full rounded-[2rem]"/>
            </div>

        </div>
    )
}

export default Hero