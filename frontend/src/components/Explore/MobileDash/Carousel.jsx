import { useState } from "react";
import { FaChevronLeft,FaChevronCircleRight, FaChevronRight } from "react-icons/fa";

export default function Carousel({images}) {

    
    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(images.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === images.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    return (
        <div className='flex justify-center items-center'>
            <div className="overflow-hidden relative rounded-2xl border shadow-2xl m-2 self-start w-[15rem] h-[20rem] sm:w-[23rem] sm:h-[28rem]">
                <div
                    className={`flex transition ease-out duration-40 w-full h-full`}
                    style={{
                        transform: `translateX(-${current * 100}%)`,
                    }}
                >
                    {images && images.map((src, index) => {
                        return <img src={src} key={index} className='w-fit object-contain px-1' />;
                    })}
                </div>

                <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-5 text-3xl">
                    <button onClick={previousSlide} className='p-0 border-none'>
                        <FaChevronLeft size={20} color="black" />
                    </button>
                    <button onClick={nextSlide} className='p-0 border-none'>
                        <FaChevronRight size={20} color="black" />
                    </button>
                </div>

                <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                    {images && images.map((s, i) => {
                        return (
                            <div
                                onClick={() => {
                                    setCurrent(i);
                                }}
                                key={"circle" + i}
                                className={`rounded-full  h-[0.1rem] cursor-pointer duration-200 ${i == current ? "bg-black w-[1.2rem]" : "bg-gray-500 w-[0.3rem]"
                                    }`}
                            ></div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}