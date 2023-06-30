import React from 'react';
import image_one from '../../../../../assets/p2_c1.png';
import image_two from '../../../../../assets/p2_c1_1.png';
const One = () => {
  return (
    <div className="m-7 mt-5 pt-5 lg:my-14 lg:mx-auto w-fit lg:w-full flex flex-col-reverse lg:flex-row justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center lg:items-start">
        <h1 className="py-5 pt-0 lg:w-4/5 text-3xl lg:text-[2.5rem] font-bold text-center lg:text-start font-rubik">
        Make a food delivery app and website for your business
        </h1>
        <p className="text-center text-gray-500 text-lg lg:text-xl font-medium lg:text-start">
        Automate order management, delivery dispatch, and marketing campaigns to scale up your online food business.
        </p>
        <button
          className="py-4 px-6 lg:mt-6 mt-4 w-52 bg-blue-600 hover:bg-blue-500 text-white text-xl font-bold rounded-xl"
          type="button"
        >
          Get Started
        </button>
      </div>
      <div className="m-2 mt-0 relative">
        <img className="w-4/5 lg:w-[900px] mx-auto" src={image_one} />
        <img className='max-w-[80%] absolute top-[60%] transform -translate-y-1/2 h-4/5' src={image_two}/>
      </div>
    </div>
  );
};

export default One;
