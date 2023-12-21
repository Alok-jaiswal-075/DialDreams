import React ,{useState}from "react";
import { FaFilter } from "react-icons/fa";
import { MdOutlineSort } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

//name, type, price, processor, memory, OS

const Filter = ({filterBox,handleFilterBox})=>{
    const products = []

    const [filters, setFilters] = useState({
        name: '',
        type: [],
        price: '',
        processor: [],
        memory: [],
        os: [],
    });
    
    const filteredProducts = products.filter((product) => {
        return (
        product.name.toLowerCase().includes(filters.name.toLowerCase()) &&
        (filters.type.length === 0 || filters.type.includes(product.type)) &&
        (filters.price === '' || product.price === filters.price) &&
        (filters.processor.length === 0 || filters.processor.includes(product.processor)) &&
        (filters.memory.length === 0 || filters.memory.includes(product.memory)) &&
        (filters.os.length === 0 || filters.os.includes(product.os))
        );
    });
    
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };
    
    const handleMultiSelectChange = (e) => {
        const { name, options } = e.target;
        const selectedOptions = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);
        setFilters({ ...filters, [name]: selectedOptions });
    };

    const handlePriceChange = (e) => {
        const { value } = e.target;
        setFilters({ ...filters, price: value });
      };



    return (
        <div className='max-w-[1640px] border w-full h-7 my-6 rounded-full flex justify-between items-center px-8'>



            <div className="flex gap-1 justify-center items-center cursor-pointer text-sm" onClick={()=>{handleFilterBox()}} >
                <FaFilter/> <span>Filter</span>
            </div>





            {filterBox && <div className='fixed w-full h-screen top-0 left-0 bg-black/80 z-10'></div>}

            <div className={filterBox ? 'fixed m-auto w-fit h-fit top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white z-10 rounded-xl': 'hidden'}>

            <IoIosClose size={30} className='absolute left-4 top-4 cursor-pointer' onClick={()=>{handleFilterBox()}} />





            <div className='flex flex-col my-14 mx-6 gap-y-3 text-sm justify-between'>


                <div className='p-1 bg-gray-300 rounded-full'>
                    <input type="text" name="name" value={filters.name} onChange={handleFilterChange} placeholder="Search by name" className='w-full bg-transparent px-4 focus:outline-none'/>
                </div>


                <div className='border flex gap-y-2 flex-col text-start px-4 py-2 w-fit'>
                    <h5 className='font-semibold text-gray-500'>TYPES</h5>

                    <select multiple name="type" value={filters.type} onChange={handleMultiSelectChange} style={{ minWidth: '200px' }} className='w-fit focus:outline-none'>
                        <option value="type1">Folding</option>
                        <option value="type2">Keypad</option>
                        <option value="type3">ScreenTouch</option>
                    </select>
                </div>

                <div className='border flex gap-y-2 flex-col text-start px-4 py-2 w-fit'>
                    <h5 className='font-semibold text-gray-500'>OPERATING SYSTEM</h5>

                    <select multiple name="os" value={filters.os} onChange={handleMultiSelectChange} style={{ minWidth: '200px' }} className='w-fit focus:outline-none'>
                        <option value="type1">Windows</option>
                        <option value="type2">Android</option>
                        <option value="type3">iOS</option>
                    </select>
                </div>


                <div className='border flex gap-y-2 flex-col text-start px-4 py-2 w-fit'>
                    <h5 className='font-semibold text-gray-500'>MEMORY</h5>

                    <select multiple name="memory" value={filters.memory} onChange={handleMultiSelectChange} style={{ minWidth: '200px' }} className='w-fit focus:outline-none'>
                        <option value="type1">2GB</option>
                        <option value="type2">4GB</option>
                        <option value="type3">16GB</option>
                        <option value="type4">32GB</option>
                        <option value="type5">64GB</option>
                        <option value="type6">128GB</option>
                    </select>
                </div>


                <div className='border flex gap-y-2 flex-col text-start px-4 py-2 w-fit'>
                    <h5 className='font-semibold text-gray-500'>PRICE</h5>

                    <input type="range" min="1" max="100" value={filters.price} onChange={handlePriceChange} />

                </div>



                </div>
   

            </div>






            <div className="flex gap-1 justify-center items-center cursor-pointer text-sm">
                <MdOutlineSort /> <span>Sort By</span>
            </div>

        </div>
    )
}

export default Filter