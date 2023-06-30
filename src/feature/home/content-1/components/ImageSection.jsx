import React from 'react';
import { BiSolidUpArrowCircle } from 'react-icons/bi';
// shapes images --
import purpleDots from '../../../../image/home-1/purple-dots.png';
import greenShape from '../../../../image/home-1/l1-contentOne-shape-1.png';
import purpleShape from '../../../../image/home-1/l1-contentOne-shape-2.png';


function ImageSection() {
    return (
        <>
            <div>

                <div className='relative'>
                    <img src="" alt="image section" className='z-20 relative w-[85vw] h-[65vh] md:w-[50vw] md:h-[75vh] lg:w-[28vw] lg:h-[75vh] bg-slate-300 border-0 rounded-md' />

                    {/* -- fancy shapes -- */}
                    <img src={purpleDots} alt="purple dots" className='z-10 w-[20vh] h-[20vh] absolute -top-8 -left-3 md:-top-8 md:-left-8 ' />
                    <img src={greenShape} alt="greenShape" className='z-10 w-[20vh] h-[20vh] absolute -top-10 right-0 md:-top-14 md:right-9 ' />
                    <img src={purpleShape} alt="purpleShape" className='z-10 w-[20vh] h-[20vh] absolute bottom-10 -left-3 md:bottom-10 md:-left-10 ' />

                    {/* -- orange box -- */}
                    <div className='z-30 p-6 md:p-12 bg-orange6 border-0 rounded-md absolute -bottom-20 right-6 md:-bottom-16 md:-right-16 shadow-2xl shadow-orange6'>
                        <div className='w-full h-full text-white flex flex-col items-center justify-center'>
                            <div className='mb-3 flex items-center'>
                                <h1 className='mr-4 text-6xl font-semibold'>68%</h1>
                                <BiSolidUpArrowCircle className='text-4xl text-slate-700 bg-white border-0 rounded-full' />
                            </div>
                            <p className='w-40 text-xl font-medium'>Extra growth for your company.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ImageSection;