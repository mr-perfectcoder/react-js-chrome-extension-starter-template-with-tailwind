import React, { useState } from 'react';
import { IoLink,IoMenu } from 'react-icons/io5';

const Header = ({ setActivePage }) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className='flex flex-row justify-between items-center p-4'>
            <h1 className="text-lg">Get Started</h1>
            <div className='relative'>
                <IoMenu
                    size={20}
                  className='text-black cursor-pointer'
                    onClick={toggleDropdown}
                />
                {isDropdownVisible && (
                    <div className='absolute -right-[15px] mt-2 w-32 bg-white border border-gray-200 rounded shadow-xl'>
                        <ul>
                            <li className='p-2 hover:bg-gray-100 cursor-pointer flex flex-row items-center gap-1' onClick={() => setActivePage("page-1")}><IoLink className='text-gray-400' size={14} />  Page 1</li>
                            <li className='p-2 hover:bg-gray-100 cursor-pointer flex flex-row items-center gap-1' onClick={() => setActivePage("page-2")}> <IoLink className='text-gray-400' size={14} />Page 2</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
