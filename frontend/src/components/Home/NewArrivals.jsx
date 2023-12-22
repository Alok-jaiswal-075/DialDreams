import React, { useState,useEffect } from "react";
import Card from "./Card";
import ScaleLoader from 'react-spinners/ScaleLoader'

const NewArrivals = () => {

    const [mobiles,setMobiles] = useState()
    const [isloading, setisloading] = useState(true)

    const getNewArrivals = () => {
        fetch('/api/general/new-arrivals', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setMobiles(data.mobiles)
                setisloading(false)
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });

    }



    useEffect(() => {
        getNewArrivals();
    }, []);


    return (
        <div className='my-[4rem]'>

            <h1 className='text-[1.5rem] font-semibold text-left px-5'>New Arrivals</h1>

            <hr className='mb-[2rem] w-2/3 border-t-4 rounded-full border-orange-400 '/>

            {isloading ? <ScaleLoader/> : 
                <div className='max-w-[1640px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center h-'>

                    {mobiles && mobiles.map((mobile, index) => <Card key={index} mobile={mobile} />)}

                </div>
            }


        </div>
    )
}

export default NewArrivals