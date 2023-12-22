import React from "react";
import Navbar from "../Utilities/Navbar/Navbar";
import Hero from "./Hero";
import NewArrivals from "./NewArrivals";

const Home = ()=>{
    return (
        <div>
            <Hero/>
            <NewArrivals/>
        </div>
    )
}

export default Home