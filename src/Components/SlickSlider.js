import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

function SlickSlider() {
        const settings = {
          dots: false,
          arrow: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1
        };
    return(
        <div className="container mt-5">
        <Slider {...settings}>
          <div>
            <img src="./ss1.jpg" alt="" />
          </div>
          <div>
            <img src="./ss2.jpg" alt="" />
          </div>
          <div>
            <img src="./ss3.jpg" alt="" />
          </div>
          <div>
            <img src="./ss4.jpg" alt="" />
          </div>
          <div>
            <img src="./ss2.jpg" alt="" />
          </div>
          <div>
            <img src="./ss5.jpg" alt="" />
          </div>
        </Slider>
      </div>
    );
}
export default SlickSlider;