import Hero from '../../components/Hero';
import Intro from '../../components/Introduction';
import Letter from '../../components/Letter';
import './assets/style.css';

const About = () => {
    return (
        <div class="about">
            <Hero page="about" />
            <Intro />
            <Letter />
        </div>
    );
};

export default About;