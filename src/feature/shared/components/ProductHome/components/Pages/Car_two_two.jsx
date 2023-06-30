import React from 'react'
import image_one from '../../../../../../assets/c22.png';

const Car_two_two = () => {
  return (
    <div className='my-5 mx-2 p-2 bg-white flex flex-col justify-center items-center'>
        <img src={image_one}/>
        <h1 className="py-2 font-bold text-xl">Inventory Management</h1>
        <p className='mt-1 pb-3 sm:text-start text-center text-gray-500 text-base sm:text-lg font-medium'>Manage inventory in real time based on your orders</p>
    </div>
  )
}

export default Car_two_two;