import React from "react";

const Orders = ()=>{
    return (
        <div className='sm:flex sm:flex-col sm:my-5 sm:border sm:rounded-xl sm:p-5 sm:px-8 sm:shadow-lg sm:mx-auto sm:w-full lg:w-3/4'>
            <table className="table-fixed text-start">
                <thead className="">
                    <tr className="border-b-2">
                        <th>STATUS</th>
                        <th>PRODUCT</th>
                        <th>QUANTITY</th>
                        <th>PRICE (&#x20B9;)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span className='p-1 bg-red-400/30 rounded-full text-red-900'>Pending</span></td>
                        <td>Galaxy Z Fold5 (Special Edition)</td>
                        <td>1</td>
                        <td>164999.00</td>
                    </tr>
                    <tr>
                        <td><span className='p-1 bg-green-400/30 rounded-full text-green-900'>Devlivered</span></td>
                        <td>Galaxy Z Fold5 (Special Edition)</td>
                        <td>1</td>
                        <td>164999.00</td>
                    </tr>
                    <tr>
                        <td><span className='p-1 bg-red-400/30 rounded-full text-red-900'>Pending</span></td>
                        <td>Galaxy Z Fold5 (Special Edition)</td>
                        <td>1</td>
                        <td>164999.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Orders