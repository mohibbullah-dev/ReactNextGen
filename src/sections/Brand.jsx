import React from "react";
import Container from "../conponents/Container";
import Flex from "../conponents/Flex";
// brands imported here
import brand1 from "../assets/images/brand1.png";
import brand2 from "../assets/images/brand2.png";
import brand3 from "../assets/images/brand3.png";
import brand4 from "../assets/images/brand4.png";
import brand5 from "../assets/images/brand5.png";

import brandShadow from "../assets/images/brandShadow.png";

// arrays hrer

let allBrands = [
  {
    src: brand1,
    alt: "brand1",
  },
  {
    src: brand2,
    alt: "brand2",
  },
  {
    src: brand3,
    alt: "brand3",
  },
  {
    src: brand4,
    alt: "brand4",
  },
  {
    src: brand5,
    alt: "brand5",
  },
];

const Brand = () => {
  return (
    <section className="py-[120px] relative">
      <img
        src={brandShadow}
        alt=""
        className=" absolute left-0 top-[-1000px] opacity-45"
      />
      <Container>
        <Flex
          classname={`gap-[113px] items-center justify-center ${
            allBrands.length > 5 && "flex-wrap"
          }`}
        >
          {allBrands.map(({ src, alt }) => (
            <img key={alt} src={src} alt={alt} />
          ))}
        </Flex>
      </Container>
    </section>
  );
};

export default Brand;
