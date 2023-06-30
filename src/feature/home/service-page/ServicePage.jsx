import React from 'react';
import Image from '../../../image/home-1/services-shape-l1.png';
// components --
import Heading from './components/Heading';
import ServicePoints from './components/ServicePoints';


function ServicePage() {
    return (
        <>
            <div className='py-32 px-5 md:px-10 lg:px-20 relative border-t-2 border-gray-300'>

                <div className='absolute top-[30%] -left-[6%] '>
                    <img src={Image} alt="fancy stripe" className='w-[10vw] h-[20vh] ' />
                </div>

                <div className='mb-20 lg:mb-32'>
                    <Heading />
                </div>

                <div>
                    <ServicePoints />
                </div>

            </div>
        </>
    )
}

export default ServicePage;