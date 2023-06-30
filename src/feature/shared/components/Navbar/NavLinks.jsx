/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { links } from './Mylinks';

const NavLinks = () => {
  const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');

  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group ">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group font-normal"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading('');
                setSubHeading('');
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${heading === link.name ? 'chevron-down' : 'chevron-down'}`}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div
                  className={
                    link.sublinks.length > 4
                      ? 'absolute  w-[700px] transition-all duration-300 -mt-3 border-t-4 border-t-navItemHover top-20 hidden group-hover:md:block hover:md:block'
                      : 'absolute  w-80 transition-all duration-300 -mt-3 border-t-4 border-t-navItemHover top-20 hidden group-hover:md:block hover:md:block'
                  }
                >
                  <div className="bg-white rounded-b-3xl p-10">
                    <div
                      className={
                        link.sublinks.length > 4
                          ? 'grid grid-cols-2 justify-start items-start'
                          : null
                      }
                    >
                      {link.sublinks.map((slink) => (
                        <div className="block relative hover:border-blue-600 hover:border-b-2 ">
                          <div className="flex p-1 justify-start items-center">
                            <div className="text-center w-8 h-8 rounded-full bg-gradient-to-t from-blue-200 to-[rgba(255,255,255,0.1)] shadow-2xl">
                              {slink.icon}
                            </div>
                            <li className="text-sm m-3 text-gray-600">
                              <Link
                                to={slink.link}
                                className="hover:text-blue-600 text-[#323B4B] text-base font-bold font-rubik"
                              >
                                {slink.name}
                              </Link>
                            </li>
                          </div>
                          <p className="text-[#5F6673] ml-12 -mt-5 font-normal font-rubik">
                            {slink.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? 'lg:hidden' : 'hidden'}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slink) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slink.name ? setSubHeading(slink.name) : setSubHeading('')
                    }
                    className="py-2 pl-7 font-semibold flex justify-between items-center md:pr-0 pr-5"
                  >
                    <div className="block relative hover:border-blue-600 hover:border-b-2 ">
                      <div className="flex p-1 justify-start items-center">
                        <div className="text-center w-8 h-8 rounded-full bg-gradient-to-t from-blue-200 to-[rgba(255,255,255,0.1)] shadow-2xl">
                          {slink.icon}
                        </div>
                        <li className="text-sm m-3 text-gray-600">
                          <Link
                            to={slink.link}
                            className="hover:text-blue-600 text-[#323B4B] text-base font-bold font-rubik"
                          >
                            {slink.name}
                          </Link>
                        </li>
                      </div>
                      <p className="text-[#5F6673] ml-12 -mt-5 font-normal font-rubik">
                        {slink.description}
                      </p>
                    </div>
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;

{
  /* <div className="px-3 text-left md:cursor-pointer group ">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group font-normal"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading('');
                setSubHeading('');
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${heading === link.name ? 'chevron-down' : 'chevron-down'}`}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute  w-56 transition-all duration-300 mt-0 border-t-4 border-t-navItemHover top-20 hidden group-hover:md:block hover:md:block">
                  <div className="bg-white rounded-b-3xl p-10 grid grid-cols-1 gap-3">
                    <div>
                      {/* <h1 className="text-lg font-semibold">{mysublinks.Head}</h1> */
}
//             {link.sublinks.map((slink) => (
//               <li className="text-sm text-gray-600 my-2.5">
//                 <Link to={slink.link} className="hover:text-navItemHover">
//                   {slink.name}
//                 </Link>
//               </li>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )}
// </div> */}
