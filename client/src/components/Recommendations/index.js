import { useState } from 'react';

import fullBackArrow from './back-arrow.svg';
import fullNextArrow from './next-arrow.svg';
import mobileNextArrow from './mobile-next-arrow.svg';
import mobileBackArrow from './mobile-back-arrow.svg';

const Recommendations = ({recArr}) => {
    const [recNum, setRecNum] = useState(0);
    const rec = recArr[recNum];

    const backClickHandler = () => {
        if(recNum === 0) {
            setRecNum(recArr.length -1);
            return;
        }
        setRecNum(recNum -1);
    };

    const nextClickHandler = () => {
        if(recNum === recArr.length -1) {
            setRecNum(0)
            return;
        }
        setRecNum(recNum + 1);
    };

    const zoomHandler = ({ reviewer }) => {
        return reviewer === 'Holly Bluhm' ? `lg:max-w-md` : `object-cover lg:object-center lg:max-w-md` 
    };

    return(
        <section className="bg-[#F7F3EB] absolute top-[2075px] md:top-[1430px] lg:top-[1460px] w-full flex flex-col py-10">
            <h2 className="text-center text-5xl font-semibold mb-8">Recommendations</h2>
            <div className="flex flex-col lg:flex-row justify-center">
                <img src={fullBackArrow} className="drop-shadow-md h-12 my-auto hidden lg:flex" onClick={backClickHandler}/>
                <div className="bg-white flex flex-col lg:flex-row w-[95%] lg:w-[65%] p-7 rounded-3xl mx-auto">
                    <img src={rec.img} className={zoomHandler(rec)}/>
                    <div className='flex flex-col lg:ml-6 text-2xl pt-3 lg:pt-0 my-auto'>
                        <p className='lg:leading-none text-xl text-left'>"{rec.text}"</p>
                        <p className='font-bold text-right overflow-scroll'>- {rec.reviewer}</p>
                    </div>
                </div>
                <img src={fullNextArrow} className="drop-shadow-md h-12 my-auto hidden lg:flex" onClick={nextClickHandler}/>
                <div className="flex lg:hidden justify-center">
                    <img src={mobileBackArrow} className='drop-shadow-lg h-12 mt-4'/>
                    <img src={mobileNextArrow} className='drop-shadow-lg h-12 mt-4'/>
                </div>
            </div>
        </section>
    );
};

export default Recommendations;