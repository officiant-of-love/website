import hamburgerMenu from './hamburger-menu.svg';
import closeIcon from './close.svg'

const Nav = ({ mobileNavOpen, setMobileNavOpen }) => {
    const handleClick = (e) => {
        console.log(e.target.style)
    };

    return (
        <nav className='flex flex-row flex-wrap'>
            <ul className="hidden md:flex flex-row text-white justify-center ">
                <li className='cursor-pointer' onClick={handleClick}>About</li>
                <li className='px-1'>|</li>
                <li className='cursor-pointer' onClick={handleClick}>Weddings</li>
                <li className='px-1'>|</li>
                <li className='cursor-pointer' onClick={handleClick}>Funerals</li>
            </ul>
            <img className='align-middle md:hidden pt-1' src={!mobileNavOpen ? hamburgerMenu : closeIcon} onClick={() => setMobileNavOpen(!mobileNavOpen)} alt="mobile menu"/>
        </nav>
    );
};

export default Nav;