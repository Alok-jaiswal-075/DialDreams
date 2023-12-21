import React, { useState } from "react";
import Navbar from '../Utilities/Navbar/Navbar'
import Filter from "./Filter";
import Mobiles from "./Mobiles";


const Explore = ()=>{

    const [filterBox,setFilterBox] = useState(false)

    const handleFilterBox = ()=>{
        setFilterBox(!filterBox)
    }

    return(
        <>
            <Navbar/>
            <Filter filterBox={filterBox} handleFilterBox={handleFilterBox}/>
            <Mobiles/>

        </>
    )
}

export default Explore