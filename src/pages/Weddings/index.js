import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Recommendations from "../../components/Recommendations";

import ringsPhoto from "./assets/rings.jpg";
import vowsPhoto from "./assets/vows.jpg";
import ceremonyPhoto from "./assets/ceremony.jpg";
import angelicaRecPhoto from './assets/angelica-rec.png';
import clareRecPhoto from './assets/clare-rec.png';
import hollyRecPhoto from './assets/holly-rec.png';
import ninaRecPhoto from './assets/nina-rec.jpg';

const Weddings = () => {
  const servicesArr = [
    {
      name: "Simple Ceremony",
      photo: ringsPhoto,
      description:
        "The Simple Ceremony package includes one love poem reading, reading of marriage intentions, vow exchanges, the ring exchange & the signing of marriage certificate.",
      alt: ''
    },
    {
      name: "Custom Ceremony",
      photo: vowsPhoto,
      description:
        "The Custom Ceremony package includes a personalized love story reading, reading of the marriage intentions, multiple love poem readings, vow exchange option readings, ring exchanges option readings, personalized acknowledgements to those most important in the couples lives, a unity candle lighting, optional additional custom requests & the signing of the marriage certificate.",
      alt: ''
    },
    {
      name: "Ceremony + MC Host",
      photo: ceremonyPhoto,
      description:
        "The Ceremony plus MC Host package includes all that is included in the Custom Ceremony package plus additional hours of services to MC one transition of the wedding to the next.",
      alt: ''
    },
  ];
  const recArr = [
    {
      img: ninaRecPhoto,
      text: "Amazing person! Helena’s very sweet and attentive to me and my wife. She went beyond expectations on our special day! Everyone was happy and she brought tears to all my guests with her beautiful words and readings! Thank you Helena for being there and for helping us even after the wedding with all our questions.",
      reviewer: "Nina Schwab",
      alt: 'Helena and couple take a selfie after ceremony.'
    },
    {
      img: clareRecPhoto,
      text: "My husband and I had a beautiful marriage ceremony with Helena as our officiant for our elopement. We had planned and replanned our wedding several times due to covid and finally decided to elope. Helena accommodated our wedding date on short notice and still provided us with full service options and ceremony customization. We greatly appreciated the ease of communication with Helena through text, phone calls, and email. Helena answered all of our questions about the marriage license process.  Helena was such a pleasure to speak with and be in her presence on our special day. We truly felt her sincerity and genuine love for the relationships she is officiating. Thank you Helena!",
      reviewer: "Clare Gierth",
      alt: 'Helena smiling between the beautiful wedding couple after the ceremony.'
    },
    {
      img: angelicaRecPhoto,
      text: "Where do I begin?! My then fiancé and I were scheduled to elope at city hall when we came down with COVID and had to cancel our civil ceremony. We were super bummed; however, I promised my fiancé that I would plan a surprise ceremony, something small and sweet to make up for the cancellation. Upon doing research, I came across Minister Helena and called her late at night to promptly start planning our ceremony with a specific date in mind. She was so detailed and involved, she sent over passages and vows that we would be able to choose from and worked closely with me to plan the ceremony from start to finish. She was flexible and considerate about our location and how it may tie in with our story. My now husband and I are so pleased that we chose someone as kind and thoughtful as Minister Helena to elope us. She will forever be part of our union. Thank you, a million times. Always with love from Hagop and me.",
      reviewer: "Angelica Akopyan",
      alt: 'Helena and couple standing on an oceanside cliff.'
    },
    {
      img: hollyRecPhoto,
      text: "Helena was a fabulous officiant. She guided us through the ceremony planning process and offered many resources to help us decide what components we wanted to include. She checked in with us at just the right times in the weeks leading up to the ceremony. One wedding day, Helena was professional, warm, and loving as she officiated our zoom wedding! Thank you Helena!",
      reviewer: "Holly Bluhm",
      alt: 'Helena and couple take a selfie after ceremony.'
    }
  ];
  return (
    <>
      <Hero page="wedding"/>
      <Services servicesArr={servicesArr} />
      <Recommendations recArr={recArr} />
    </>
  );
};

export default Weddings;
