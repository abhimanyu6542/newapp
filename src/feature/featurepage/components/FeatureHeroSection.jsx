import React, { useRef } from 'react';
import OrderingPlatForm from './OrderingPlatForm';
import BrowsingListings from './BrowsingListings';
import OrderingFeatures from './OrderingFeatures';
import StoreManagement from './StoreManagement';
import FulfilmentAndDelivery from './FulfilmentAndDelivery';
import Payments from './Payments';
import Checkout from './Checkout';
import ChatNotifications from './ChatNotifications';
import Analytics from './Analytics';
import MarketingAndSEO from './MarketingAndSEO';
import ServiceAndSupport from './ServiceAndSupport';
import Hosting from './Hosting';
import DemandCard from './DemandCard';
// import FeatureHero from '../../../assets/feature-hero.png'
import Academy from '../../../assets/academy.png';
import Helpdesk from '../../../assets/helpdesk.png';
import Blogs from '../../../assets/blogs.png';
import Business from '../../../assets/business.png';
import '../../../style/featureStyle.css';

const FeatureHeroSection = () => {
  const orderingPlatform = useRef();
  const browsingListings = useRef();
  const orderingFeatures = useRef();
  const storeManagement = useRef();
  const fulfilmentAndDelivery = useRef();
  const payments = useRef();
  const checkout = useRef();
  const chatNotifications = useRef();
  const analytics = useRef();
  const marketingAndSEO = useRef();
  const serviceAndSupport = useRef();
  const hosting = useRef();

  const scrollHandler = (elemRef) => {
    window.scrollTo({ top: elemRef.current.scrollIntoView(), behavior: 'smooth' });
  };
  return (
    <>
      <div className="bg-[url('https://jungleworks.com/wp-content/uploads/2021/05/1-st-fold-img-1.png')] h-[450px]">
        <div className="grid sm:grid-cols-2 grid-cols-1 justify-center items-center">
          <div className="mx-16 sm:mt-36 mt-20 sm:mx-16 md:mx-12 lg:mx-auto sm:w-96 ">
            <h1 className="text-white text-4xl font-bold">
              Features that make your Ordering platform powerful
            </h1>
            <p className="text-white font-medium mt-5 text-lg">
              Build your brand and grow your online business
            </p>
          </div>
          <div></div>
        </div>
      </div>

      {/* New Section  */}

      <div className="w-full h-20 border-b mb-2 border-black flex justify-start items-center">
        <button className="sm:ml-24 ml-2 bg-[#e5f1ff] text-[#377dff] rounded-3xl px-5 sm:px-9 py-2 font-medium text-lg">
          Features
        </button>
        <button className="sm:ml-16 ml-2 text-[#377dff] rounded-3xl font-medium text-lg">
          Integrations
        </button>
        <button className="sm:ml-16 ml-2 text-[#377dff] rounded-3xl font-medium text-lg">
          Themes
        </button>
      </div>

      {/* New Section  */}
      <div className="flex justify-start mt-16 w-full items-start mb-5">
        <div className="lg:flex block sm:justify-start justify-center w-full items-start mx-auto sm:mx-28 relative">
          <div className="shadow-xl border bg-[#ffffff] rounded-xl p-2 h-full w-96 hidden lg:block sticky top-20 left-0">
            <h1
              onClick={() => scrollHandler(orderingPlatform)}
              className="mx-3 px-3 py-2
            hover:text-black
            active:bg-[#e5f1ff] active:text-[#377dff] cursor-pointer text-[#5F6673]  my-4"
            >
              Ordering Platform
            </h1>
            <h1
              onClick={() => scrollHandler(browsingListings)}
              className="mx-3 px-3 py-2
            hover:text-black
            active:bg-[#e5f1ff] active:text-[#377dff] cursor-pointer text-[#5F6673]  my-4"
            >
              Browsing & Listings
            </h1>
            <h1
              onClick={() => scrollHandler(orderingFeatures)}
              className="mx-3 px-3 py-2
            hover:text-black
            active:bg-[#e5f1ff] active:text-[#377dff] cursor-pointer text-[#5F6673]  my-4"
            >
              Ordering Features
            </h1>
            <h1
              onClick={() => scrollHandler(storeManagement)}
              className="mx-3 px-3 py-2
            hover:text-black
            active:bg-[#e5f1ff] active:text-[#377dff] cursor-pointer text-[#5F6673]  my-4"
            >
              Store Management
            </h1>
            <h1
              onClick={() => scrollHandler(fulfilmentAndDelivery)}
              className="mx-3 px-3 py-2
            hover:text-black
            active:bg-[#e5f1ff] active:text-[#377dff] cursor-pointer text-[#5F6673]  my-4"
            >
              Fulfilment and delivery
            </h1>
            <h1
              onClick={() => scrollHandler(payments)}
              className="mx-3 px-3 py-2
            hover:text-black
            active:bg-[#e5f1ff] active:text-[#377dff] cursor-pointer text-[#5F6673]  my-4"
            >
              Payments
            </h1>
            <h1
              onClick={() => scrollHandler(checkout)}
              className="mx-3 px-3 py-2
            hover:text-black
            active:bg-[#e5f1ff] active:text-[#377dff] cursor-pointer text-[#5F6673]  my-4"
            >
              Checkout
            </h1>
            <h1
              onClick={() => scrollHandler(chatNotifications)}
              className="mx-3 px-3 py-2
            hover:text-black
            active:bg-[#e5f1ff] active:text-[#377dff] cursor-pointer text-[#5F6673]  my-4"
            >
              Chat & Notifications
            </h1>
            <h1
              onClick={() => scrollHandler(analytics)}
              className="mx-3 px-3 py-2
            hover:text-black
            active:bg-[#e5f1ff] active:text-[#377dff] cursor-pointer text-[#5F6673]  my-4"
            >
              Analytics
            </h1>
            <h1
              onClick={() => scrollHandler(marketingAndSEO)}
              className="mx-3 px-3 py-2
            hover:text-black
            active:bg-[#e5f1ff] active:text-[#377dff] cursor-pointer text-[#5F6673]  my-4"
            >
              Marketing and SEO
            </h1>
            <h1
              onClick={() => scrollHandler(serviceAndSupport)}
              className="mx-3 px-3 py-2
            hover:text-black
            active:bg-[#e5f1ff] active:text-[#377dff] cursor-pointer text-[#5F6673]  my-4"
            >
              Service and Support
            </h1>
            <h1
              onClick={() => scrollHandler(hosting)}
              className="mx-3 px-3 py-2
            hover:text-black
            active:bg-[#e5f1ff] active:text-[#377dff] cursor-pointer text-[#5F6673]  my-4"
            >
              Hosting
            </h1>
          </div>

          <div className="w-full mx-2 md:ml-20">
            <div className="mt-10" ref={orderingPlatform}>
              <OrderingPlatForm />
            </div>
            <div className="mt-10" ref={browsingListings}>
              <BrowsingListings />
            </div>
            <div className="mt-10" ref={orderingFeatures}>
              <OrderingFeatures />
            </div>
            <div className="mt-10" ref={storeManagement}>
              <StoreManagement />
            </div>
            <div className="mt-10" ref={fulfilmentAndDelivery}>
              <FulfilmentAndDelivery />
            </div>
            <div className="mt-10" ref={payments}>
              <Payments />
            </div>
            <div className="mt-10" ref={checkout}>
              <Checkout />
            </div>
            <div className="mt-10" ref={chatNotifications}>
              <ChatNotifications />
            </div>
            <div className="mt-10" ref={analytics}>
              <Analytics />
            </div>
            <div className="mt-10" ref={marketingAndSEO}>
              <MarketingAndSEO />
            </div>
            <div className="mt-10" ref={serviceAndSupport}>
              <ServiceAndSupport />
            </div>
            <div className="mt-10" ref={hosting}>
              <Hosting />
            </div>
          </div>
        </div>
      </div>

      {/* Demand Section  */}

      <div className="bg-[#fafbfc] lg:h-[500px]">
        <div className="flex">
          <div className="mx-auto my-12 text-[#474747] font-black text-4xl leading-5">
            On-Demand 101
          </div>
        </div>
        <div className="flex">
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-8 mx-5 sm:mx-auto grid-cols-1 justify-center items-center">
            <div className="">
              <DemandCard
                heading={'Academy'}
                description={'Learn how to start, build and grow your own online business.'}
                icon={Academy}
                link={'https://www.google.com'}
              />
            </div>
            <div className="">
              <DemandCard
                heading={'Helpdesk'}
                description={'Step by step guide to set up your own online business with Yelo.'}
                icon={Helpdesk}
                link={'https://www.google.com'}
              />
            </div>
            <div className="">
              <DemandCard
                heading={'Blogs'}
                description={
                  'Stay updated with industry trends and the latest news in the industry.'
                }
                icon={Blogs}
                link={'https://www.google.com'}
              />
            </div>
            <div className="">
              <DemandCard
                heading={'Business Ideas'}
                description={'Get Inspired with these interesting On-demand business Ideas.'}
                icon={Business}
                link={'https://www.google.com'}
              />
            </div>
          </div>
        </div>
      </div>

      {/* New Section  */}

      {/* New Section  */}

      <div className="flex justify-center items-center mb-6">
        <div className="px-2 feature mx-28 rounded-xl w-full bg-no-repeat">
          <div className="md:flex flex-row justify-between my-16 items-center">
            <div className=" mx-16 ">
              <h1 className="text-white text-xl sm:text-4xl font-bold">
                Start, build, and grow your online business today!
              </h1>
              <p className="text-white font-medium mt-5 text-lg">
                Increase revenue by expanding your reach with the right tools.
              </p>
            </div>
            <button className="bg-[#1366ff] hover:bg-[#2d6cca] text-white mr-16 px-8 rounded-xl transition-all duration-150 md:mx-auto mx-16 md:mt-0 mt-4 self-center leading-5 font-semibold text-lg py-5">
              Request a Demo
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureHeroSection;
