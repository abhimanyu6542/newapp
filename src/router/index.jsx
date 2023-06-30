import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
// components --
import About from '../feature/about';
import Contact from '../feature/contact';
import Home from '../feature/home/index';
import LoginPage from '../feature/Login/Components/LoginPage';
import NavItem_four from '../feature/shared/components/ProductHome/components/NavItem_four';
import NavItem_one from '../feature/shared/components/ProductHome/components/NavItem_one';
import NavItem_three from '../feature/shared/components/ProductHome/components/NavItem_three';
import NavItem_two from '../feature/shared/components/ProductHome/components/NavItem_two';
import Use_case from '../feature/shared/components/Use_case/Use_case';
import BaseLayout from '../layouts/BaseLayout/BaseLayout';
import FeaturePage from '../feature/featurepage';
import Pricing from '../feature/pricing/pricing';
import TryNow from '../feature/try-now/TryNow';
import ProductHome from '../feature/shared/components/ProductHome/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: '/auth',
        element: <LoginPage />,
      },
      {
        element: <BaseLayout />,
        children: [
          {
            path: 'home',
            element: <Home />,
          },
          {
            path: 'about',
            element: <About />,
          },
          {
            path: 'contact',
            element: <Contact />,
          },
          {
            path: 'product-home',
            element: <ProductHome/>,
            children: [
              {
                index: true,
                element: <Navigate to="dashboard" />,
              },
              {
                path: 'dashboard',
                element: <NavItem_one/>
                
              },
              {
                path: 'order_website',
                element: <NavItem_two/>
                
              },
              {
                path: 'customer_app',
                element: <NavItem_three/>
                
              },
              {
                path: 'vendor_app',
                element: <NavItem_four/>
                
              }
            ]
          },
          {
            path: 'use_case',
            element: <Use_case/>
          },
          {
            path: 'feature',
            element: <FeaturePage />,
          },
          {
            path: 'pricing',
            element: <Pricing />,
          },
          {
            path: 'try-now',
            element: <TryNow />
          }
        ],
      },
    ],
  },
]);

export default router;
