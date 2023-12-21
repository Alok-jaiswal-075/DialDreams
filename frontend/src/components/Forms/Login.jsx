import React,{useState} from "react";
import { Link } from "react-router-dom";
import Navbar from "../Utilities/Navbar/Navbar";
import { FaUserLock } from "react-icons/fa";

const Login = ()=>{

    const [user, setUser] = useState({ email: "", password: "",role:"buyer" });

    const handleInput = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        setUser({ ...user, [field]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user)
    }

    return(
        <>
            <Navbar/>

            <div className='max-w-[1640px] flex justify-center items-center my-[10rem]'>

            <form method="POST" noValidate autoComplete="off" className='flex flex-col border justify-center items-center py-6 px-4 gap-4 rounded-xl shadow-xl'>

                <FaUserLock size={30}/>

                <input type="email" placeholder="Email" name="email" value={user.email} onChange={handleInput} required className='border rounded-md px-4 py-1 text-gray-600 '/>

                <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleInput} required className='border rounded-md px-4 py-1 text-gray-600 '/>

                <button type="submit" className=' bg-black text-white rounded-full hover:bg-white hover:text-black duration-300 w-full' onClick={handleSubmit}>
                    Login
                </button>

                <p>Don't have an account? <Link to="/signup" className='text-orange-500'>Sign Up</Link></p>

            </form>


            </div>
        </>
    )
}

export default Login