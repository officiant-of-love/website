import Hero from "../../components/Hero";
import Quote from "../../components/Quote";

import candlePhoto from "./assets/candles.jpg";

const Funerals = () => {
    return (
        <>
            <Hero page="funeral" />
            <Quote />
            <section className="bg-[#F7F3EB] w-full flex flex-col py-10">
                <h2 className="text-center text-5xl font-semibold mb-8">
                    Services
                </h2>
                <div className="flex flex-col lg:flex-row lg:justify-evenly ">
                    <div className="bg-white flex flex-col lg:flex-row w-[95%] md:w-[65%] mx-auto lg:mx-0 p-7 rounded-3xl justify-center">
                        <img src={candlePhoto} className="object-cover lg:w-1/2" alt=""/>
                        <div className="flex flex-col lg:ml-6 text-2xl pt-3 lg:pt-0 my-auto lg:w-1/2">
                            <p className="lg:leading-none text-center md:text-left">
                            The Funeral package includes the writing of the eulogy, choices of appropriate poems, optional prayers, composition of the funeral and grievance support resource guidance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Funerals;
