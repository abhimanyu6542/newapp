import React from 'react';
// components --
import Header from './components/Header';
import PurchasePlans from './components/purchase-plans-tab/PurchasePlans';
import IncludingPlans from './components/including-plans/IncludingPlans';
import EnhancePlans from './components/enhance-plans/EnhancePlans';
import Questions from './components/FAQ/Questions';


function pricing() {
    return (
        <>
            <div className='w-full bg-background'>

                <Header />

                <PurchasePlans />

                <IncludingPlans />

                <EnhancePlans />

                <Questions />

            </div>
        </>
    )
}

export default pricing;