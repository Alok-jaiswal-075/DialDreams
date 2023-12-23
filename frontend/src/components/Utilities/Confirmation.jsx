import React from "react";
import ScaleLoader from 'react-spinners/ScaleLoader'
import { IoIosClose } from "react-icons/io";
import PuffLoader from "react-spinners/PuffLoader";

const Confirmation = ({ message, handleClose, handleNoDecision,handleYesDecision,buttonLoading})=>{
    return(
        <>
            <div className='fixed top-0 left-0 w-full h-screen z-20 bg-black/80'></div>

            <div className='w-[30rem] h-[20rem] fixed z-20 top-[50%] left-[50%] bg-white translate-x-[-50%] translate-y-[-50%] rounded-xl shadow-md shadow-white flex justify-center items-center flex-col gap-4'>

                <IoIosClose size={30} className='absolute top-4 right-4' onClick={handleClose} color="red" />

                {buttonLoading && <PuffLoader size={20}/>}

                <h4 className='text-xl text-gray-700'>{message}</h4>

                <div className='flex gap-3'>
                    <button className={buttonLoading ? 'py-1 px-8 bg-gray-600/30 border-gray-500' : 'py-1 px-8 bg-green-600/30 border-green-500'} onClick={handleYesDecision} disabled={buttonLoading}>Yes</button>

                    <button className={buttonLoading ? 'py-1 px-8 bg-gray-600/30 border-gray-500' : 'py-1 px-8 bg-red-600/30 border-red-500'} onClick={handleNoDecision}>No</button>
                </div>


            </div>
        </>
    )
}

export default Confirmation