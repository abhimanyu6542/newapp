import React from 'react';
// shapes --
import yellowShape from '../../../../image/home-1/l1-hero-shape-1.png';
import blueShape from '../../../../image/home-1/l1-hero-shape-2.png';
import triangleShape from '../../../../image/home-1/l1-hero-shape-3.png';


function ImageSection() {
    return (
        <>
            <div>

                <div className='relative'>
                    {/* -- Images -- */}
                    <img src="" alt="image-1" className='z-20 relative h-[40vh] w-[85vw] md:h-[50vh] md:w-[70vw] lg:h-[400px] lg:w-[600px] bg-gray-200 border-0 rounded-md' />
                    <img src="" alt="image-2" className='z-30 h-20 w-20 md:h-32 md:w-32 bg-gray-400 absolute -top-5  -left-5 md:-top-5  md:-left-5 shadow-2xl shadow-gray-400 border-0 rounded-md' />
                    <img src="" alt="image-3" className='z-10 h-28 w-28 md:h-44 md:w-44 bg-gray-500 absolute -top-20 right-8 md:-top-32 md:right-10 border-0 rounded-md' />

                    {/* -- fancy shapes -- */}
                    <img src={yellowShape} alt="shape-1" className='z-10 hidden md:block absolute -bottom-14 -left-14' />
                    <img src={blueShape} alt="shape-2" className='z-10 hidden md:block absolute top-10 -right-20' />
                    <img src={triangleShape} alt="shape-3" className='z-10 hidden md:block absolute -bottom-14 left-60' />
                </div>

            </div>
        </>
    )
}

export default ImageSection;