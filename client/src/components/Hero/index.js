import './style.css'
import Header from '../Header'

const Hero = ({page}) => {
    let heroBg;
    let heroText;

    switch(page) {
        case 'about':
            heroBg = 'bg-about-hero';
            heroText = 'About';
            break;
        case 'wedding':
            heroBg = 'bg-wedding-hero';
            heroText = 'Weddings';
            break;
        case 'funeral':
            heroBg = 'bg-funeral-hero';
            heroText = 'Funerals';
            break;
        case 'contact':
            heroBg = 'bg-contact-hero';
            heroText = 'Contact';
            break;
    }
    return (
        <section className={`flex flex-col ${heroBg} w-full h-[400px] lg:h-[650px] bg-cover bg-center -z-10 justify-center`}>
            <Header />
            <h1 className="text-center text-white font-bold text-[65px] lg:text-9xl my-auto  hero-title">{heroText}</h1>
        </section>
    );
};

export default Hero;