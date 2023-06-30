import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import FeatureCard from './FeatureCard';
import Platform from '../../../assets/platform.png';
import Private from '../../../assets/private.png';
import Web from '../../../assets/web.png';
import Access from '../../../assets/access.png';
import Merchant from '../../../assets/merchant.png';

const ServiceAndSupport = () => {
  return (
    <>
      <div className="mt-3">
        <h1 className="pr-16 text-[#323b4b] font-bold text-4xl pl-2.5">Service and Support</h1>
        <div className="bg-[#fafbfc]">
          <div className="mt-10 sm:pl-2.5 px-3 grid lg:grid-cols-2 grid-cols-1 w-full ">
            <FeatureCard
              heading={'Platform types'}
              description={
                'Need an ordering platform to sell products, provide services or facilitate peer-to-peer rentals? We support it all!'
              }
              icon={Platform}
            />
            <FeatureCard
              heading={'Private Store'}
              description={
                'Make your store private. Approve or invite sellers to the platform, or both the sellers and buyers.'
              }
              icon={Private}
            />
            <FeatureCard
              heading={'Web Apps'}
              description={
                'Customizable & fully responsive mobile-friendly website and apps for both iOS and android to facilitate customer ordering on the go.'
              }
              icon={Web}
            />
            <FeatureCard
              heading={'Access Control'}
              description={
                'Administrators can create multiple sub-accounts to manage orders, edit catalogue, run promotions or manage customer queries.'
              }
              icon={Access}
            />
            <FeatureCard
              heading={'Merchant apps'}
              description={
                "Manage on the go with Yelo's merchant apps. Update your store, manage inventory and fulfil orders."
              }
              icon={Merchant}
            />
          </div>
          <div className="flex justify-start items-center ml-8 my-5">
            <Link className="text-[#5F6673] font-medium text-xl leading-7">Leran More</Link>
            <AiOutlineArrowRight className="ml-1 w-5 h-5 text-[#5F6673] font-medium text-xl " />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceAndSupport;
