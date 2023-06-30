import React, { useEffect, useState } from 'react';
import Carousal_one_uc from './components/Carousel_one_uc';
import One from './components/One';
import Two from './components/Two';
import image_one from '../../../../assets/p2_c3.png';
import Three from './components/Three';
import Four from './components/Four';
import Five from './components/Five';
import Six from './components/Six';
import Eight from './components/Eight';
import Faq from './components/Faq';
import Carousal_two_uc from './components/Carousel_two_uc';
import Seven_sub from './components/pages/Seven_sub';
import world_image from '../../../../assets/world.jpg';

const Use_case = () => {
  
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension(){
    return {
      	width: window.innerWidth,
    }
}

useEffect(() => {
  const updateDimension = () => {
      setScreenSize(getCurrentDimension())
  }
  window.addEventListener('resize', updateDimension);

  return(() => {
      window.removeEventListener('resize', updateDimension);
  })
}, [screenSize])
  return (
    <div>
      <div className="bg-white border-b border-b-gray-300">
        <div className="lg:mx-48">
            <One/>
            <Carousal_one_uc windowSize={screenSize.width}/>
            <div className='flex justify-center items-center'>
              <h1 className="pt-4 px-5 lg:w-11/12 text-xl sm:text-2xl lg:text-[2.1rem] font-bold text-center font-rubik">
                Best online food delivery software for every food business
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <p className="py-2 sm:py-3 px-5 lg:w-7/12 text-sm lg:text-xl border-b-2 border-blue-600 font-medium text-center text-gray-500 font-rubik">
                Serve your customers at their convenience.
              </p>
            </div>
            <Two/>
        </div>
      </div>
      <div className="bg-slate-50 pt-10 pb-16">
        <div className="lg:mx-48">
          <div className='flex justify-center items-center'>
                <h1 className="pt-4 px-5 lg:w-11/12 text-xl sm:text-2xl lg:text-[2.1rem] font-bold text-center font-rubik">
                  Make Online Food Ordering Simpler For Your Customers
                </h1>
              </div>
              <div className="flex justify-center items-center">
                <p className="py-2 sm:py-3 px-5 lg:w-7/12 text-sm lg:text-xl font-medium text-center text-gray-500 font-rubik">
                  Create your own ordering and delivery app.
                </p>
              </div>
              <div className='flex justify-center items-center'>
                <img className='p-2 pt-3' src={image_one}/>
            </div>
            <Three/>
        </div>
      </div>
      <div className="bg-white">
        <div className="lg:mx-48">
            <div className='flex justify-center items-center'>
              <h1 className="pt-12 px-5 w-3/4 lg:w-11/12 text-xl sm:text-2xl lg:text-[2.1rem] font-bold text-center font-rubik">
                Unified Dashboard For Seamless Restaurant Management
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <p className="py-2 sm:py-3 px-5 lg:w-7/12 text-sm lg:text-xl font-medium text-center text-gray-500 font-rubik">
                Everything you need to manage your restaurants, staff, and customers.
              </p>
            </div>
            <Four/>
            <div className='flex justify-center items-center'>
              <h1 className="pt-12 px-5 w-3/4 lg:w-11/12 text-xl sm:text-2xl lg:text-[2.1rem] font-bold text-center font-rubik">
                Efficient Delivery Management Software
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <p className="py-2 sm:py-3 px-5 lg:w-7/12 text-sm lg:text-xl font-medium text-center text-gray-500 font-rubik">
                Don't keep them waiting.
              </p>
            </div>
            <Five/>
        </div>
      </div>
      <div className="bg-slate-50">
        <div className="lg:mx-48">
            <div className='flex justify-center items-center'>
              <h1 className="pt-12 px-5 w-3/4 lg:w-11/12 text-xl sm:text-2xl lg:text-[2.1rem] font-bold text-center font-rubik">
                Why Choose Us?
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <p className="py-2 sm:py-3 lg:w-7/12 text-sm lg:text-base font-medium text-center text-gray-500 font-rubik">
                Best Restaurant Website & Mobile App Platform, Catering 200+ Food Businesses
              </p>
            </div>
            <Six/>
        </div>
      </div>
      <div className="bg-white lg:pb-10">
        <div className="lg:mx-48 mt-5 px-5 bg-cover bg-center opacity-70" style={{backgroundImage: `url(${world_image})`}}>
            <div className='flex justify-center items-center'>
              <h1 className="pt-12 px-5 w-3/4 lg:w-11/12 text-xl sm:text-2xl lg:text-[2.5rem] font-bold text-center font-rubik">
              Serving Clients All Over The World
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <p className="py-2 sm:py-3 lg:w-7/12 text-sm lg:text-base font-medium text-center text-gray-700 font-rubik">
              Customers in over 180 countries are growing their businesses with Yelo.
              </p>
            </div>
            <Seven_sub/>
            <div className='h-14'></div>
            <Carousal_two_uc/>
        </div>
      </div>
      <div className="bg-slate-50 mt-44">
        <div className="lg:mx-48 pt-10">
            <div className='flex justify-center items-center'>
              <h1 className="pt-8 pb-12 px-5 w-full lg:w-11/12 text-xl sm:text-2xl lg:text-[2.1rem] font-bold text-center font-rubik">
                A Few Guides To Help You Create Your Own Online Food Ordering And Delivery App
              </h1>
            </div>
            <Eight/>
        </div>
      </div>
      <div className="bg-blue-200">
        <div className="lg:mx-48">
          <Faq/>
        </div>
      </div>
    </div>
  );
};

export default Use_case;
