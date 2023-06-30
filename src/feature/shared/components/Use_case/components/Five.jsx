import React from 'react';
import image_one from '../../../../../assets/p2_c5.png';
import { BsCheck } from 'react-icons/bs';
import Five_c from './pages/Five_c';

const Five = () => {
  return (
    <div className='pt-10 pb-10 flex flex-col lg:flex-row justify-center items-center'>
        <div className='lg:w-3/5 p-5 flex flex-col items-center'>

            <Five_c head="Route Optimization for Drivers" content="Manage all orders from a Easily navigate to multiple destinations and ensure on-time deliveries. The app auto-suggests the shortest and fastest routes for an easier process." />

            <Five_c head="Order Fulfilment Status" content="At the end of each delivery, the agent has to leave a digital signature and close his delivery task and record the delightful fulfillment of the order." />

            <Five_c head="Real-time Tracking & Updates" content="Allow your customers to track their orders on your food ordering app and keep them updated and satisfied with transparent orders statuses and details." />

        </div>
        <div className='lg:w-2/5 flex justify-center items-center'>
            <img src={image_one}/>
        </div>
    </div>
  )
}

export default Five;