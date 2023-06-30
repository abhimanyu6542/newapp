import React from 'react';
import CardLayout from './CardLayout';
// icons --
import {FaClipboardList} from 'react-icons/fa';
import {BiSearch} from 'react-icons/bi';
import {AiFillCreditCard} from 'react-icons/ai';
import {TbSeo} from 'react-icons/tb';
import {HiDocument} from 'react-icons/hi';
import {GrCloudUpload} from 'react-icons/gr';
import {FaNetworkWired} from 'react-icons/fa';
import {BsGiftFill} from 'react-icons/bs';
import {MdOutlineMailLock} from 'react-icons/md';
import {LuLanguages} from 'react-icons/lu';
import {RiSecurePaymentLine} from 'react-icons/ri';
import {SiSpringsecurity} from 'react-icons/si';



const data = [
    {
        icon: <FaClipboardList />,
        heading: "Unlimited Users & Listings"
    },
    {
        icon: <BiSearch />,
        heading: "Custom Domain"
    },
    {
        icon: <AiFillCreditCard />,
        heading: "No Transaction Fee"
    },
    {
        icon: <TbSeo />,
        heading: "Integrated SEO Tools"
    },
    {
        icon: <HiDocument />,
        heading: "Customizable Content Pages"
    },
    {
        icon: <GrCloudUpload />,
        heading: "Real-Time Updates"
    },
    {
        icon: <FaNetworkWired />,
        heading: "Inventory Mangement"
    },
    {
        icon: <BsGiftFill />,
        heading: "Gift Cards/Wallets"
    },
    {
        icon: <MdOutlineMailLock />,
        heading: "Social Logins"
    },
    {
        icon: <LuLanguages />,
        heading: "35+ Languages Supported"
    },
    {
        icon: <RiSecurePaymentLine />,
        heading: "75+ Payment Gateways Integrated"
    },
    {
        icon: <SiSpringsecurity />,
        heading: "Free SSL Certificate"
    },
]


function IncludingPlans() {
    return (
        <>
            <div className='py-14 w-full bg-white flex flex-col justify-center items-center'>
                <h1 className='mb-10 md:mb-20 text-xl md:text-4xl text-black font-bold'>All of our plans Include</h1>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'>
                    {
                        data.map((data, id) => (
                            <div key={id}>
                                <CardLayout iconName={data.icon} heading={data.heading} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default IncludingPlans;