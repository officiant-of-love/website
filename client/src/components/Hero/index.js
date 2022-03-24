import './style.css'

const Hero = () => {
    return (
        <section className={`flex bg-wedding-hero absolute top-0 w-full h-[400px] lg:h-[650px] bg-cover bg-center -z-10 justify-center`}>
            <h1 className="text-center text-white font-bold text-[65px] lg:text-9xl my-auto lg:pt-[128px] pt-[100px] hero-title">Weddings</h1>
        </section>
    );
};

export default Hero;