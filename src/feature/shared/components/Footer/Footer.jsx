import React from 'react';
// components --
import FooterHeading from './components/FooterHeading';
import AllDetails from './components/all-details/AllDetails';
import CopyRightSection from './components/CopyRightSection';

function Footer() {
  return (
    <>
      <div className="bg-violet7">
        <div>
          <FooterHeading />
        </div>

        <div>
          <AllDetails />
        </div>

        <div>
          <CopyRightSection />
        </div>
      </div>
    </>
  );
}

export default Footer;
