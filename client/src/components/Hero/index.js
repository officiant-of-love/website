import './style.css'
import Header from '../Header'

const Hero = ({page}) => {
    return (
        <section className={`flex flex-col bg-${page}-hero w-full h-[400px] lg:h-[650px] bg-cover bg-center -z-10 justify-center`}>
            <Header />
            <h1 className="text-center text-white font-bold text-[65px] lg:text-9xl my-auto lg:pt-[128px] pt-[100px] hero-title">Weddings</h1>
        </section>
    );
};

export default Hero;