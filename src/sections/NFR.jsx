import React from "react";
import Container from "../conponents/Container";
import Flex from "../conponents/Flex";
import Title from "../conponents/Title";
import NftSlider from "../conponents/NftSlider";
import nft1 from "../assets/images/nft1.png";
import sm_nft1 from "../assets/images/sm_nft1.png";
import Buttons from "../conponents/Buttons";

const NFR = () => {
  return (
    <section className="py-[200px]">
      <Container>
        <Flex classname="flex-col items-center justify-center">
          <Title title="Collect some NFTs" classname="text-white mx-auto" />
        </Flex>

        <NftSlider
          settings={{
            arrows: false,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
          }}
        >
          <div className="relative flex justify-center">
            <img src={nft1} alt="" className="w-[520px]" />
            <div
              className="w-[380px] bg-secondary rounded-3xl p-6 flex flex-col gap-6
                        absolute  bottom-[-100px] left-1/2 transform -translate-x-1/2"
            >
              <Flex classname="justify-between ">
                <h2 className="font-extrabold text-[#04040C] text-[22px]">
                  Skeleton head
                </h2>
                <h2 className="font-extrabold text-[#04040C] text-[22px]">
                  0.29 eth
                </h2>
              </Flex>
              <Flex classname="gap-2.5 items-center">
                <img src={sm_nft1} alt="" className="object-cover" />
                <p className="text-[#04040C] font-medium text-[20px]">
                  Loura chin
                </p>
              </Flex>

              <Buttons
                text="Buy it now"
                classname="w-full block rounded-[20px] text-center font-medium text-[19px]"
              />
            </div>
          </div>

          <div>
            <img src={nft1} alt="" className="object-cover w-[520px]" />
          </div>

          <div>
            <img src={nft1} alt="" className="object-cover w-[520px]" />
          </div>

          <div>
            <img src={nft1} alt="" className="object-cover w-[520px]" />
          </div>

          <div>
            <img src={nft1} alt="" className="object-cover w-[520px]" />
          </div>
        </NftSlider>
      </Container>
    </section>
  );
};

export default NFR;
