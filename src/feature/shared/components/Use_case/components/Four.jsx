import React from 'react';
import image_one from '../../../../../assets/p2_c4.png';
import { BsCheck } from 'react-icons/bs';
import Four_c from './pages/Four_c';

const Four = () => {
  return (
    <div className='pt-10 flex flex-col lg:flex-row justify-center items-center'>
        <div className='lg:w-3/5 flex justify-center items-center'>
            <img src={image_one}/>
        </div>
        <div className='lg:w-2/5 p-5 flex flex-col items-center'>
            <Four_c head="Manage everything in one place" content="Manage all orders from a single  dashboard. Consolidate orders, manage delivery partners, update menu or enable/disable outlet locations without  switching tabs or applications." />

            <Four_c head="Monitor Performance" content="Manage all orders from a Yelo's food ordering marketplace allows you to monitor your business performance as per your requirement. Track the number of orders received and cancelled, manage ratings and reviews, and a lot more to strategize and improve your business." />

            <Four_c head="Analyze Sales Reports" content="Manage all orders from a Extract customized automated reports and analyze matrices that help you to identify opportunities to plan and grow your food business and improve your customer satisfaction rates." />
        </div>
    </div>
  )
}

export default Four;