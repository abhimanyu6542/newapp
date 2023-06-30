import React from 'react'
import { BsCheck } from 'react-icons/bs';
import image_one from '../../../../../assets/n2.png';

const NavItem_two = () => {
  return (
    <div className='sm:px-14 mb-3 flex flex-col-reverse sm:flex-row-reverse items-center'>
        <div className='px-2'>
        <h1 className="text-xl sm:text-[2rem] font-bold text-start font-rubik">
          Ordering Website
        </h1>
        <p className='w-16 mt-1 mb-3 h-[3px] bg-blue-600 text-start'></p>
        <p className='text-gray-500 w-5/6 text-sm sm:text-lg font-medium text-start'>Create an immersive ordering experience with an interactive online ordering website.</p>
        <ul className="my-3 text-gray-500 text-sm sm:text-lg font-medium">
            <li>
              <div className="flex flex-row">
                <BsCheck className="mr-2 mt-1 bg-green-200 text-green-600 rounded-full" />
                Social Logins
              </div>
            </li>
            <li>
              <div className="flex flex-row">
                <BsCheck className="mr-2 mt-1 bg-green-200 text-green-600 rounded-full" />
                Search & Filters
              </div>
            </li>
            <li>
              <div className="flex flex-row">
                <BsCheck className="mr-2 mt-1 bg-green-200 text-green-600 rounded-full" />
                Faster Checkout with In-App Wallet & Saved Cards
              </div>
            </li>
          </ul>
        </div>
        <img className='sm:w-7/12 w-11/12' src={image_one}/>
      </div>
  )
}

export default NavItem_two;