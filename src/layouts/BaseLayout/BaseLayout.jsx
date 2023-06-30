import React from 'react';
import Footer from '../../feature/shared/components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../../feature/shared/components/Header/Header';

const BaseLayout = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};

export default BaseLayout;
