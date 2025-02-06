import React from "react";
import Buttons from "../conponents/Buttons";
import Container from "../conponents/Container";
import Flex from "../conponents/Flex";
import Title from "../conponents/Title";
// import images here
import bannerImg2 from "../assets/images/bannerImg2.png";

import creator1 from "../assets/images/creator1.png";
import creator2 from "../assets/images/creator2.png";
import creator3 from "../assets/images/creator3.png";
import creator4 from "../assets/images/creator4.png";

// arrys here
let allImages = [
  {
    src: creator1,
    alt: "creator1",
    text: "Loura Chin",
    btnText: "View Details",
  },
  {
    src: creator2,
    alt: "creator2",
    text: "Kelvin Glan",
    btnText: "View Details",
  },
  {
    src: creator3,
    alt: "creator3",
    text: "Glan Lee",
    btnText: "View Details",
  },
  {
    src: creator4,
    alt: "creator4",
    text: "Alameda",
    btnText: "View Details",
  },
];

const TopCreators = () => {
  return (
    <section className="relative">
      <img src={bannerImg2} alt="" className="absolute right-0 -top-[600px]" />
      <Container>
        <Flex classname="flex-col items-center justify-center gap-6">
          <Title title="Top Creators" classname="text-center" />
          <p className="text-xl text-secondary text-center w-[678px]">
            In commodo auctor eget congue sit. Ultrices eget pretium sit euismod
            mi id. Risus, aliquam odio posuere ac in in nisl sed augue.{" "}
          </p>
          <Buttons
            text="View all creators"
            classname="text-secondary text-center "
          />
        </Flex>

        <Flex classname="gap-5 pt-16">
          {allImages.map(({ src, alt, text, btnText }) => (
            <Flex
              key={alt}
              classname="flex-col gap- w-[400px] h-[309px] bg-[#16192a] items-center justify-center relative rounded-xl border border-[#2E3150]"
            >
              <Flex classname="flex-col items-center justify-center">
                <div className=" relative w-[200px] h-[200px]">
                  <img className="w-full h-full" src={src} alt={alt} />
                  <p className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 text-secondary font-extrabold text-[22px] whitespace-nowrap">
                    {text}
                  </p>
                </div>

                <Buttons
                  text={btnText}
                  classname="absolute -bottom-[26px] rounded-[10px]"
                />
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Container>
    </section>
  );
};

export default TopCreators;
