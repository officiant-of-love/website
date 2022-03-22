import Nav from '../Nav';

const Header = () => {
    return (
        <header className="bg-black opacity-40 p-5 md:p-3 flex justify-between md:block">
            <h1 className="font-semibold text-4xl lg:text-6xl text-white text-center">Officiant of Love</h1>
            <Nav />
        </header>
    );
};

export default Header;