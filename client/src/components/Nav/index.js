import { useState } from 'react';
import hamburgerMenu from './hamburger-menu.svg';
import closeIcon from './close.svg'

const Nav = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
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
            <img className='align-middle md:hidden pt-1' src={!mobileNavOpen ? hamburgerMenu : closeIcon} onClick={() => setMobileNavOpen(!mobileNavOpen)}/>
            {mobileNavOpen ? (
                <ul className='text-white'>
                    <li>About</li>
                    <li>Weddings</li>
                    <li>Funerals</li>
                </ul>
            ) : ''}
        </nav>
    );
};

export default Nav;