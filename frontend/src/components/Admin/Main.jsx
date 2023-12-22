import React, { useState,useEffect } from "react";
import Info from './Info'
import Navigation from "./Navigation";
import Mobiles from './Mobiles'
import Orders from './Orders'
import Loader from "../Utilities/Loading";

const Admin = ()=>{
    const [active,setActive] = useState(false)
    const [isloading, setisloading] = useState(true)

    const handleActive = (e)=>{
        setActive(!active)
    }



    const [adminDetails, setAdminDetails] = useState()
    const [orders, setOrders] = useState();
    const [mobiles, setMobiles] = useState();


    const getAdminDetails = () => {
        fetch('/api/admin/', {
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
                setAdminDetails(data.user)
                setOrders(data.orders)
                setMobiles(data.mobiles)
                setisloading(false)
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });

    }



    useEffect(() => {
        getAdminDetails();
    }, []);






    return(
        <>
        {
            isloading ? <Loader/> :
                    <div>
                        <Info adminDetails={adminDetails} />
                        <Navigation active={active} handleActive={handleActive} />
                        {active && <Mobiles mobiles={mobiles}/>}
                        {!active && <Orders />}
                    </div>
        }
        </>
    )
}

export default Admin