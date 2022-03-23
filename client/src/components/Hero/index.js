const Hero = ({heroImage, heroAlt}) => {
    return (
        <section>
            <img src={heroImage} alt={heroAlt} />
        </section>
    );
};

export default Hero;