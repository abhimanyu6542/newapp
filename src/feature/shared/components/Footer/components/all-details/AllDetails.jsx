import React from 'react';
// components --
import About from './About';
import Company from './Company';
import MoreLInks from './MoreLInks';
import ContactDetails from './ContactDetails';

function AllDetails() {
  return (
    <>
      <div className="my-20 md:px-20 lg:px-0 w-full flex flex-col lg:flex-row items-center md:items-start justify-evenly">
        <div className="w-full mb-10 lg:mb-0 flex flex-col md:flex-row items-center md:items-start justify-between lg:justify-evenly">
          <About />
          <Company />
        </div>

        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between lg:justify-evenly">
          <MoreLInks />
          <ContactDetails />
        </div>
      </div>
    </>
  );
}

export default AllDetails;
