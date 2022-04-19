import { useState } from 'react';

import hamburgerMenu from './hamburger-menu.svg';
import closeIcon from './close.svg'

const Nav = ({ mobileNavOpen, setMobileNavOpen }) => {
    const selectedTitle = useState('About');
    const handleClick = (e) => {
        let { style, textContent } = e.target;
        if(!style.fontWeight) {
            style.fontWeight = 'bold';
            return;
        }
        style.fontWeight = '';
    };

    return (
        <nav>
            <ul className="hidden md:flex text-white justify-center align-middle">
                <li className='cursor-pointer md:text-xl lg:text-3xl' onClick={handleClick}>About</li>
                <li className='px-1 md:text-xl lg:text-3xl'>|</li>
                <li className='cursor-pointer md:text-xl lg:text-3xl' onClick={handleClick}>Weddings</li>
                <li className='px-1 md:text-xl lg:text-3xl'>|</li>
                <li className='cursor-pointer md:text-xl lg:text-3xl' onClick={handleClick}>Funerals</li>
                <li className='px-1 md:text-xl lg:text-3xl'>|</li>
                <li className='cursor-pointer md:text-xl lg:text-3xl' onClick={handleClick}>Contact</li>
            </ul>
            <img className='md:hidden pt-3' src={!mobileNavOpen ? hamburgerMenu : closeIcon} onClick={() => setMobileNavOpen(!mobileNavOpen)} alt="mobile menu"/>
        </nav>
    );
};

export default Nav;