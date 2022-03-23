import { useState } from 'react';

import Nav from '../Nav';

const Header = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <>
            <header className="bg-black opacity-40 md:p-3 md:block">
                <div class="flex justify-between p-5">
                    <h1 className="font-semibold text-4xl lg:text-6xl text-white text-center">Officiant of Love</h1>
                    <Nav mobileNavOpen={mobileNavOpen} setMobileNavOpen={setMobileNavOpen}/>
                </div>
                
            </header>
            {mobileNavOpen ? (
            <div class="bg-black opacity-20">
                <ul className='flex flex-row justify-between p-1 opacity-100'>
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