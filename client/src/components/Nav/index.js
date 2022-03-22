import { useState } from 'react';

const Nav = () => {
    const handleClick = (e) => {
        
    };

    return (
        <nav>
            <ul className="flex flex-row text-white justify-center">
                <li className='cursor-pointer' onClick={handleClick}>About</li>
                <li className='px-1'>|</li>
                <li className='cursor-pointer' onClick={handleClick}>Weddings</li>
                <li className='px-1'>|</li>
                <li className='cursor-pointer' onClick={handleClick}>Funerals</li>
            </ul>
        </nav>
    );
};

export default Nav;