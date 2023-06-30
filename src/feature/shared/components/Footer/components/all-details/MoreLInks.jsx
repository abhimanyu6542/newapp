import React from 'react';

function MoreLInks() {
  return (
    <>
      <div className="mb-10 md:mb-0">
        <h1 className="mb-2 md:mb-7 text-gray3 text-xl md:text-lg text-center md:text-start font-semibold">
          More Links
        </h1>

        <ul>
          <li className="mb-3 text-center md:text-start">
            <a href="#" className="text-sm text-white font-semibold hover:underline">
              About us
            </a>
          </li>
          <li className="mb-3 text-center md:text-start">
            <a href="#" className="text-sm text-white font-semibold hover:underline">
              Privacy Policy
            </a>
          </li>
          <li className="mb-3 text-center md:text-start">
            <a href="#" className="text-sm text-white font-semibold hover:underline">
              Terms & condition
            </a>
          </li>
          <li className="mb-3 text-center md:text-start">
            <a href="#" className="text-sm text-white font-semibold hover:underline">
              Rider
            </a>
          </li>
          <li className="mb-3 text-center md:text-start">
            <a href="#" className="text-sm text-white font-semibold hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MoreLInks;
