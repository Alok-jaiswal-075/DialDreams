import React, { useState } from "react";
import Navbar from "../Utilities/Navbar/Navbar";
import { CiMobile1 } from "react-icons/ci";

const AddMobile = () => {
    const [mobileDetails, setMobileDetails] = useState({
        name: "",
        type: "",
        price: "",
        os: "",
        memory: "",
        storage: "",
        description: "",
        processor: "",
        quantity: "",
        discount: "",
        colour: "",
        fcamera: "",
        bcamera: "",
    });

    const [images, setImages] = useState([]);

    const handleInput = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        setMobileDetails({ ...mobileDetails, [field]: value })
    }

    const handleImageChange = (e) => {
        const selectedImages = Array.from(e.target.files);
        setImages(selectedImages);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(mobileDetails);
        console.log(images);
    }

    return (
        <>
            <Navbar />

            <div className='max-w-[1640px] flex justify-center items-center my-[3rem]'>

                <form method="POST" noValidate autoComplete="off" className='flex flex-col border justify-center items-center py-6 px-4 gap-4 rounded-xl shadow-xl'>

                    <CiMobile1 size={30}/>

                    <input type="text" placeholder="Name" name="name" value={mobileDetails.name} onChange={handleInput} required className='border rounded-md px-4 py-1 text-gray-600' />

                    <input type="text" placeholder="Type" name="type" value={mobileDetails.type} onChange={handleInput} required className='border rounded-md px-4 py-1 text-gray-600' />

                    <input type="text" placeholder="Price" name="price" value={mobileDetails.price} onChange={handleInput} required className='border rounded-md px-4 py-1 text-gray-600' />

                    <input type="text" placeholder="Operating System" name="os" value={mobileDetails.os} onChange={handleInput} required className='border rounded-md px-4 py-1 text-gray-600' />

                    <input type="text" placeholder="Memory" name="memory" value={mobileDetails.memory} onChange={handleInput} required className='border rounded-md px-4 py-1 text-gray-600' />

                    <input type="text" placeholder="Storage" name="storage" value={mobileDetails.storage} onChange={handleInput} required className='border rounded-md px-4 py-1 text-gray-600' />

                    <textarea name="description" placeholder="Description" cols="23" rows="5" className='border rounded-md px-4 py-1 text-gray-600' required onChange={handleInput}></textarea>

                    <input type="text" placeholder="Processor" name="processor" value={mobileDetails.processor} onChange={handleInput} required className='border rounded-md px-4 py-1 text-gray-600' />

                    <input type="number" placeholder="Quantity" name="quantity" value={mobileDetails.quantity} onChange={handleInput} required className='border rounded-md px-4 py-1 text-gray-600' />

                    <input type="text" placeholder="Discount" name="discount" value={mobileDetails.discount} onChange={handleInput} required className='border rounded-md px-4 py-1 text-gray-600' />

                    <input type="text" placeholder="Colour" name="colour" value={mobileDetails.colour} onChange={handleInput} required className='border rounded-md px-4 py-1 text-gray-600' />

                    <input type="text" placeholder="Front Camera" name="fcamera" value={mobileDetails.fcamera} onChange={handleInput} required className='border rounded-md px-4 py-1 text-gray-600' />

                    <input type="text" placeholder="Back Camera" name="bcamera" value={mobileDetails.bcamera} onChange={handleInput} required className='border rounded-md px-4 py-1 text-gray-600' />

                    <div className='border rounded-md pl-4 py-1 text-gray-600 text-sm'>
                        <span>Images: </span> <input type="file" name="images" onChange={handleImageChange} multiple className='' />
                    </div>

                    <button type="submit" className='bg-black text-white rounded-full hover:bg-white hover:text-black duration-300 w-full' onClick={handleSubmit}>
                        Add
                    </button>

                </form>

            </div>
        </>
    )
}

export default AddMobile;
