import React,{useState} from "react";
import Carousel from './Carousel'
import { FaShoppingCart } from "react-icons/fa";
import PuffLoader from 'react-spinners/PuffLoader'

const LeftComponent = ({images,id}) => {
    const [loading, setLoading] = useState(false);

    const handleAddToCart = async () => {
        setLoading(true)
        try {

            const res = await fetch('/api/buyer/add-to-cart/' + id, {
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


    return (
        <div className='self-start'>
            <Carousel images={images}/>


            <div className='flex gap-3 justify-center items-center py-4'>

                <button className='w-[10rem] bg-black text-white rounded-full hover:text-black hover:bg-white duration-300'>Order Now</button>

                {loading ? <PuffLoader size={30}/> : <div className="border-none p-0 cursor-pointer" onClick={handleAddToCart}>
                    <FaShoppingCart size={28}/>
                </div>}

            </div>


        </div>
    )
}

export default LeftComponent