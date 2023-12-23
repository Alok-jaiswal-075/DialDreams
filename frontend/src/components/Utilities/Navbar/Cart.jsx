import React, { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import ScaleLoader from 'react-spinners/ScaleLoader'
import Confirmation from "../Confirmation";


const Cart = ({ cartOpen, handleSetCartOpen }) => {

    const [cartDetails, setCartDetails] = useState();
    const [isloading, setisloading] = useState(true)
    const [ischanged, setischanged] = useState(false)
    const [openConfirmation, setOpenConfirmation] = useState(false)
    const [decision, setDecision] = useState(true)
    const [orderLoading, setOrderLoading] = useState(false)


    const handleIncrementQuantity = (index, event) => {
        event.stopPropagation();
        const updatedCart = [...cartDetails.products];
        if (updatedCart[index].quantity < updatedCart[index].mobile.quantity) {
            updatedCart[index].quantity += 1;
            updatedCart[index].total += updatedCart[index].mobile.price
        }
        updateCartDetails(updatedCart);
    };

    const handleDecrementQuantity = (index, event) => {
        event.stopPropagation();
        const updatedCart = [...cartDetails.products];
        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity -= 1;
            updatedCart[index].total -= updatedCart[index].mobile.price
        } else {
            updatedCart.splice(index, 1);
        }
        updateCartDetails(updatedCart);
    };

    const updateCartDetails = (updatedCart) => {
        setCartDetails({ ...cartDetails, products: updatedCart });
        setischanged(true)
    };


    const handleUpdateCart = (event) => {
        event.stopPropagation();
        setisloading(true)
        fetch('/api/buyer/update-cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(cartDetails)
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                    // const data = response.json();
                    // console.log(data)
                }
                return response.json();
            })
            .then((data) => {
                setCartDetails(data)
                setisloading(false)
                setischanged(false)
                console.log(data)
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });

    }



    const getCartDetails = () => {
        fetch('/api/buyer/get-cart', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                    // const data = response.json();
                    // console.log(data)
                }
                return response.json();
            })
            .then((data) => {
                setCartDetails(data)
                setisloading(false)
                // console.log(data)
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });

    }


    const handleOpenConfirmation = () => {
        setOpenConfirmation(!openConfirmation)
    }

    const handleYesDecision = () => {
        setDecision(true)
        setOrderLoading(true)


        if (decision) {
            fetch('/api/buyer/order-a-cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            })
                .then((response) => {
                    if (!response.ok) {
                        const data = response.json
                        console.log(data)
                        throw new Error('Network response was not ok');

                    }
                    return response.json();
                })
                .then((data) => {
                    setCartDetails(data)
                    setOrderLoading(false)
                    setOpenConfirmation(false)
                })
                .catch((error) => {
                    console.error('There was a problem with the fetch operation:', error);
                });
        }

    }

    const handleNoDecision = () => {
        setDecision(false)
        handleOpenConfirmation()
    }



    useEffect(() => {
        getCartDetails();
    }, [cartOpen]);

    return (
        <>
            {openConfirmation &&
                <Confirmation message="Order all the items in cart?" handleClose={handleOpenConfirmation} handleYesDecision={handleYesDecision} handleNoDecision={handleNoDecision} buttonLoading={orderLoading} />
            }

            {cartOpen && <div className='bg-black/80 w-full h-full fixed z-10 top-0 left-0'></div>}

            <div className={cartOpen ? 'fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300 linear sm:w-[500px] cursor-pointer overflow-y-scroll' : 'fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300 linear sm:w-[500px] cursor-pointer overflow-y-scroll'} onClick={() => { handleSetCartOpen() }}>

                <IoIosClose size={30} className='absolute left-4 top-4 cursor-pointer' onClick={() => { handleSetCartOpen() }} />
                <div className='pl-2 py-4 text-md sm:text-lg md:text-2xl'>
                    Dial <span className='font-bold text-orange-600/80'>Dreams</span>
                </div>

                {isloading ? <ScaleLoader /> :

                    <div className='flex flex-col my-5 border rounded-xl p-2 px-8 shadow-lg mx-2 max-w-[300px] sm:max-w-[500px]'>

                        <div className='mb-4 flex justify-between items-center'>
                            <h2 className='text-start text-gray-700 text-xl'>CART</h2>
                            <button className={ischanged ? 'hidden' : 'py-0 bg-black text-white hover:bg-white hover:text-black duration-300'} onClick={(e) => {
                                e.stopPropagation()
                                handleOpenConfirmation(true)
                            }}>Order</button>

                            <button className={ischanged ? 'py-0 bg-black text-white hover:bg-white hover:text-black duration-300' : 'hidden'} onClick={(event) => { handleUpdateCart(event) }}>Apply</button>
                        </div>

                        <hr className='border-t-2 w-full' />

                        <table className="table-fixed text-start">
                            <thead className="">
                                <tr className="border-b-2">
                                    <th>PRODUCT</th>
                                    <th>QUANTITY</th>
                                    <th>TOTAL (&#x20B9;)</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                {cartDetails.products.map((product, index) =>
                                    <tr key={index}>

                                        <td>{product.mobile.name}</td>
                                        <td className='text-center'>{product.quantity}</td>
                                        <td>{product.total}</td>
                                        <td>
                                            <div className="flex items-center">
                                                <div className="flex flex-col gap-1">
                                                    <button onClick={(event) => handleIncrementQuantity(index, event)} className='px-3 py-0 bg-green-500/20 border-none'>+</button>

                                                    <button onClick={(event) => handleDecrementQuantity(index, event)} className='px-3 py-0 bg-red-500/20 border-none'>-</button>

                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )}

                            </tbody>
                        </table>

                    </div>
                }

            </div>
        </>
    )
}

export default Cart