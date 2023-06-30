import React, {Component} from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image_one from '../../../../../assets/c1.png';
import image_two from '../../../../../assets/c2.png';
import image_three from '../../../../../assets/c3.png';
import image_four from '../../../../../assets/c4.png';
import image_five from '../../../../../assets/c5.png';
import image_six from '../../../../../assets/c6.png';

export default class Carousal_one_uc extends Component {
    render() {
        const count = (this.props.windowSize>=764) ? 5 : 2;
      const settings = {
        dots: false,
        infinite: true,
        slidesToShow: count,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };
      return (
        <div className="pt-7 px-1 mx-3 lg:mx-0 mb-10 h-28 bg-white rounded-lg shadow-lg flex flex-col justify-center">
          <Slider {...settings}>
            <div className="flex justify-center items-center">
              <img className="w-28 lg:w-36 mt-2" src={image_one}/>
            </div>
            <div className="flex justify-center items-center">
            <img className="w-28 lg:w-36 mt-5" src={image_two}/>
            </div>
            <div className="flex justify-center items-center">
            <img className="w-28 lg:w-36 mt-5" src={image_three}/>
            </div>
            <div className="flex justify-center items-center">
            <img className="w-8 lg:w-16 mb-6 mt-3 lg:mt-0" src={image_four}/>
            </div>
            <div className="flex justify-center items-center">
            <img className="w-28 lg:w-36 mt-3" src={image_five}/>
            </div>
            <div  className="flex justify-center items-center">
            <img className="w-8 lg:w-16 mb-6 mt-3 lg:mt-0" src={image_six}/>
            </div>
          </Slider>
        </div>
      );
    }
  }