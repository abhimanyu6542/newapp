import React from 'react'
import image_one from '../../../../../../assets/c25.png';

const Car_two_five = () => {
  return (
    <div className='my-5 mx-2 p-2 bg-white flex flex-col justify-center items-center'>
        <img src={image_one}/>
        <h1 className="py-2 font-bold text-xl">Faster checkout</h1>
        <p className='mt-1 pb-3 sm:text-start text-center text-gray-500 text-base sm:text-lg font-medium'>Provide faster checkout to your customers through in app wallets and multiplr payment integrations.</p>
    </div>
  )
}

export default Car_two_five;