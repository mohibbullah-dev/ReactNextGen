import React from "react";
import Container from "../conponents/Container";
import Flex from "../conponents/Flex";
import Title from "../conponents/Title";
import Buttons from "../conponents/Buttons";
import newsletterImg from "../assets/images/newsletterImg.png";
import shdowCir from "../assets/images/shdowCir.png";

const NewsLetter = () => {
  return (
    <section className="mt-[100px] lg:mt-[341px] relative">
      <Container>
        <Flex classname="gap-8 text-center lg:gap-12 flex-col lg:flex-row">
          <div className="z-50">
            <img
              src={newsletterImg}
              alt=""
              className="max-w-[652px] w-full h-full "
            />
          </div>

          <Flex classname="flex-col max-w-[680px] gap-9 items-center justify-center">
            <Title
              title="Subscribe And get Latest news update about NFTs."
              classname="font-black leading-[70px] z-10"
            />
            <p className="text-[19px] font-menuFont text-secondary">
              In commodo auctor eget congue sit. Ultrices eget pretium sit
              euilgod mi id. Risus, aliquam odio posuere ac in in nisl sed
              augue. Porta aenean egestas malesuada in pulvinar enim viverra.
            </p>
            <Flex
              classname="justify-between items-center border px-2 min-w-[330px] lg:min-w-full
             border-[#2E3150] rounded-lg py-1 lg:px-5 lg:py-3 mt-0 lg:mt-6 m-0"
            >
              <input
                type="text"
                placeholder="write email here"
                className="flex-1 outline-none border-none text-secondary text-[14px] font-menuFont"
              />
              <Buttons
                text="Subscribe"
                classname="px-[20px] py-[6px] lg:px-11 lg:py-3"
              />
            </Flex>
          </Flex>
        </Flex>
      </Container>
      <img src={shdowCir} alt="" className="absolute -bottom-28 left-0" />
    </section>
  );
};

export default NewsLetter;
