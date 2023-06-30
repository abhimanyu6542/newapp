import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../assets/logo-dark.png';
import NavLinks from './NavLinks';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 50);
    };
    window.addEventListener('scroll', scrollActive);
    return () => window.removeEventListener('scroll', scrollActive);
  }, [active]);
  return (
    <nav
      className={`${active ? 'shadow-lg bg-white' : ''} fixed h-20 w-full -top-3 left-0 z-50 mb-2`}
    >
      <div className="flex items-center font-medium justify-around">
        <div
          className={`${
            active ? 'py-1 transition-all duration-300' : 'py-3'
          } container flex items-center justify-between px-0 `}
        >
          <div className="z-50 p-4 xl:-ml-15 sm:-ml-10 lg:px-8 md:w-auto w-full flex justify-between">
            <img src={Logo} alt="logo" className="md:cursor-pointer h-5 w-28" />
          </div>
          <ul className="lg:flex hidden mr-[450px] items-center gap-8 font-rubik">
            <NavLinks />
          </ul>
          <div className="sm:flex justify-end items-center md:-mr-10 md:ml-6 lg:pr-3">
            <div className="sm:flex hidden justify-center items-center">
              <Link to="/" className="py-7 px-3 inline-block font-normal font-rubik">
                Login
              </Link>
              <button className="bg-[#F2F5Fb] text-black font-medium  px-6 py-2 rounded-md">
                Get Started
              </button>
            </div>
            <div className="text-3xl mr-5 ml-6 block lg:hidden" onClick={() => setOpen(!open)}>
              <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        <ul
          className={`
        lg:hidden bg-white fixed w-80 top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? 'left-0' : 'left-[-100%]'}
        `}
        >
          <div className="z-50 p-4 md:w-auto w-full flex justify-end">
            <div className="text-3xl fixed sm:-mt-20 -mt-20" onClick={() => setOpen(!open)}>
              <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
            </div>
          </div>
          <div className="-mt-10">
            <NavLinks />
          </div>
          <div className="py-5">
            <button className="bg-[#F2F5Fb] text-black font-semibold  px-6 py-2 rounded-md">
              Get Started
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
