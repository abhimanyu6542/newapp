import React from 'react';
import BannerModal from './BannerModal';
import { useState } from 'react';


function Banner() {
    const [showModal, setShowModal] = useState(false);


    return (
        <>
            <div className='bg-white p-5 md:p-10 lg:p-20 flex items-center justify-center'>

                <div className='relative'>
                    <img
                        src="https://jungleworks.com/wp-content/uploads/2021/04/bg-banner.png"
                        alt="background"
                        className='h-52 lg:h-40 border-0 rounded-lg'
                    />

                    <div className='w-[90%] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row items-center justify-between'>
                        <h1 className='w-[85vw] lg:w-[40vw] mb-5 lg:mb-0 text-xl md:text-2xl text-white text-center lg:text-start font-bold '>Start your entrepreneurial journey with Jungleworks today!</h1>
                        <button onClick={() => setShowModal(true)} className='px-10 py-2 md:py-3 text-sm mg::text-lg text-white font-bold bg-blue2 border-0 rounded-lg'>Get in Touch</button>
                    </div>
                </div>


                {/* -- Banner modal -- */}
                {
                    showModal ? <BannerModal setShowModal={setShowModal} /> : null
                }

            </div>
        </>
    )
}

export default Banner;