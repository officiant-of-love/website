import Hero from '../../components/Hero';
import Services from '../../components/Services';

import ringsPhoto from "./rings.jpg";
import vowsPhoto from "./vows.jpg";
import ceremonyPhoto from "./ceremony.jpg";

const Weddings = () => {
    const servicesArr = [
        {
          name: "Simple Ceremony",
          photo: ringsPhoto,
          description:
            "The Simple Ceremony package includes one love poem reading, reading of marriage intentions, vow exchanges, the ring exchange & the signing of marriage certificate.",
        },
        {
          name: "Custom Ceremony",
          photo: vowsPhoto,
          description:
            "The Custom Ceremony package includes a personalized love story reading, reading of the marriage intentions, multiple love poem readings, vow exchange option readings, ring exchanges option readings, personalized acknowledgements to those most important in the couples lives, a unity candle lighting, optional additional custom requests & the signing of the marriage certificate.",
        },
        {
          name: "Ceremony + MC Host",
          photo: ceremonyPhoto,
          description:
            "The Ceremony plus MC Host package includes all that is included in the Custom Ceremony package plus additional hours of services to MC one transition of the wedding to the next.",
        },
      ];
    return(
        <main>
            <Hero />f
            <Services servicesArr={servicesArr}/>
        </main>
    );
};

export default Weddings;