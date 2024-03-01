import React, { useEffect, useState } from 'react'
import adviceFormat from '../interfaces/interfaces';
import getAdvice from '../DataServices/DataServices';

const MainComponent = () => {
    const [advicePop, setAdvicePop] = useState<adviceFormat>();

    useEffect(() => {
        const adviceData = async () => {
          const fetchedData = await getAdvice();
          setAdvicePop(fetchedData);
        }
        adviceData();
      }, []);

    return (
        <div className='flex justify-center'>
            <div className='w-11/12 lighterGrey text-center rounded-xl'>
                {/* <p className='green mt-9 mb-6 fontChange fontWeightChange text-sm'>ADVICE #{advicePop?.slip.id}</p>
                <p className='white mb-8 fontChange fontWeightChange text-2xl'>“{advicePop?.slip.advice}”</p> */}
                <p className='green mt-9 mb-6 fontChange fontWeightChange text-sm tracking-[0.3em]'>ADVICE #117</p>
                <p className='white mb-8 fontChange fontWeightChange text-2xl mx-5'>“It is easy to sit up and take notice, what's difficult is getting up and taking action.”</p>
                {/* <img src={} className='h-8 w-9' alt="" /> */}
            </div>
        </div>
    )
}

export default MainComponent
