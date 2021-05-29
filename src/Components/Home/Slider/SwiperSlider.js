
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import "./style.css";

import img1 from '../images/slider1.jpg'
import img2 from '../images/slider2.jpg'
import img3 from '../images/slider3.jpg'
import img4 from '../images/slider4.jpg'


 

// import Swiper core and required modules
import SwiperCore, {
  Navigation,Pagination,Mousewheel,Keyboard
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);


function SwiperSlider() {
  const images = [img1,img2,img3,img4]
  return (
 
     <div className=""><Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className="mySwiper">
  {images.map(img=><SwiperSlide><img src={img} /></SwiperSlide>)} 
  </Swiper> 
    </div>
  )
}

export default SwiperSlider
