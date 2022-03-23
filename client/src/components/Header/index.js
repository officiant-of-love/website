import { useState } from 'react';

import Nav from '../Nav';

const Header = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <>
            <header className="bg-black opacity-40 p-5 md:p-3 md:block">
                <div className="flex justify-between md:flex-col">
                    <h1 className="font-semibold text-4xl lg:text-6xl text-white text-center px-2 pt-2">Officiant of Love</h1>
                    <Nav mobileNavOpen={mobileNavOpen} setMobileNavOpen={setMobileNavOpen}/>
                </div>
            </header>
            {mobileNavOpen ? (
            <div className="bg-black opacity-20">
                <ul className='flex flex-row justify-between px-2 py-1 opacity-100'>
                    <li className="text-white text-3xl">About </li>
                    <li className="text-white text-3xl">|</li>
                    <li className="text-white text-3xl">Weddings </li>
                    <li className="text-white text-3xl">|</li>
                    <li className="text-white text-3xl">Funerals</li>
                </ul>
            </div>
            ) : ''}
        </>
    );
};

export default Header;