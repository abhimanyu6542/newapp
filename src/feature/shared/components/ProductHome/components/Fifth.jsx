import React from 'react';
import image_one from '../../../../../assets/i1.webp';
import image_two from '../../../../../assets/i2.png';
import image_three from '../../../../../assets/i3.png';
import image_four from '../../../../../assets/i4.webp';
import {BsArrowRight} from 'react-icons/bs';

const Fifth = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="w-11/12 flex flex-col sm:flex-row justify-center items-center">
          <div className="m-3 border-t border-orange-400 bg-white flex flex-col justify-center items-center rounded-lg">
            <h1 className="py-2 font-bold text-xl">Food</h1>
            <img className='p-2' src={image_one} />
            <a
              href="#"
              className="my-2 text-blue-600 flex text-start text-sm sm:text-lg font-semibold hover:border-b hover:border-blue-500"
            >
              Live Demo <BsArrowRight className="ml-2 mt-2" />
            </a>
          </div>
          <div className="m-3 border-t border-green-400 bg-white flex flex-col justify-center items-center rounded-lg">
            <h1 className="py-2 font-bold text-xl">Grocery</h1>
            <img className='p-2' src={image_two} />
            <a
              href="#"
              className="my-2 text-blue-600 flex text-start text-sm sm:text-lg font-semibold hover:border-b hover:border-blue-500"
            >
              Live Demo <BsArrowRight className="ml-2 mt-2" />
            </a>
          </div>
        </div>
        <div className="w-11/12 flex flex-col sm:flex-row justify-center items-center">
          <div className="m-3 border-t border-blue-400 bg-white flex flex-col justify-center items-center rounded-lg">
            <h1 className="py-2 font-bold text-xl">Pharmacy</h1>
            <img className='p-2' src={image_three} />
            <a
              href="#"
              className="my-2 text-blue-600 flex text-start text-sm sm:text-lg font-semibold hover:border-b hover:border-blue-500"
            >
              Live Demo <BsArrowRight className="ml-2 mt-2" />
            </a>
          </div>
          <div className="m-3 border-t border-purple-400 bg-white flex flex-col justify-center items-center rounded-lg">
            <h1 className="py-2 font-bold text-xl">Home Services</h1>
            <img className='p-2' src={image_four} />
            <a
              href="#"
              className="my-2 text-blue-600 flex text-start text-sm sm:text-lg font-semibold hover:border-b hover:border-blue-500"
            >
              Live Demo <BsArrowRight className="ml-2 mt-2" />
            </a>
          </div>
        </div>
      </div>
  )
}

export default Fifth