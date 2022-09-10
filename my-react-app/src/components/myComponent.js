import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          src="/interior.jpg"
          alt="asdasd"
        />
      </div>
      <div>
        <img
          src="/interior.jpg"
          alt="asda"
        />
      </div>
      <div>
        <img
          src="/interior.jpg"
          alt="asdads"
        />
      </div>
      <div>
        <img
          src="/interior.jpg"
          alt="asd"
        />
      </div>
      <div>
        <img
          src="/interior.jpg"
          alt="asdas"
        />
      </div>
      <div>
        <img
          src="/interior.jpg"
          alt="asdasd"
        />
      </div>
    </Slider>
  );
}
