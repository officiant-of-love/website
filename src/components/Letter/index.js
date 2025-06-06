import letterPhoto from "./assets/helena-letter.png";
import Social from '../Social';

const Letter = () => {
    return (
        <section className="bg-[#F7F3EB] w-full flex flex-col py-10">
            <h2 className="text-center text-5xl font-semibold mb-8">
                Letter from Helena
            </h2>
            <div className="flex flex-col lg:flex-row lg:justify-evenly lg:min-h-[640px]">
                <div className="bg-white flex flex-col lg:flex-row w-[95%] md:w-[65%] mx-auto lg:mx-0 p-7 rounded-3xl justify-center">
                    <img src={letterPhoto} className="object-cover lg:w-1/2" alt="Helena smiling into the camera after performing a ceremony"/>
                    <div className="flex flex-col lg:ml-6 text-2xl pt-3 lg:pt-0 my-auto lg:w-1/2">
                        <p className="lg:leading-none text-left">
                        Thank you for visiting my website. I hope to be able to assist you with your needs. To share a little background on me, I am an ordained officiant with degrees in Psychology and Management from California State University, Northridge. I am able to apply concepts that I have learned to assist people through challenges that may arise in the planning process, while effectively managing time and procedures. I am an LGBTQ ally. Please reach out to me to see how I can assist. 
                        </p>
                        <p className="text-right pt-4 font-bold">- Helena</p>
                    </div>
                </div>
            </div>
            <Social />
        </section>
    );
};

export default Letter;
