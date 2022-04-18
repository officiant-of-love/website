import { useState } from 'react';

import fullBackArrow from './back-arrow.svg';
import fullNextArrow from './next-arrow.svg';
import mobileNextArrow from './mobile-next-arrow.svg';
import mobileBackArrow from './mobile-back-arrow.svg';

const Recommendations = ({recArr}) => {
    const [recNum, setRecNum] = useState(0);
    const rec = recArr[recNum];

    const backClickHandler = () => {
        const recommendationsEl = document.getElementById("recommendations");
        window.scrollTo({
            top:recommendationsEl.offsetTop,
            behavior:"smooth"
        })
        if(recNum === 0) {
            setRecNum(recArr.length -1);
            return;
        }
        setRecNum(recNum -1);
    };

    const nextClickHandler = () => {
        const recommendationsEl = document.getElementById("recommendations");
        window.scrollTo({
            top:recommendationsEl.offsetTop,
            behavior:"smooth"
        })
        if(recNum === recArr.length -1) {
            setRecNum(0)
            return;
        }
        setRecNum(recNum + 1);
    };

    const zoomHandler = ({ reviewer }) => {
        return reviewer === 'Holly Bluhm' ? `` : `object-cover lg:w-1/2` 
    };

    return(
        <section className="bg-[#F7F3EB] md:top-[1430px] lg:top-[1460px] w-full flex flex-col py-10" id="recommendations">
            <h2 className="text-center text-5xl font-semibold mb-8">Recommendations</h2>
            <div className="flex flex-col lg:flex-row lg:justify-evenly lg:min-h-[640px]">
                <img src={fullBackArrow} className="drop-shadow-md h-12 my-auto hidden lg:flex" onClick={backClickHandler}/>
                <div className="bg-white flex flex-col lg:flex-row w-[95%] md:w-[65%] mx-auto lg:mx-0 p-7 rounded-3xl justify-center">
                    <img src={rec.img} className='object-cover lg:w-1/2'/>
                    <div className='flex flex-col lg:ml-6 text-2xl pt-3 lg:pt-0 my-auto lg:w-1/2'>
                        <p className='lg:leading-none text-left'>"{rec.text}"</p>
                        <p className='font-bold text-right overflow-scroll'>- {rec.reviewer}</p>
                    </div>
                </div>
                <img src={fullNextArrow} className="drop-shadow-md h-12 my-auto hidden lg:flex" onClick={nextClickHandler}/>
                <div className="flex lg:hidden justify-center">
                    <img src={mobileBackArrow} className='drop-shadow-lg h-12 mt-4' onClick={backClickHandler}/>
                    <img src={mobileNextArrow} className='drop-shadow-lg h-12 mt-4' onClick={nextClickHandler}/>
                </div>
            </div>
        </section>
    );
};

export default Recommendations;