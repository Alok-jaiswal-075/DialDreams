import React, { useState } from "react";
import Navbar from "../Utilities/Navbar/Navbar";
import Info from './Info'
import Navigation from "./Navigation";
import Mobiles from './Mobiles'
import Orders from './Orders'

const Admin = ()=>{
    const [active,setActive] = useState(false)

    const handleActive = (e)=>{
        setActive(!active)
    }

    return(
        <div>
            <Navbar/>
            <Info/>
            <Navigation active={active} handleActive={handleActive}/>
            {active && <Mobiles/>}
            {!active && <Orders/>}
        </div>
    )
}

export default Admin