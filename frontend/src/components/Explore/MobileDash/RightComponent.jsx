import React from "react";

const RightComponent = ({mobile}) => {

    const {name,colour,price,storage,memory,processor,type,fcamera,bcamera,description,discount} = mobile

    return (
        <>
            <div className='flex flex-col w-full h-fit m-2 px-[1rem] py-4'>

                <div className='text-start'>
                    <h4 className='text-gray-600/80 text-sm pl-4'>NAME</h4>
                    <p className='text-2 pl-4'>{name}</p>
                    <hr className='my-2 border-t-[0.1rem] rounded-full w-full' />
                </div>

                <div className='text-start'>
                    <h4 className='text-gray-600/80 text-sm pl-4'>Color</h4>
                    <p className='text-2 pl-4'>{colour}</p>
                    <hr className='my-2 border-t-[0.1rem] rounded-full w-full' />
                </div>

                <div className='text-start'>
                    <h4 className='text-gray-600/80 text-sm pl-4'>PRICE</h4>
                    <p className='text-2 pl-4'><span className='font-semibold'>&#x20B9;</span> {price}</p>
                    <hr className='my-2 border-t-[0.1rem] rounded-full w-full' />
                </div>

                <div className='text-start'>
                    <h4 className='text-gray-600/80 text-sm pl-4'>STORAGE</h4>
                    <p className='text-2 pl-4'>{storage} GB</p>
                    <hr className='my-2 border-t-[0.1rem] rounded-full w-full' />
                </div>

                <div className='text-start'>
                    <h4 className='text-gray-600/80 text-sm pl-4'>RAM</h4>
                    <p className='text-2 pl-4'>{memory} GB</p>
                    <hr className='my-2 border-t-[0.1rem] rounded-full w-full' />
                </div>

                <div className='text-start'>
                    <h4 className='text-gray-600/80 text-sm pl-4'>PROCESSOR</h4>
                    <p className='text-2 pl-4'>{processor}</p>
                    <hr className='my-2 border-t-[0.1rem] rounded-full w-full' />
                </div>

                <div className='text-start'>
                    <h4 className='text-gray-600/80 text-sm pl-4'>TYPE</h4>
                    <p className='text-2 pl-4'>{type}</p>
                    <hr className='my-2 border-t-[0.1rem] rounded-full w-full' />
                </div>

                <div className='text-start'>
                    <h4 className='text-gray-600/80 text-sm pl-4'>DISCOUNT</h4>
                    <p className='text-2 pl-4'>{discount}%</p>
                    <hr className='my-2 border-t-[0.1rem] rounded-full w-full' />
                </div>

                <div className='text-start'>
                    <h4 className='text-gray-600/80 text-sm pl-4'>FRONT CAMERA</h4>
                    <p className='text-2 pl-4'>{fcamera} mp</p>
                    <hr className='my-2 border-t-[0.1rem] rounded-full w-full' />
                </div>

                <div className='text-start'>
                    <h4 className='text-gray-600/80 text-sm pl-4'>BACK CAMERA</h4>
                    <p className='text-2 pl-4'>{bcamera} mp</p>
                    <hr className='my-2 border-t-[0.1rem] rounded-full w-full' />
                </div>

                <div className='text-start'>
                    <h4 className='text-gray-600/80 text-sm pl-4'>DESCRIPTION</h4>
                    <p className='text-sm pl-4'>{description}</p>
                </div>


            </div>
        </>
    )
}

export default RightComponent