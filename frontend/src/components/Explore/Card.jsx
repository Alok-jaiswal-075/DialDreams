import React,{useState} from "react";
import { FaShoppingCart } from "react-icons/fa";
import  PuffLoader  from 'react-spinners/PuffLoader'


const Card = ({mobile}) => {

    const [loading, setLoading] = useState(false);

    const handleAddToCart =async ()=>{
        setLoading(true)
        try {

            const res = await fetch('/api/buyer/add-to-cart/'+mobile._id, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            })


            const responseData = await res.json();
            setLoading(false)
            console.log(responseData);

        } catch (error) {
            console.error(error.message);
            setLoading(false)
            window.alert("Cart Updation failed")
        }
    }

    const { name, colour, storage, price, description, images } = mobile

    return(
        <div className='flex justify-center items-center flex-col p-5 border rounded-xl shadow-xl relative w-full h-[35rem]'>

            {loading ? <div className="absolute top-4 left-4"><PuffLoader size={30} /> </div>: <FaShoppingCart className='absolute top-4 left-4 cursor-pointer' size={20} onClick={handleAddToCart}/>}

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