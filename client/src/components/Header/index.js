import { useState } from 'react';

import Nav from '../Nav';

const Header = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <header>
            <div className="bg-black/40 p-5 md:p-3 md:block">
                <div className="flex justify-between md:flex-col">
                    <h1 className="font-semibold text-4xl lg:text-6xl text-white text-center px-2 pt-2">Officiant of Love</h1>
                    <Nav mobileNavOpen={mobileNavOpen} setMobileNavOpen={setMobileNavOpen}/>
                </div>
            </div>
            {mobileNavOpen ? (
            <div className="bg-black/20">
                <ul className='flex flex-row justify-between px-2 py-1 sm:px-3'>
                    <li className="text-white text-3xl font-semibold">About </li>
                    <li className="text-white text-3xl font-semibold">|</li>
                    <li className="text-white text-3xl font-semibold">Weddings </li>
                    <li className="text-white text-3xl font-semibold">|</li>
                    <li className="text-white text-3xl font-semibold">Funerals</li>
                </ul>
            </div>
            ) : ''}
        </header>
    );
};

export default Header;