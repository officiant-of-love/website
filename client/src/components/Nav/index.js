import { useState } from 'react';
import hamburgerMenu from './hamburger-menu.svg'

const Nav = () => {
    const handleClick = () => {

    };

    return (
        <nav>
            <ul className="hidden md:flex flex-row text-white justify-center ">
                <li className='cursor-pointer' onClick={handleClick}>About</li>
                <li className='px-1'>|</li>
                <li className='cursor-pointer' onClick={handleClick}>Weddings</li>
                <li className='px-1'>|</li>
                <li className='cursor-pointer' onClick={handleClick}>Funerals</li>
            </ul>
            <img className='align-middle md:hidden pt-1' src={hamburgerMenu} />
        </nav>
    );
};

export default Nav;