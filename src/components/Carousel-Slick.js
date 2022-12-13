import SamsungBanner from '../img/samsungBanner.png'
import IphoneBanner from '../img/iphoneBanner.png'
import XiaomiBanner from '../img/xiaomiBanner.png'
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default class SimpleSlider extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      fade: true
    };

    return (

        <div>

            <Slider {...settings} className='xl:mx-32 mx-8 xl:mt-12 mt-8'>

                <div>
                    <img src={SamsungBanner} alt='Banner Samsung' className='rounded-xl'></img>
                </div>

                <div>
                    <img src={IphoneBanner} alt='Banner Apple' className='rounded-xl'></img>
                </div>

                <div>
                    <img src={XiaomiBanner} alt='Banner Xiaomi' className='rounded-xl'></img>
                </div>

            </Slider>

        </div>

    );
  }
}