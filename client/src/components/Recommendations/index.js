import recOne from './Clare-Gierth.png'
import backArrow from './back-arrow.svg';
import nextArrow from './next-arrow.svg';

const Recommendations = () => {
    const rec = {
        img: recOne,
        text: 'My husband and I had a beautiful marriage ceremony with Helena as our officiant for our elopement. We had planned and replanned our wedding several times due to covid and finally decided to elope. Helena accommodated our wedding date on short notice and still provided us with full service options and ceremony customization. We greatly appreciated the ease of communication with Helena through text, phone calls, and email. Helena answered all of our questions about the marriage license process.  Helena was such a pleasure to speak with and be in her presence on our special day. We truly felt her sincerity and genuine love for the relationships she is officiating. Thank you Helena!',
        reviewer: 'Clare Gierth'
    }
    return(
        <section className="bg-[#F7F3EB] absolute top-[2075px] md:top-[1430px] lg:top-[1460px] w-full flex flex-col py-10">
            <h2 className="text-center text-5xl font-semibold mb-8">Recommendations</h2>
            <div class="flex justify-around">
                <img src={backArrow} className="drop-shadow-md h-12 my-auto" />
                <div className="bg-white flex flex-row w-[65%] p-7 rounded-3xl mx-8">
                    <img src={rec.img} className="object-none object-center"/>
                    <div className='flex flex-col ml-6 text-2xl'>
                        <p className='leading-none'>{rec.text}</p>
                        <p className='font-bold text-right'>- {rec.reviewer}</p>
                    </div>
                </div>
                <img src={nextArrow} className="drop-shadow-md h-12 my-auto"/>
            </div>
        </section>
    );
};

export default Recommendations;