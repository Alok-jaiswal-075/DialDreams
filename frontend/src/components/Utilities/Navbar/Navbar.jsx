import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import MobileView from "./MobileView";
import Cart from "./Cart";

const Navbar = ()=>{

    const Navigate = useNavigate();

    const [nav, setNav] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [isBuyer, setIsBuyer] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogout = async () => {
        try {
            const response = await fetch('/api/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setIsLoggedIn(false);
            setIsAdmin(false);
            setIsBuyer(false);
            Navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    const handleSetNav = () => {
        setNav(!nav)
    }

    const handleSetCartOpen = (value = !cartOpen) => {
        setCartOpen(value)
    }

    const getUser = async () => {
        try {
            const response = await fetch('/api/auth/get-user', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            });

            
            const data = await response.json();
            setIsLoggedIn(true);
            
            if(response.ok){
                if (data.role === 'admin') setIsAdmin(true);
                else setIsBuyer(true);
            }

            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUser();
    }, [nav]);


    return(
    <div className="max-w-[1640px] mx-auto flex justify-between items-center sm:p-2 md:p-4">

        <div className="flex items-center">
            <div className='cursor-pointer'>
                <AiOutlineMenu size={20} onClick={() => setNav(!nav)}/>
            </div>
            <Link to='/'><div className='pl-2 text-xl sm:text-2xl md:text-3xl'>
                Dial <span className='font-bold text-orange-600/80'>Dreams</span>
            </div></Link>
        </div>
            
        <div className='hidden sm:flex bg-gray-200 items-center pl-4 gap-2 p-1 sm:px-3 rounded-full w-[200px] sm:w-[400px] lg:[500px]'>
            <FaSearch />
            <input type="text" placeholder="Search for mobile..." className='bg-transparent w-full focus:outline-none'/>
        </div>

        <button className=' bg-black text-white rounded-full' onClick={()=>{setCartOpen(!cartOpen)}}>
            <FaShoppingCart size={20} />
        </button>


        {/*Mobile view*/}

        <MobileView nav = {nav} isLoggedIn={isLoggedIn}
        isAdmin={isAdmin} isBuyer={isBuyer}  handleSetNav={handleSetNav} handleLogout={handleLogout}/>
        
        {/*Cart*/}

        <Cart cartOpen={cartOpen} handleSetCartOpen={handleSetCartOpen}/>

    </div>
    )
}

export default Navbar