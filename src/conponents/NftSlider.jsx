import React from "react";
import Slider from "react-slick";

export default function SimpleSlider({ settings, children }) {
  return (
    <Slider {...settings} className="mt-16">
      {children}
    </Slider>
  );
}
