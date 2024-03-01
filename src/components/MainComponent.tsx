import React, { useEffect, useState } from 'react'
import adviceFormat from '../interfaces/interfaces';
import getAdvice from '../DataServices/DataServices';
import bars from '../assets/images/pattern-divider-mobile.svg'
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
            <div className='w-11/12 mt-36 lighterGrey text-center rounded-xl'>
                <p className='green mt-9 mb-6 fontChange fontWeightChange text-sm tracking-[0.3em]'>ADVICE #{advicePop?.slip.id}</p>
                <p className='white mb-8 fontChange fontWeightChange text-2xl mx-5'>“{advicePop?.slip.advice}”</p>
                {/* <p className='green mt-9 mb-6 fontChange fontWeightChange text-xs tracking-[0.3em]'>ADVICE #117</p>
                <p className='white mb-6 fontChange fontWeightChange text-2xl mx-5'>“It is easy to sit up and take notice, what's difficult is getting up and taking action.”</p> */}

                <div className='flex justify-center'>
                    <img src={bars} className='' alt="Center Divider Bars" />
                </div>

                <div className='flex justify-center'>
                    <div onClick={changeAd} className='greenBG p-5 rounded-full relative top-8'>
                        <img src={dice} className='' alt="Center Divider Bars" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainComponent
