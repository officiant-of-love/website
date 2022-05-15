import { useState } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../Nav';

const Header = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <header className='absolute top-0 w-full'>
            <div className="bg-black/40 p-5 md:p-3 md:block">
                <div className="flex justify-between md:flex-col">
                    <h1 className="font-semibold text-4xl lg:text-6xl text-white text-center px-2 pt-2">Officiant of Love</h1>
                    <Nav mobileNavOpen={mobileNavOpen} setMobileNavOpen={setMobileNavOpen}/>
                </div>
            </div>
            {mobileNavOpen ? (
            <div className="bg-black/20">
                <ul className='flex flex-row justify-between px-2 py-1 sm:px-3'>
                    <li className="text-white text-xl font-semibold"><Link to="/">About</Link> </li>
                    <li className="text-white text-xl font-semibold">|</li>
                    <li className="text-white text-xl font-semibold"><Link to="/weddings">Weddings</Link> </li>
                    <li className="text-white text-xl font-semibold">|</li>
                    <li className="text-white text-xl font-semibold"><Link to="/funerals">Funerals</Link></li>
                    <li className="text-white text-xl font-semibold">|</li>
                    <li className="text-white text-xl font-semibold"><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            ) : ''}
        </header>
    );
};

export default Header;