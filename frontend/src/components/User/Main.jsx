import React,{useState,useEffect} from "react";
import Navbar from "../Utilities/Navbar/Navbar";
import UserInfo from "./Info";
import Orders from "./Orders";
import Loader from '../Utilities/Loading'

const User = ()=>{




    const [user, setUser] = useState()
    const [isloading,setisloading] = useState(true)



    const getUserDetails = () => {
        fetch('/api/buyer/', {
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
                setUser(data)
                setisloading(false)
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });

    }



    useEffect(() => {
        getUserDetails();
    }, []);







    return(
        <>
            {isloading ? <Loader /> : <div>
                <UserInfo user={user} />
                <Orders orders={user.orders} />
            </div>}
        </>
    )
}

export default User