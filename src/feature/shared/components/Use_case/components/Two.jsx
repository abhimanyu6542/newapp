import React from 'react';
import Two_c from './pages/Two_c';
import image_one from '../../../../../assets/p2_c2_1.png';
import image_two from '../../../../../assets/p2_c2_2.png';
import image_three from '../../../../../assets/p2_c2_3.png';

const Two = () => {

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
      <Two_c image={image_one} head="Standalone Restaurant" content="Allow your customers to order directly from your online food ordering website and app with
          multiple integrated payment portals." />
      
      <Two_c image={image_two} head="Food Marketplace" content="Create a seamless online food ordering and delivery experience for your customers & boost
          your ROI from your online food marketplace business."/>
      
      <Two_c image={image_three} head="Catering & Events" content="Maintain food catering bookings for events, weddings, gatherings, and more. Offer a
          customized solution for your catering business." />
      
    </div>
  );
};

export default Two;
