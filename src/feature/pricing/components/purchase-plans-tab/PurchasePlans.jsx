import React, { useState } from 'react';
import clsx from 'clsx';
// components --
import AnnualPlans from './components/annually/AnnualPlans';
import SemiAnnualPlans from './components/semi-annually/SemiAnnualPlans';


function PurchasePlans() {
    const [currentTabNumber, setCurrentTabNumber] = useState(1);
    const displayTabData = (num) => {
        switch (num) {
            case 1:
                return <SemiAnnualPlans />
            case 2:
                return <AnnualPlans />
            default:
                return <SemiAnnualPlans />
        }
    }


    return (
        <>
            <div className='w-full px-5 lg:px-0 py-7 lg:py-16 flex flex-col items-center'>

                <div className='mb-10 bg-blue1 border-0 rounded-md'>
                    <button onClick={() => setCurrentTabNumber(1)} className={clsx('px-5 md:px-14 py-1 md:py-4 text-md md:text-lg text-blue2 font-semibold bg-blue1 border-0 rounded-md md:rounded-lg', (currentTabNumber === 1) && "text-white bg-blue2")} >Semi Annually</button>
                    <button onClick={() => setCurrentTabNumber(2)} className={clsx('px-5 md:px-14 py-1 md:py-4 text-md md:text-lg text-blue2 font-semibold bg-blue1 border-0 rounded-md md:rounded-lg', (currentTabNumber === 2) && "text-white bg-blue2")} >Annually</button>
                </div>


                {/* -- Displaying data -- */}
                <div>
                    {
                        displayTabData(currentTabNumber)
                    }
                </div>
            </div>
        </>
    )
}

export default PurchasePlans;