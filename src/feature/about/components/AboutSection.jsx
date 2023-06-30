import React from 'react';
import YellowCurve from '../../../assets/yellow-curve.png';
import ThreePerson from '../../../assets/about-us-3-person.png';
import PenPicture from '../../../assets/about-us-pen-pic.png';
import AboutSmile from '../../../assets/about-smile.png';
import CountUp from 'react-countup';
import TeamSilder from './TeamSilder';

const AboutSection = () => {
  return (
    <>
      <div className="bg-graybg w-full h-96">
        <div className="flex justify-center items-center">
          <h1 className="text-center mb-10 text-3xl mx-10 md:text-6xl font-semibold mt-24 text-[#25373F] font-rubik">
            About Us
          </h1>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-center leading-8 text-[#25373FB3] mx-auto ml-10 mr-10 font-rubik text-xl md:ml-56 lg:ml-64 xl:ml-[400px] font-normal">
            Our focus is always on finding the best people to work with. Our <br />
            bar is high, but you look ready to take on the challenge.
          </p>
          <div className=" -mt-12 hidden md:block">
            <img src={YellowCurve} alt="YellowCurve" className="" />
          </div>
        </div>
      </div>

      {/* Image section */}

      <div className="bg-white w-full mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center mx-20 mt-32">
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            className="mx-auto"
          >
            <img src={ThreePerson} alt="ThreePerson" />
          </div>
          <div className="flex">
            <div className="lg:mx-28">
              <div
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-easing="ease-in-out"
                className="block justify-start flex-col items-center"
              >
                <div className="flex justify-start items-center">
                  <div className=" lg:ml-7 lg:-mt-7 w-10 h-[1px] bg-navItemHover mt-5 ml-0 mr-3"></div>
                  <span className="lg:ml-7 lg:-mt-7 mt-5 text-base text-navItemHover font-medium leading-7 font-rubik">
                    Watch Video
                  </span>
                </div>
                <h1 className="lg:ml-7 mt-8 text-[#262729] text-3xl font-rubik font-medium">
                  Watch how we work
                </h1>
                <p className="lg:ml-7 mr-7 text-lg mt-8 font-rubik font-normal">
                  Scale up and down easily as your business demands. And make use of business-grade
                  consultation. Book flexibly by the day, week or longer and customise the layout to
                  reflect your brand.
                </p>
              </div>
              <div className="sm:flex block sm:justify-start lg:ml-5 w-full sm:items-center mt-8 ">
                <button className=" bg-navItemHover hover:bg-orange-500 text-white px-12 py-3 lg:px-11 sm:px-14 sm:py-4 rounded-full">
                  Learn More
                </button>
                <button className="bg-violet8 hover:bg-violet7 text-white mt-7 sm:mt-0 px-12 sm:ml-5 py-3 lg:px-11 lg:ml-10 sm:px-14 sm:py-4 rounded-full">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Section */}

      <div className="bg-graybg w-full">
        <div className="mb-24">
          <div className="mx-20">
            <div className="flex flex-col justify-start items-start">
              <h1
                data-aos="slide-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-easing="ease-in-out"
                className="font-medium mt-24 text-base text-navItemHover font-rubik"
              >
                About Us
              </h1>
              <h1
                data-aos="slide-up"
                data-aos-offset="500"
                data-aos-delay="50"
                data-aos-easing="ease-in-out"
                className="text-5xl font-medium mt-8 text-black"
              >
                We will make your website <br /> look more elegant and stylish!
              </h1>
            </div>
            <div
              data-aos="slide-up"
              data-aos-offset="500"
              data-aos-delay="50"
              data-aos-easing="ease-in-out"
              className="grid grid-cols-1 mt-9 lg:grid-cols-2 justify-start items-center"
            >
              <div className="font-normal text-base text-[#262729B3] font-rubik">
                Business advisory service advises current and future businesses prospects of a
                client, with the aim of advancing their business or company. This service is used by
                all types of businesses and would involve examining the legal, tax, finance, market
                and risks factors involved to start up a business.
              </div>
              <div className="font-normal text-base text-[#262729B3] font-rubik mt-7 lg:mt-0 ml-0 lg:ml-9">
                Business advisory service advises current and future businesses prospects of a
                client, with the aim of advancing their business or company. This service is used by
                all types of businesses and would involve examining the legal, tax, finance, market
                and risks factors involved to start up a business.
              </div>
            </div>
            <div className=" bg-graybg w-full grid lg:grid-cols-2 mt-24 justify-center items-center">
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-easing="ease-in-out"
              >
                <img src={PenPicture} alt="PenPicture" className="h-[450px] w-[580px]" />
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-easing="ease-in-out"
                className="lg:ml-9 mt-7"
              >
                <div className="lg:-mt-44 flex justify-start items-center">
                  <div className="w-2 h-5 bg-navItemHover"></div>
                  <span className="ml-3">One-page sites with Reactjs</span>
                </div>
                <div className="mt-5 flex justify-start items-center">
                  <div className="w-2 h-5 bg-navItemHover"></div>
                  <span className="ml-3">Built with Tailwindcss</span>
                </div>
                <div className="mt-5 flex justify-start items-center">
                  <div className="w-2 h-5 bg-navItemHover"></div>
                  <span className="ml-3">Free updates and support</span>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-easing="ease-in-out"
                className=" bg-numberDiv block lg:h-52 mt-7 lg:w-[550px] xl:w-[700px] lg:ml-[400px] lg:-mt-52 xl:ml-[480px] xl:-mt-64 rounded-2xl"
              >
                <div className="flex justify-center items-center">
                  <div className="mx-auto">
                    <div className="sm:flex sm:flex-wrap sm:justify-around mx-auto items-center mt-10">
                      <div className="mx-10">
                        <CountUp
                          className="text-4xl text-white font-rubik font-medium"
                          start={0}
                          end={280}
                          duration={2}
                          delay={0}
                        />
                        <p className="font-rubik text-lg text-[#FFFFFFB3]">Project Lunched</p>
                      </div>
                      <div className="w-[2px] h-24 bg-[#FFFFFF1A] sm:block hidden"></div>
                      <div className="mx-10">
                        <CountUp
                          className="text-4xl text-white font-rubik font-medium"
                          start={0}
                          end={640}
                          duration={2}
                          delay={0}
                        />
                        <p className="font-rubik text-lg text-[#FFFFFFB3]">Happy Clients</p>
                      </div>
                      <div className="w-[2px] h-24 bg-[#FFFFFF1A] md:block hidden"></div>
                      <div className="mx-10">
                        <span className="text-4xl text-white font-rubik font-medium">+</span>
                        <CountUp
                          start={0}
                          end={3500}
                          duration={2}
                          delay={0}
                          className="text-4xl text-white font-rubik font-medium"
                        />{' '}
                        <p className="font-rubik mb-4 text-lg text-[#FFFFFFB3]">Users Comments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-graybg w-full h-28"></div>
          </div>
        </div>
      </div>

      {/* New Section  */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-24">
        <div className=" mx-20">
          <div className="">
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-easing="ease-in-out"
              className=""
            >
              <div className="">
                <div className="flex justify-start items-center">
                  <div className=" lg:ml-7 lg:-mt-7 w-10 h-[1px] bg-navItemHover mt-5 ml-0 mr-3"></div>
                  <span className="lg:ml-7 lg:-mt-7 mt-5 text-base text-navItemHover font-medium leading-7 font-rubik">
                    Our notion
                  </span>
                </div>
                <h1 className="lg:ml-7 mt-8 text-[#262729] text-3xl font-rubik font-medium">
                  An Exceptionally unique experience Tailored to you
                </h1>
                <p className="lg:ml-7 mr-7 text-lg mt-8 font-rubik font-normal">
                  In a professional context it often happens that private or corporate clients order
                  a publication news while still not being ready.
                </p>
              </div>
              <div className="sm:flex block sm:justify-start lg:ml-5 w-full sm:items-center mt-8 ">
                <button className=" bg-navItemHover hover:bg-orange-500 text-white px-12 py-3 lg:px-11 sm:px-14 sm:py-4 rounded-full">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          className=" mt-5 mx-auto"
        >
          <img src={AboutSmile} className="h-[450px] mt-10 sm:mt-0" alt="AboutSmile" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          className="mx-20 mt-10 sm:mt-0"
        >
          <h1 className="text-xl font-rubik text-navItemHover font-medium leading-7">
            Our Customer
          </h1>
          <p className="text-[#25373FB3] leading-7 text-base font-normal mt-7">
            Business advisory service advises current and future businesses prospects of a client,
            with the aim of
          </p>
          <h1 className="mt-7 text-xl font-rubik text-navItemHover font-medium leading-7">
            Our Products
          </h1>
          <p className="text-[#25373FB3] leading-7 text-base font-normal mt-7">
            Business advisory service advises current and future businesses prospects of a client,
            with the aim of
          </p>
          <h1 className="mt-7 text-xl font-rubik text-navItemHover font-medium leading-7">
            Our Services
          </h1>
          <p className="text-[#25373FB3] leading-7 text-base font-normal mt-7">
            Business advisory service advises current and future businesses prospects of a client,
            with the aim of
          </p>
        </div>
      </div>

      {/* Team Section  */}

      <TeamSilder />

      {/* Joining Section  */}

      <div className="bg-numberDiv w-full h-96 mb-28">
        <div className="flex justify-end items-start">
          <img
            src={YellowCurve}
            alt="YellowCurve"
            className=" w-10 h-10 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 self-end"
          />
        </div>
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-5xl text-white font-rubik font-medium text-center mx-10">
            Interested in joining our team?
          </h1>
          <button className=" bg-navItemHover hover:bg-orange-500 text-white px-12 py-3 lg:px-11 sm:px-14 sm:py-4 mt-10 rounded-full">
            Explore Job Opertunities
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
