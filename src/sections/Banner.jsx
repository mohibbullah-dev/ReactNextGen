import React from "react";
import Container from "../conponents/Container";
import Flex from "../conponents/Flex";
import Buttons from "../conponents/Buttons";
import bannerImg from "../assets/images/bannerImg.png";

const Banner = () => {
  return (
    <section className="py-[100px] px-2 xl:py-14 xl:pl-0">
      <Container>
        <Flex classname="items-center gap-7  flex-col lg:flex-row ">
          <div className="max-w-auto  order-1 lg:order-0">
            <h1 className="font-black text-4xl lg:text-5xl text-center xl:text-9xl lg:text-start text-secondary titleBg">
              Best NFTs Marketplace.
            </h1>
            <p className="text-center text-lx lg:text-left text-secondary mt-[32px] mb-[60px] max-w-[650px]">
              Ultrices eget pretium sit euixlod mi id. In commodo auctor eget
              congue sit. Risus, aliquam odio posuere ac in in nisl sed augue.
              Porta aenean egestas malesuada in pulvinar enim viverra.
            </p>

            <Flex classname="gap-4 flex-col lg:flex-row items-center">
              <Buttons
                text={"Get started"}
                classname="text-center w-[80%] xl:w-auto"
              />
              <Buttons
                text={"Create NFTs"}
                bgShow={false}
                classname="text-center w-[80%] xl:w-auto"
              />
            </Flex>
          </div>

          <Flex
            classname="justify-center overflow-hidden min-w-[411px] min-h-[369px]  xl:min-w-[811px] xl:min-h-[769px] 
           bg-[#869BDF] rounded-full ml-[20px] relative border-4 border-[#0f0e1d]"
          >
            <img src={bannerImg} alt="" />
            <div className="absolute w-full h-full bg-[#00000076]"></div>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
