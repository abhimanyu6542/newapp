import React from 'react';
// icons --
import { AiFillFacebook } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

function CopyRightSection() {
  return (
    <>
      <div className="w-full px-10 py-5 flex flex-col md:flex-row justify-center md:justify-between items-center border-t-2 border-gray-400">
        <p className="mb-4 md:mb-0 text-sm text-gray3">© 2021 UX Theme, All Rights Reserved</p>

        <div className="flex items-center">
          <ul>
            <li>
              <a href="#">
                <AiFillFacebook className="text-white text-xl mr-5 hover:text-orange6" />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                <BsTwitter className="text-white text-xl mr-5 hover:text-orange6" />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                <BsInstagram className="text-white text-xl mr-5 hover:text-orange6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CopyRightSection;
