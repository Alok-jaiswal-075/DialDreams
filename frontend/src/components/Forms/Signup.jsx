import React,{useState} from "react";
import {Link} from 'react-router-dom'
import Navbar from "../Utilities/Navbar/Navbar";
import { MdOutlineAppRegistration } from "react-icons/md";
import ScaleLoader from 'react-spinners/ScaleLoader'

const SignUp = ()=>{

    const [user, setUser] = useState({fname:"",lname:"", email: "", password: "",cpassword:"",role:"buyer",phone:"",address:"",pincode:"",state:"", });

    const [image, setImage] = useState();
    const [loading,setLoading] = useState(false);

    const handleInput = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        setUser({ ...user, [field]: value })
    }

    const handleImageChange = (e)=>{
        setImage(e.target.files[0]);
    }

    const uploadImage = async (image) => {
        try {
            const data = new FormData();
            data.append("file", image);
            data.append('upload_preset', 'mobileStore');
            data.append('cloud_name', 'dnqaa5alo');

            const response = await fetch('https://api.cloudinary.com/v1_1/dnqaa5alo/image/upload', {
                method: "POST",
                body: data
            });

            const imageData = await response.json();
            return imageData.url; 
        } catch (err) {
            console.log(err);
            throw new Error('Image upload failed'); 
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const imgUrl = await uploadImage(image);
            if (imgUrl) {

                const { fname, lname, email, password, phone, role, address, pincode, state } = user;

                const requestData = {
                    fname,
                    lname,
                    email,
                    password,
                    phone,
                    role,
                    address,
                    pincode,
                    state,
                    profile: imgUrl 
                };



                const res = await fetch('/api/auth/register',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestData),
                    credentials: 'include'
                })


                const responseData = await res.json();
                setLoading(false)
                console.log(responseData);
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    return(
        <>
            <Navbar />

            <div className='max-w-[1640px] flex justify-center items-center my-[3rem]'>

                <form method="POST" noValidate autoComplete="off" className='flex flex-col border justify-center items-center py-6 px-4 gap-4 rounded-xl shadow-xl' encType="multipart/form-data">

                    <MdOutlineAppRegistration size={30} />

                    <input type="text" placeholder="First Name" name="fname" value={user.fname} onChange={handleInput} required className='border rounded-md px-4 py-1 text-gray-600 ' />

                    <input type="text" placeholder="Last Name" name="lname" value={user.lname} onChange={handleInput} required className='border rounded-md px-4 py-1 text-gray-600 ' />

                    <input type="email" placeholder="Email" name="email" value={user.email} onChange={handleInput} required className='border rounded-md px-4 py-1 text-gray-600 ' />

                    <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleInput} required className='border rounded-md px-4 py-1 text-gray-600 ' />

                    <input type="password" placeholder="Confirm Password" name="cpassword" value={user.cpassword} onChange={handleInput} required className='border rounded-md px-4 py-1 text-gray-600 ' />

                    <input type="tel" placeholder="Phone Number" name="phone" value={user.phone} onChange={handleInput} required className='border rounded-md px-4 py-1 text-gray-600 ' pattern="[0-9]{10}" />

                    <textarea name="address" placeholder="Address" cols="23" rows="5" className='border rounded-md px-4 py-1 text-gray-600' required onChange={handleInput}></textarea>

                    <input type="text" placeholder="Pincode" name="pincode" value={user.pincode} onChange={handleInput} required className='border rounded-md px-4 py-1 text-gray-600 ' maxLength={6} pattern="[0-9]*" inputMode="numeric"/>

                    <input type="state" placeholder="State" name="state" value={user.state} onChange={handleInput} required className='border rounded-md px-4 py-1 text-gray-600 ' />

                    <div className='border rounded-md pl-4 py-1 text-gray-600 text-sm'>
                        <span>Profile : </span> <input type="file" name="image" onChange={handleImageChange} className='' />
                    </div>

                    {!loading && <button type="submit" className=' bg-black text-white rounded-full hover:bg-white hover:text-black duration-300 w-full' onClick={handleSubmit}>
                        Sign Up
                    </button>}

                    {loading && <ScaleLoader/>}

                    <p>Already have a account? <Link to="/login" className='text-orange-500'>Login</Link></p>

                </form>


            </div>
        </>
    )
}

export default SignUp