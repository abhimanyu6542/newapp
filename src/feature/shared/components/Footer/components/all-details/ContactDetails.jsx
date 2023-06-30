import React from 'react';
// icons --
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';

function ContactDetails() {
  return (
    <>
      <div>
        <h1 className="mb-2 md:mb-7 text-gray3 text-xl md:text-lg text-center md:text-start font-semibold">
          Contact Details
        </h1>

        <ul>
          <li className="mb-7 text-white flex items-center justify-center md:justify-start">
            <FaMapMarkerAlt className="mr-4 text-xl" />
            <p className="text-sm font-semibold">
              Amsterdam <br /> Netherlands
            </p>
          </li>

          <li className="mb-7 text-white flex items-start justify-center md:justify-start">
            <BsFillTelephoneFill className="mr-4 text-xl mt-2" />
            <div className="">
              <a href="#" className="text-sm font-semibold hover:underline">
                +8348329834
              </a>
              <p className="text-sm font-semibold">7 Days - 9am - 10pm</p>
            </div>
          </li>

          <li className="mb-7 text-white flex items-center justify-center md:justify-start">
            <IoMdMail className="mr-2 text-xl" />
            <a href="#" className="text-sm font-semibold hover:underline">
              info@ritswa.com
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ContactDetails;
