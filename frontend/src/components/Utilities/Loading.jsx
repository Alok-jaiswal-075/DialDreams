import React from "react";
import ScaleLoader from 'react-spinners/ScaleLoader'

const Loader = ()=>{
    return(
        <div>
            <ScaleLoader size={30} className='absolute top-[50%] left-[50%]' />
        </div>
    )
}

export default Loader