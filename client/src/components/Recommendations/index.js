import { useState } from 'react';

import backArrow from './back-arrow.svg';
import nextArrow from './next-arrow.svg';

const Recommendations = ({recArr}) => {
    const [rec, setRec] = useState(recArr[0]);

    const backClickHandler = () => {
        console.log('back');
    };

    const nextClickHandler = () => {
        console.log('next')
    };

    return(
        <section className="bg-[#F7F3EB] absolute top-[2075px] md:top-[1430px] lg:top-[1460px] w-full flex flex-col py-10">
            <h2 className="text-center text-5xl font-semibold mb-8">Recommendations</h2>
            <div className="flex justify-around">
                <img src={backArrow} className="drop-shadow-md h-12 my-auto" onClick={backClickHandler}/>
                <div className="bg-white flex flex-row w-[65%] p-7 rounded-3xl mx-8">
                    <img src={rec.img} className="object-none object-center"/>
                    <div className='flex flex-col ml-6 text-2xl'>
                        <p className='leading-none'>{rec.text}</p>
                        <p className='font-bold text-right'>- {rec.reviewer}</p>
                    </div>
                </div>
                <img src={nextArrow} className="drop-shadow-md h-12 my-auto" onClick={nextClickHandler}/>
            </div>
        </section>
    );
};

export default Recommendations;