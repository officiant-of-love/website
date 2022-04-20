import Hero from '../../components/Hero';
import Form from '../../components/Form';

const Contact = () => {
    return (
        <>
            <Hero page="contact"/>
            <section className="bg-[#F7F3EB] w-full flex flex-col py-10">
                <h2 className="text-center text-5xl font-semibold mb-8">
                    Contact Me!
                </h2>
                <div className="flex lg:flex-row lg:justify-evenly ">
                    <div className="bg-white flex flex-col lg:flex-row w-[95%] md:w-[55%] mx-auto lg:mx-0 p-7 rounded-3xl justify-center max-w-2xl">
                        <Form />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;