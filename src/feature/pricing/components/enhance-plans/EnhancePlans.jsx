import React from 'react';
// components --
import MobileApp from './components/MobileApp';
import DeliveryManageMent from './components/DeliveryManageMent';
import Marketing from './components/Marketing';
import PlateFormSetup from './components/plateform-setup/PlateFormSetup';


function EnhancePlans() {
    return (
        <>
            <div className='w-full px-5 md:px-10 lg:px-0 py-10 md:py-14 flex flex-col items-center justify-center'>
                <h1 className='mb-10 text-2xl lg:text-4xl text-black font-bold'>Enhance Your Plan With Our Exclusive Add-Ons.</h1>

                <div className='w-full flex flex-col lg:flex-row items-start justify-center'>
                    <div className='w-full lg:w-[30vw] mr-7'>
                        <MobileApp />
                        <DeliveryManageMent />
                        <Marketing />
                    </div>

                    <div className='w-full lg:w-[50vw] '>
                        <PlateFormSetup />
                    </div>
                </div>

            </div>
        </>
    )
}

export default EnhancePlans;