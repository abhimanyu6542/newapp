import React from 'react';
import image_one from '../../../../../assets/p2_i1.svg';
import image_two from '../../../../../assets/p2_i2.svg';
import image_three from '../../../../../assets/p2_i3.svg';
import image_four from '../../../../../assets/p2_i4.svg';
import image_five from '../../../../../assets/p2_i5svg.svg';
import Six_c from './pages/Six_c';

const Six = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 justify-center'>
        <Six_c image={image_one} head="Native Mobile Apps & Website" content="Yelo allows you to boost your restaurant business with a native online food ordering app and a website for your restaurant." />

        <Six_c image={image_two} head="Delivery Management Software" content="Manage all aspects of online food ordering and delivery business from a single web or app dashboard." />

        <Six_c image={image_three} head="Maintain your brand guidelines" content="Enjoy the advantages of building your own food ordering website and app. Customize your website and app with your brand logo, menu, and personalize your customer experience." />

        <Six_c image={image_four} head="Marketing Campaigns" content="Drive more orders and improve customer loyalty by running promotional campaigns & discounted offers for a single dashboard." />

        <Six_c image={image_five} head="Go live in no time" content="Cut down your expenses. Get a pre-built online food ordering website and go live within a day. No-coding needed." />

    </div>
  )
}

export default Six;