import ringsPhoto from './rings.jpg';
import vowsPhoto from './vows.jpg';
import ceremonyPhoto from './ceremony.jpg';

const Services = () => {
    const servicesArr = [
        {
            name: 'Simple Ceremony',
            photo: ringsPhoto,
            description: 'The Simple Ceremony package includes one love poem reading, reading of marriage intentions, vow exchanges, the ring exchange & the signing of marriage certificate.'
        },
        {
            name: 'Custom Ceremony',
            photo: vowsPhoto,
            description: 'The Custom Ceremony package includes a personalized love story reading, reading of the marriage intentions, multiple love poem readings, vow exchange option readings, ring exchanges option readings, personalized acknowledgements to those most important in the couples lives, a unity candle lighting, optional additional custom requests & the signing of the marriage certificate.'
        },
        {
            name: 'Ceremony + MC Host',
            photo: ceremonyPhoto,
            description: 'The Ceremony plus MC Host package includes all that is included in the Custom Ceremony package plus additional hours of services to MC one transition of the wedding to the next.'
        },

    ];
    return(
        <section className="absolute flex top-[400px] lg:top-[650px] w-full h-[965px] justify-center">
            <div className="bg-[#F7F3EB] flex flex-col m-auto w-[85%] p-6 text-center">
                <h1 className="font-semibold text-5xl mb-6 ">Services</h1>
                <div className="flex">
                    <div className="flex flex-col mx-2 lg:w-[330px]">
                        <h2 className='text-3xl'>{servicesArr[0].name}</h2>
                        <img className='m-4' src={servicesArr[0].photo} alt="" />
                        <p className="text-xl">{servicesArr[0].description}</p>
                    </div>
                    <div className="flex flex-col mx-2 lg:w-[330px]">
                        <h2 className='text-3xl'>{servicesArr[1].name}</h2>
                        <img className='m-4' src={servicesArr[1].photo} alt="" />
                        <p className="text-xl">{servicesArr[1].description}</p>
                    </div>
                    <div className="flex flex-col mx-2 lg:w-[330px]">
                        <h2 className='text-3xl'>{servicesArr[2].name}</h2>
                        <img className='m-4' src={servicesArr[2].photo} alt="" />
                        <p className="text-xl">{servicesArr[2].description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;