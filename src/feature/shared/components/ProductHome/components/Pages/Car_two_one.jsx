import React from 'react'
import image_one from '../../../../../../assets/c21.png';

const Car_two_one = () => {
  return (
    <div className='my-5 mx-2 p-2 bg-white flex flex-col justify-center items-center'>
        <img src={image_one}/>
        <h1 className="py-2 font-bold text-xl">Digital catalouge</h1>
        <p className='mt-1 pb-3 sm:text-start text-center text-gray-500 text-base sm:text-lg font-medium'>Display your offerings with a comprehensive digital catalouge</p>
    </div>
  )
}

export default Car_two_one;