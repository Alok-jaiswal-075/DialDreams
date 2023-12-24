import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LeftComponent from "./LeftComponent";
import Loader from "../../Utilities/Loading";
import RightComponent from "./RightComponent";

const MobileDash = ()=>{

    const {id} = useParams();

    const [loading, setLoading] = useState(true)
    const [mobileData, setMobileData] = useState()


    const getDetails = async () => {
        setLoading(true)
        try {

            const res = await fetch('/api/general/mobile/' + id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            })


            const responseData = await res.json();
            setLoading(false)
            setMobileData(responseData)
            // console.log(responseData);

        } catch (error) {
            console.error(error.message);
            setLoading(false)
            window.alert("Page is missing")
        }
    }


    useEffect(() => {
        getDetails()
    }, []);

    return (
        <>

            {loading ? <Loader /> : <div className='max-w-[1640px] flex flex-col justify-center items-center sm:grid sm:grid-cols-2 sm:gap-4 my-[2rem]'>

                <LeftComponent images={mobileData.images} id={mobileData._id}/>


                <RightComponent mobile={mobileData}/>


            </div>}

        </>
    )
}

export default MobileDash