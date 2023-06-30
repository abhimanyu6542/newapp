import React from 'react';
import image_one from '../../../../../assets/p1.png';
import image_two from '../../../../../assets/p2.png';
import {BsArrowRight} from 'react-icons/bs';

const Fourth = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='mx-5 mb-5 md:w-1/2 bg-white hover:shadow-2xl rounded-lg'>
      <div className='p-3 flex flex-col justify-between'>
        <img src={image_one}/>
        <h1 className="pt-2 text-xl sm:text-[2rem] font-bold text-start font-rubik">
        Seamless Integrations
        </h1>
        <p className='w-5/6 pt-1 text-gray-500 text-sm sm:text-lg font-medium text-start'>Reduce delivery costs and increase operational efficiency.</p>
        <p className=' mt-3 text-start text-gray-500 text-sm sm:text-lg font-medium'>Integrate effortlessly with multiple third-party applications like payment gateways, POS systems, google analytics and more, that are best suitable for your business and provide the best experience for your customers. Integrate your systems in a jiffy without technical expertise.</p>
        <a href='#' className='text-blue-600 flex text-start text-sm sm:text-lg font-semibold my-2'>Learn More <BsArrowRight className='ml-2 mt-2'/></a>
      </div>
      
      </div>
      <div className='mx-5 mb-5 md:w-1/2 bg-white hover:shadow-2xl rounded-lg'>
      <div className='p-3 flex flex-col justify-between'>
        <img src={image_two}/>
        <h1 className="pt-2 text-xl sm:text-[2rem] font-bold text-start font-rubik">
        Multilingual with 75+ Payment Gateways
        </h1>
        <p className='w-5/6 pt-1 text-gray-500 text-sm sm:text-lg font-medium text-start'>Communicate in the language of your target audience & ensure easy online payment.</p>
        <ul className='list-disc px-5'>
          <li className=' mt-3 text-start text-gray-500 text-sm sm:text-lg font-medium'>Communicate in over 80 languages with your customers and ensure customer retention.</li>
          <li className=' mt-3 text-start text-gray-500 text-sm sm:text-lg font-medium'>Choose from Leading Payment Gateways Supported in 180+ Countries.</li>
        </ul>
        <a href='#' className='text-blue-600 flex text-start text-sm sm:text-lg font-semibold my-2'>Learn More <BsArrowRight className='ml-2 mt-2'/></a>
      </div>
      
      </div>
      </div>
  )
}

export default Fourth