import React from 'react'

const Seven_sub = () => {
  return (
    <div className='mt-16 p-3 w-full grid grid-cols-3 sm:gap-40 justify-center'>
        <div className='p-4 m-2 flex flex-col justify-center items-center bg-white shadow-md rounded-md'>
            <h1 className='lg:pt-10 text-3xl lg:text-5xl text-green-400 font-bold text-center'>5K+</h1>
            <p className='lg:pb-10 text-black text-sm font-normal text-center'>Live Businesses</p>
        </div>
        <div className='-mt-7 mb-7 sm:mb-10 p-4 flex flex-col justify-center items-center bg-white shadow-md rounded-md'>
            <h1 className='lg:pt-10 text-3xl lg:text-5xl text-orange-300 font-bold text-center'>180+</h1>
            <p className='lg:pb-10 text-black font-normal'>Countries</p>
        </div>
        <div className='p-4 m-2 flex flex-col justify-center items-center bg-white shadow-md text-center rounded-md'>
            <h1 className='lg:pt-10 text-3xl lg:text-5xl text-orange-600 font-bold'>5M+</h1>
            <p className='lg:pb-10 text-black font-normal'>Users</p>
        </div>
    </div>
  )
}

export default Seven_sub;