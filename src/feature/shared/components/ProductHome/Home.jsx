import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Carousal_one from './components/Carousal_one';
import Carousel_three from './components/Carousel_three';
import Carousel_two from './components/Carousel_two';
import Fifth from './components/Fifth';
import First from './components/First';
import Fourth from './components/Fourth';
import Second from './components/Second';
import Sixth from './components/Sixth';
import Third from './components/Third';

const ProductHome = () => {


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
    <div className="lg:px-48 bg-slate-50">
      <First />
      <Carousal_one windowSize={screenSize.width}/>
      <div className="flex items-center justify-center w-full">
        <h1 className="py-5 lg:py-10 pt-0 lg:w-7/12 text-2xl lg:text-[2.5rem] font-bold text-center font-rubik">
          Powerful ordering platform for businesses at every scale
        </h1>
      </div>
      <Second />
      <div className="flex-col items-center justify-center w-full sm:flex sm:flex-row">
        <h1 className="py-10 pt-0 lg:w-7/12 text-3xl lg:text-[2.3rem] font-bold text-center sm:text-start font-rubik">
          Powerful ordering platform for businesses at every scale
        </h1>
        <div className='sm:w-2/3'>
          <Carousel_two windowSize={screenSize.width}/>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <h1 className="py-10 mt-10 pt-0 lg:w-7/12 text-3xl lg:text-[2.5rem] font-bold text-center font-rubik">
          What we offer
        </h1>
      </div>
      <nav className='flex flex-row flex-wrap items-center justify-between w-3/5 m-3 mx-auto text-sm font-semibold text-center text-gray-400 md:text-lg '>
        <NavLink to='dashboard' className='active:border-b-4 hover:text-blue-500 active:text-blue-500 active:border-blue-500'>DASHBOARD</NavLink>
        <NavLink to='order_website' className='active:border-b-4 hover:text-blue-500 active:text-blue-500 active:border-blue-500'>ORDERING WEBSITE</NavLink>
        <NavLink to='customer_app' className='active:border-b-4 hover:text-blue-500 active:text-blue-500 active:border-blue-500'>CUSTOMER APP</NavLink>
        <NavLink to='vendor_app' className='active:border-b-4 hover:text-blue-500 active:text-blue-500 active:border-blue-500'>VENDOR APP</NavLink>
      </nav>
      <hr className='mb-5'/>
      <Outlet/>
      <Third />
      <Fourth />
      <div className="flex items-center justify-center w-full">
        <h1 className="pt-10 px-5 lg:w-10/12 text-3xl lg:text-[2.5rem] font-bold text-center font-rubik">
          An online ordering & delivery SaaS platform for every business industry.
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <p className="px-5 py-5 text-lg font-semibold text-center text-gray-500 lg:w-7/12 lg:xl font-rubik">
          Find your industry and quickly launch your online hyperlocal business.
        </p>
      </div>
      <Fifth />
      <div className="flex items-center justify-center w-full m-3">
        <h1 className="py-7 px-5 rounded-md bg-white lg:w-10/12 text-2xl lg:text-[2.5rem] font-bold text-center font-rubik">
          Here&apos;s What Our FAM Has To Say About Us
        </h1>
      </div>
      <Carousel_three/>
      <Sixth/>
    </div>
  );
};

export default ProductHome;
