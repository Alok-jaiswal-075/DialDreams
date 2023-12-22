import React, { useEffect, useState } from "react";
import profile from '../../assets/profile.avif'

const UserInfo = ({user}) => {

    return (
        <div className='max-w-[1640px] flex flex-col sm:flex-row justify-evenly items-center gap-5 my-10'>

            {/*======== User info =============*/}

            <div className='border rounded-xl p-3 sm:p-5 sm:px-8 flex justify-evenly shadow-lg'>

                <div className='flex items-center gap-1 sm:gap-2 flex-col mr-10'>
                    <div className='w-[5rem] h-[5rem] sm:w-[7rem] sm:h-[7rem]'>
                        <img src={user.profile} alt="" className='w-full h-full object-cover rounded-full' />
                    </div>

                    <h4 className='font-semibold'>{user.fname} {user.lname}</h4>

                </div>

                <div className='flex items-center gap-1 sm:gap-2 flex-col flex-start'>

                    <div className='text-start'>
                        <h5 className='text-sm text-gray-500'>Email</h5>
                        <p className='text-md text-gray-800'>{user.email}</p>
                        <hr className='border-t-3 w-[10rem] sm:w-[15rem]' />
                    </div>

                    <div className='text-start'>
                        <h5 className='text-sm text-gray-500'>Phone</h5>
                        <p className='text-md text-gray-800'>{user.phone}</p>
                        <hr className='border-t-3 w-[10rem] sm:w-[15rem]' />
                    </div>

                </div>

            </div>


            {/*========== Orders info ========================*/}

            <div className='border rounded-xl p-3 sm:p-5 sm:px-8 flex justify-evenly shadow-lg'>

                <div className='flex items-start gap-2 sm:gap-2 flex-col flex-start'>

                    <div className='text-start'>
                        <h5 className='text-sm text-gray-500'>Address</h5>
                        <p className='text-md text-gray-800 text-wrap'>{user.address}</p>
                        <hr className='border-t-3 w-full sm:w-[15rem]' />
                    </div>

                    <div className='text-start'>
                        <h5 className='text-sm text-gray-500'>Pincode</h5>
                        <p className='text-md text-gray-800'>{user.pincode}</p>
                        <hr className='border-t-3 w-[10rem] sm:w-[15rem]' />
                    </div>
                    <div className='text-start'>
                        <h5 className='text-sm text-gray-500'>State</h5>
                        <p className='text-md text-gray-800'>{user.state}</p>
                        <hr className='border-t-3 w-[10rem] sm:w-[15rem]' />
                    </div>

                </div>


            </div>

        </div>
    )
}

export default UserInfo