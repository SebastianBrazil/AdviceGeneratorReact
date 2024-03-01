import React, { useEffect, useState, createRef } from 'react'
import adviceFormat from '../interfaces/interfaces';
import getAdvice from '../DataServices/DataServices';
import dice from '../assets/images/icon-dice.svg'

const MainComponent = () => {
    const [advicePop, setAdvicePop] = useState<adviceFormat>();
    const [isFlipped, setIsFlipped] = useState<boolean>(false);

    useEffect(() => {
        const adviceData = async () => {
            const fetchedData = await getAdvice();
            setAdvicePop(fetchedData);
        }
        adviceData();
    }, [isFlipped]);

    const changeAd = () => {
        setIsFlipped(!isFlipped);
    }

    return (
        <div className='flex justify-center'>
            <div className='w-11/12 lg:w-5/12 mt-36 lg:mt-56 lighterGrey text-center rounded-xl'>
                <p className='green mt-9 lg:mt-12 mb-6 lg:mb-9 fontChange fontWeightChange text-xs lg:text-base tracking-[0.3em]'>ADVICE #{advicePop?.slip.id}</p>
                <p className='white mb-6 fontChange fontWeightChange text-2xl lg:text-3xl mx-5 lg:mx-12'>“{advicePop?.slip.advice}”</p>
                {/* <p className='green mt-9 lg:mt-12 mb-6 lg:mb-9 fontChange fontWeightChange text-xs lg:text-base tracking-[0.3em]'>ADVICE #117</p>
                <p className='white mb-6 fontChange fontWeightChange text-2xl lg:text-3xl mx-5 lg:mx-12'>“It is easy to sit up and take notice, what's difficult is getting up and taking action.”</p> */}

                <div className='flex justify-center image'>
                    <div className='imageBg'></div>
                </div>

                <div className='flex justify-center'>
                    <div onClick={changeAd} className='greenBG p-5 lg:p-6 rounded-full relative top-8 lg:top-10 '>
                        <img src={dice} className='lg:w-8' alt="Dice" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainComponent
