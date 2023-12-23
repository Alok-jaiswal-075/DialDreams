import React from "react";



const Orders = ({orders})=>{
    console.log(orders)
    return (
        <div className='sm:flex sm:flex-col sm:my-5 sm:border sm:rounded-xl sm:p-5 sm:px-8 sm:shadow-lg sm:mx-auto sm:w-full lg:w-3/4'>

            <h2 className='text-start text-gray-700 text-xl'>Order list</h2>

            <table className="table-fixed text-start">
                <thead className="">
                    <tr className="border-b-2">
                        <th>STATUS</th>
                        <th>PRODUCT</th>
                        <th>QUANTITY</th>
                        <th>TOTAL (&#x20B9;)</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {orders && orders.map((order, index) => (
                        <tr key={index}>
                            <td><span className={order.status === 'pending' ? 'p-1 bg-red-400/30 rounded-full text-red-900' : 'p-1 bg-green-400/30 rounded-full text-green-900'}>{order.status}</span></td>
                            <td>{order.mobile.name}</td>
                            <td>{order.quantity}</td>
                            <td>{order.total}</td>
                        </tr>
                    ))}


                </tbody>
            </table>

        </div>
    )
}

export default Orders