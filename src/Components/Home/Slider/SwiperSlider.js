import img1 from '../images/slider1.jpg';
import img2 from '../images/slider2.jpg';
import img3 from '../images/slider3.jpg';
import img4 from '../images/slider4.jpg';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import './style.css';

// import Swiper core and required modules
import SwiperCore, { Keyboard, Pagination, Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Keyboard, Pagination, Navigation]);

function SwiperSlider() {
  const images = [img1, img2, img3, img4];
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className='mySwiper'
      >
        <div>
        {images &&
          images.map((img) => (
            <SwiperSlide>
              <img src={img} alt='' />
               <div className="slider-title-body">
               <h1 className="slider-Title">ONLINE GAME HOUSE</h1>
               <h5 style={{color:'red', fontWeight:'700'}}>PURCHASE YOUR DESIRED GAME</h5>
               </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
}

export default SwiperSlider;
