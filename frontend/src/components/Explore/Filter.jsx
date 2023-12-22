import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { MdOutlineSort } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

const Filter = ({ filterBox, handleFilterBox, handleFilterChange, mobiles }) => {
    const [filters, setFilters] = useState({
        name: "",
        type: [],
        price: "",
        processor: [],
        memory: [],
        os: [],
    });

    const handleFilterChangeLocal = () => {
        console.log(filters)
        const filteredResult = mobiles.filter((product) => {
            const productName = product.name.toLowerCase();
            const filterName = filters.name.toLowerCase();

            return (
                productName.includes(filterName) &&
                (filters.type.length === 0 || filters.type.includes(product.type)) &&
                (filters.price === "" || product.price >= filters.price) &&
                (filters.processor.length === 0 || filters.processor.includes(product.processor)) &&
                (filters.memory.length === 0 || filters.memory.includes(product.memory)) &&
                (filters.os.length === 0 || filters.os.includes(product.os))
            );
        });

        handleFilterChange(filteredResult);
    };


    const handleFilterChangeSingle = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const handleFilterChangeMultiple = (e) => {
        const { name, options } = e.target;
        const selectedOptions = Array.from(options)
            .filter((option) => option.selected)
            .map((option) => option.value);
        setFilters({ ...filters, [name]: selectedOptions });
    };

    const handlePriceChange = (e) => {
        const { value } = e.target;
        setFilters({ ...filters, price: parseFloat(value) });
    };

    const handleApplyFilters = () => {
        handleFilterChangeLocal();
        handleFilterBox();
    };

    const handleResetFilters = () => {
        setFilters({
            name: "",
            type: [],
            price: "",
            processor: [],
            memory: [],
            os: [],
        });
    };

    return (
        <div className="filter-container">

            <div className='max-w-[1640px] border w-full h-7 my-6 rounded-full flex justify-between items-center px-8'>
                <div className="flex gap-1 justify-center items-center cursor-pointer text-sm" onClick={() => { handleFilterBox() }}>
                    <FaFilter /> <span>Filter</span>
                </div>

                {filterBox && <div className='fixed w-full h-screen top-0 left-0 bg-black/80 z-10'></div>}

                <div className={filterBox ? 'fixed m-auto w-fit h-fit top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white z-10 rounded-xl' : 'hidden'}>
                    <IoIosClose size={30} className='absolute left-4 top-4 cursor-pointer' onClick={() => { handleFilterBox() }} />

                    <div className='flex flex-col my-14 mx-6 gap-y-3 text-sm justify-between'>

                        <div className='p-1 bg-gray-300 rounded-full'>
                            <input type="text" name="name" value={filters.name} onChange={handleFilterChangeSingle} placeholder="Search by name" className='w-full bg-transparent px-4 focus:outline-none' />
                        </div>

                        <div className='border flex gap-y-2 flex-col text-start px-4 py-2 w-fit'>
                            <h5 className='font-semibold text-gray-500'>TYPES</h5>
                            <select multiple name="type" value={filters.type} onChange={handleFilterChangeMultiple} style={{ minWidth: '200px' }} className='w-fit focus:outline-none'>
                                <option value="smartphone">Smartphones</option>
                                <option value="keypad">Keypad</option>
                                <option value="folding">Folding</option>
                            </select>
                        </div>

                        <div className='border flex gap-y-2 flex-col text-start px-4 py-2 w-fit'>
                            <h5 className='font-semibold text-gray-500'>OPERATING SYSTEM</h5>
                            <select multiple name="os" value={filters.os} onChange={handleFilterChangeMultiple} style={{ minWidth: '200px' }} className='w-fit focus:outline-none'>
                                <option value="windows">Windows</option>
                                <option value="android">Android</option>
                                <option value="ios">iOS</option>
                            </select>
                        </div>

                        <div className='border flex gap-y-2 flex-col text-start px-4 py-2 w-fit'>
                            <h5 className='font-semibold text-gray-500'>MEMORY</h5>
                            <select multiple name="memory" value={filters.memory} onChange={handleFilterChangeMultiple} style={{ minWidth: '200px' }} className='w-fit focus:outline-none'>
                                <option value="2">2GB</option>
                                <option value="4">4GB</option>
                                <option value="16">16GB</option>
                                <option value="32">32GB</option>
                                <option value="64">64GB</option>
                                <option value="128">128GB</option>
                            </select>
                        </div>

                        <div className='border flex gap-y-2 flex-col text-start px-4 py-2 w-fit'>
                            <h5 className='font-semibold text-gray-500'>PRICE</h5>
                            <input type="range" min="5000" max="250000" value={filters.price} onChange={handlePriceChange} />
                        </div>

                        <div className="flex justify-between">
                            <button onClick={handleApplyFilters} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Apply Filters
                            </button>
                            <button onClick={handleResetFilters} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Reset Filters
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex gap-1 justify-center items-center cursor-pointer text-sm">
                    <MdOutlineSort /> <span>Sort By</span>
                </div>
            </div>
        </div>
    );
};

export default Filter;
