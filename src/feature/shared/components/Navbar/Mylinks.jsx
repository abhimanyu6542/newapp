import React from 'react';
import { TiPlus } from 'react-icons/ti';
import { PiCarProfileFill } from 'react-icons/pi';
import { GrUserManager } from 'react-icons/gr';
import { RiHomeGearLine } from 'react-icons/ri';
import { GiHummingbird, GiPalmTree, GiHollowCat } from 'react-icons/gi';
import { FaHands, FaHippo } from 'react-icons/fa';
import { AiOutlineMobile } from 'react-icons/ai';
import { SiLionair } from 'react-icons/si';
import { LiaLaptopMedicalSolid } from 'react-icons/lia';
import { CgHomeScreen } from 'react-icons/cg';

export const links = [
  {
    name: 'Products',
    submenu: true,
    sublinks: [
      {
        icon: <SiLionair className="text-center ml-1 mt-1 w-6 h-6" />,
        description: 'Hyperloacl Ordering',
        name: 'Yelo',
        link: '/about',
      },
      {
        icon: <GiPalmTree className="text-center ml-1 mt-1 w-6 h-6" />,
        description: 'Delivery Management',
        name: 'Tookan',
        link: '/contact',
      },
      {
        icon: <FaHippo className="text-center ml-1 mt-1 w-6 h-6" />,
        description: 'Customer Engagement',
        name: 'Hippo',
        link: '/',
      },
      {
        icon: <GiHollowCat className="text-center ml-1 mt-1 w-6 h-6" />,
        description: 'Consultation Marketplace',
        name: 'Panther',
        link: '/',
      },
    ],
  },
  {
    name: 'Solutions',
    submenu: true,
    sublinks: [
      {
        icon: <AiOutlineMobile className="text-center ml-1 mt-1 w-6 h-6" />,
        description: 'End-to-end software to launch your hyperlocal delivery service',
        name: 'On-Demand Delivery Service',
        link: '/about',
      },
      {
        icon: <RiHomeGearLine className="text-center ml-1 mt-1 w-6 h-6" />,
        description: 'Fully customizable software for home services business',
        name: 'Home Services',
        link: '/contact',
      },
      {
        icon: <PiCarProfileFill className="text-center ml-1 mt-1 w-6 h-6" />,
        description: 'Manage deliveries efficiently through third-party and in-house fleets',
        name: 'Delivery Orchestration',
        link: '/',
      },
      {
        icon: <TiPlus className="text-center ml-1 mt-1 w-6 h-6" />,
        description: 'Create an online medical consultation platform',
        name: 'Telemedicine',
        link: '/',
      },
      {
        icon: <FaHands className="text-center ml-1 mt-1 w-6 h-6" />,
        description: 'Eliminate aggregators and deliver direct-to-consumer',
        name: 'Direct-to-consumer',
        link: '/',
      },
      {
        icon: <LiaLaptopMedicalSolid className="text-center ml-1 mt-1 w-6 h-6" />,
        description: 'Endless customization for a unique front-end experience',
        name: 'Headless Commerce',
        link: '/',
      },
      {
        icon: <PiCarProfileFill className="text-center ml-1 mt-1 w-6 h-6" />,
        description: 'Minimize costs through efficient monitoring of your delivery fleet',
        name: 'Fleet management',
        link: '/',
      },
      {
        icon: <CgHomeScreen className="text-center ml-1 mt-1 w-6 h-6" />,
        description: 'Automate your last-mile dispatches & deliver without hassle',
        name: 'Last-mile delivery',
        link: '/',
      },
      {
        icon: <GrUserManager className="text-center ml-1 mt-1 w-6 h-6" />,
        description:
          'Automate your engagements and marketing activities through an omnichannel approach',
        name: 'Customer Engagement Automation',
        link: '/',
      },
      {
        icon: <GiHummingbird className="text-center ml-1 mt-1 w-6 h-6" />,
        description: 'Optimize your delivery route efficiently',
        name: 'Mapping Infrastructure',
        link: '/',
      },
    ],
  },
];
