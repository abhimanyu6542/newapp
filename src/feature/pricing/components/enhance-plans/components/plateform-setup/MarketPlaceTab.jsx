import React from 'react';
import {BsCircleFill} from 'react-icons/bs';


function MarketPlaceTab() {
    return (
        <>
            <div className='text-sm md:text-md text-gray font-medium'>
                <p className='mb-3'>- Additional charges will be applicable for rework on:</p>
                <ul>
                    <li className='mb-3 flex items-start'>
                        <BsCircleFill className='mr-3 mt-2 text-[9px] text-blue2' />
                        App Rebranding- <span className='font-bold'>$100/app/platform</span>
                    </li>
                    <li className='mb-3 flex items-start'>
                        <BsCircleFill className='mr-3 mt-2 text-[9px] text-blue2' />
                        Logo Changes- <span className='font-bold'>$200</span>
                    </li>
                    <li className='mb-3 flex items-start'>
                        <BsCircleFill className='mr-3 mt-2 text-[9px] text-blue2' />
                        Email Whitelisting- <span className='font-bold'>$99</span>
                    </li>
                    <li className='mb-3 flex items-start'>
                        <BsCircleFill className='mr-3 mt-2 text-[9px] text-blue2' />
                        Domain Pointing-  <span className='font-bold'>$99</span>
                    </li>
                </ul>
                <p className='mb-3'>- Build Upload support is additionally charged at <span className='font-bold'>$50/app/platform.</span> </p>
                <p className='mb-3'>- Customer Support for Platform setup, onboarding will be additionally charged.</p>
            </div>
        </>
    )
}

export default MarketPlaceTab;