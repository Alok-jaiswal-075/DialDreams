import React from "react";
import Navbar from "../Utilities/Navbar";
import UserInfo from "./Info";
import Orders from "./Orders";

const User = ()=>{
    return(
        <div>
            <Navbar/>
            <UserInfo/>
            <Orders/>
        </div>
    )
}

export default User