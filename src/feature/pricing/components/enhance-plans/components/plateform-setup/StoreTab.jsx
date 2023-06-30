import React from 'react';
import { BsCircleFill } from 'react-icons/bs';


function StoreTab() {
    return (
        <>
            <div className='text-sm md:text-md text-gray font-medium'>
                <p className='mb-3'>Onboarding will be additionally charged <span className='font-bold'>$150</span> which contains:</p>
                <ul>
                    <li className='mb-3 flex items-start'>
                        <BsCircleFill className='mr-3 mt-2 text-[9px] text-blue2' /> Add Catalogue
                    </li>
                    <li className='mb-3 flex items-start'>
                        <BsCircleFill className='mr-3 mt-2 text-[9px] text-blue2' /> Domain pointing * Personal domain charges additional
                    </li>
                    <li className='mb-3 flex items-start'>
                        <BsCircleFill className='mr-3 mt-2 text-[9px] text-blue2' /> 2 Coupons and Discount
                    </li>
                    <li className='mb-3 flex items-start'>
                        <BsCircleFill className='mr-3 mt-2 text-[9px] text-blue2' /> Google tag manager account link
                    </li>
                    <li className='mb-3 flex items-start'>
                        <BsCircleFill className='mr-3 mt-2 text-[9px] text-blue2' /> 1 Payment Integration
                    </li>
                    <li className='mb-3 flex items-start'>
                        <BsCircleFill className='mr-3 mt-2 text-[9px] text-blue2' /> Integrate with Tookan for hyperlocal delivery
                    </li>
                    <li className='mb-3 flex items-start'>
                        <BsCircleFill className='mr-3 mt-2 text-[9px] text-blue2' /> Hippo Integration for growth
                    </li>
                    <li className='mb-3 flex items-start'>
                        <BsCircleFill className='mr-3 mt-2 text-[9px] text-blue2' /> Priority support for 5 days
                    </li>
                </ul>
                <p className='mb-3'>- Additional charges will be applicable for rework or other setup.</p>
            </div>
        </>
    )
}

export default StoreTab;