import React, { useState, useEffect } from 'react';

import image_1 from '../../../../../assets/p2_cc1.png';
import image_2 from '../../../../../assets/p2_cc2.png';
import image_3 from '../../../../../assets/p2_cc3.png';
import image_4 from '../../../../../assets/p2_cc4.png';
import image_5 from '../../../../../assets/p2_cc5.svg';
import image_6 from '../../../../../assets/p2_cc6.png';
import image_7 from '../../../../../assets/p2_cc7.png';
import image_8 from '../../../../../assets/p2_cc8.png';
import image_9 from '../../../../../assets/p2_cc9.png';
import image_10 from '../../../../../assets/p2_cc10.png';
import image_11 from '../../../../../assets/p2_cc11.png';
import image_12 from '../../../../../assets/p2_cc12.png';
import image_13 from '../../../../../assets/p2_cc13.png';
import image_14 from '../../../../../assets/p2_cc14.png';
import image_15 from '../../../../../assets/p2_cc15.png';
import image_16 from '../../../../../assets/p2_cc16.png';
import image_17 from '../../../../../assets/p2_cc17.png';
import image_18 from '../../../../../assets/p2_cc18.png';
import image_19 from '../../../../../assets/p2_cc19.png';
import image_20 from '../../../../../assets/p2_cc20.png';
import image_21 from '../../../../../assets/p2_cc21.png';
import image_22 from '../../../../../assets/p2_cc22.png';
import image_23 from '../../../../../assets/p2_cc23.svg';
import image_24 from '../../../../../assets/p2_cc24.png';


const Carousel_two_uc = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      images: [
        image_1,
        image_2,
        image_3,
        image_4,
        image_5,
        image_6,
        image_7,
        image_8,
        image_9,
        image_10,
        image_11,
        image_12
      ],
    },
    {
      id: 2,
      images: [
        image_13,
        image_14,
        image_15,
        image_16,
        image_17,
        image_18,
        image_19,
        image_20,
        image_21,
        image_22,
        image_23,
        image_24
      ],
    },
  ];

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="relative h-500">
    
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="bg-transparent">
              <div className="flex flex-wrap justify-center h-full">
                {slide.images.map((image, imageIndex) => (
                  <div key={imageIndex} className="w-1/6 p-2 flex items-center justify-center">
                    <img
                      src={image}
                      alt={`Slide ${slide.id} Image ${imageIndex + 1}`}
                      className="max-w-full max-h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-full">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`w-2 h-2 mx-1 rounded-full ${
              index === currentSlide ? 'bg-blue-500' : 'bg-blue-200'
            }`}
            onClick={() => handleSlideChange(index)}
          ></button>
        ))}
      </div> */}
    </div>
  );
};

export default Carousel_two_uc;
