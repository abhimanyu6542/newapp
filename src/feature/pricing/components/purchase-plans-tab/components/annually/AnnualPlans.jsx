import React from 'react';
// components --
import Store from './components/Store';
import Brand from './components/Brand';
import MarketPlace from './components/MarketPlace';
import EnterPrice from './components/EnterPrice';


function AnnualPlans() {
    return (
        <>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>

                <Store />

                <Brand />

                <MarketPlace />

                <EnterPrice />

            </div>
        </>
    )
}

export default AnnualPlans;