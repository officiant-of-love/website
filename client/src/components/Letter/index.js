import letterPhoto from "./assets/helena-letter.jpg";
import Social from '../Social';

const Letter = () => {
    return (
        <section className="bg-[#F7F3EB] w-full flex flex-col py-10">
            <h2 className="text-center text-5xl font-semibold mb-8">
                Letter from Helena
            </h2>
            <div className="flex flex-col lg:flex-row lg:justify-evenly lg:min-h-[640px]">
                <div className="bg-white flex flex-col lg:flex-row w-[95%] md:w-[65%] mx-auto lg:mx-0 p-7 rounded-3xl justify-center">
                    <img src={letterPhoto} className="object-cover lg:w-1/2" />
                    <div className="flex flex-col lg:ml-6 text-2xl pt-3 lg:pt-0 my-auto lg:w-1/2">
                        <p className="lg:leading-none text-left">
                            Thank you for being here. I hope to be able to assist you with
                            your needs. A little background on me, I am an ordained officiant,
                            officially ordained through Universal Life Church. I had a
                            multi-denominational upbringing and still apply the best parts of
                            what I have been taught into my daily life. I hold undergraduate
                            degrees in Psychology and Management from California State
                            University, Northridge. I am able to apply concepts that I have
                            learned to assist people through challenges that may arise in the
                            planning process, while effectively managing time and procedures.
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
