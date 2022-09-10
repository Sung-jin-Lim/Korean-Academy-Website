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
          src="http://chowol0592.dwebs1.kr/theme/business/extend/contents/chowol_c1/img/c1_img1.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="http://chowol0592.dwebs1.kr/theme/business/extend/contents/chowol_c1/img/c1_img2.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="http://chowol0592.dwebs1.kr/theme/business/extend/contents/chowol_c1/img/c1_img3.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="http://chowol0592.dwebs1.kr/theme/business/extend/contents/chowol_c1/img/c1_img1.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="http://chowol0592.dwebs1.kr/theme/business/extend/contents/chowol_c1/img/c1_img1.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="http://chowol0592.dwebs1.kr/theme/business/extend/contents/chowol_c1/img/c1_img1.jpg"
          alt=""
        />
      </div>
    </Slider>
  );
}
