import React from 'react';
import image_one_one from '../../../../../assets/imgOfferingsYelo.svg';
import image_one_two from '../../../../../assets/yeloHmBanner.webp';
const First = () => {
  return (
    <div className="m-7 mt-5 pt-5 lg:my-14 lg:mx-auto w-fit lg:w-full flex flex-col-reverse lg:flex-row justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center lg:items-start">
        <h1 className="py-5 pt-0 lg:w-4/5 text-3xl lg:text-[2.5rem] font-bold text-center lg:text-start font-rubik">
          Kick start your hyperlocal business.
        </h1>
        <p className="text-center text-gray-500 text-lg lg:text-xl font-medium lg:text-start">
          Create a seamless digital ordering experience for your own store or launch a multi-vendor
          ordering platform without coding.
        </p>
        <img className="py-4" src={image_one_one} />
        <p className="text-gray-500 text-lg font-medium text-center lg:text-start">
          Your Customers | Your Platform | Increased Transactions
        </p>
        <button
          className="py-4 px-6 lg:mt-6 mt-4 w-52 bg-blue-600 hover:bg-blue-500 text-white text-xl font-bold rounded-xl"
          type="button"
        >
          Request a Demo
        </button>
      </div>
      <div className="m-2 mt-0">
        <img className="w-4/5 lg:w-[1124px] mx-auto" src={image_one_two} />
      </div>
    </div>
  );
};

export default First;
