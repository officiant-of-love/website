import { Link } from 'react-router-dom';

import hamburgerMenu from './hamburger-menu.svg';
import closeIcon from './close.svg'

const Nav = ({ mobileNavOpen, setMobileNavOpen }) => {

    return (
        <nav>
            <ul className="hidden md:flex text-white justify-center align-middle">
                <li className='cursor-pointer md:text-xl lg:text-3xl'><Link to="/">About</Link></li>
                <li className='px-1 md:text-xl lg:text-3xl'>|</li>
                <li className='cursor-pointer md:text-xl lg:text-3xl'><Link to="/weddings">Weddings</Link></li>
                <li className='px-1 md:text-xl lg:text-3xl'>|</li>
                <li className='cursor-pointer md:text-xl lg:text-3xl'><Link to="/funerals">Funerals</Link></li>
                <li className='px-1 md:text-xl lg:text-3xl'>|</li>
                <li className='cursor-pointer md:text-xl lg:text-3xl'><Link to="/contact">Contact</Link></li>
            </ul>
            <img className='md:hidden pt-3' src={!mobileNavOpen ? hamburgerMenu : closeIcon} onClick={() => setMobileNavOpen(!mobileNavOpen)} alt="mobile menu"/>
        </nav>
    );
};

export default Nav;