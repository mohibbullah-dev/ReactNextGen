import React from "react";
import Slider from "react-slick";

const NftSlider = ({ settings, children }) => {
  console.log(settings);
  return (
    <div className="slider-container mt-16 w-[100%] overflow-visible">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default NftSlider;
