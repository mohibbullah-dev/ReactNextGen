import React from "react";
import Container from "../conponents/Container";
import Flex from "../conponents/Flex";
import Buttons from "../conponents/Buttons";
import bannerImg from "../assets/images/bannerImg.png";

const Banner = () => {
  return (
    <section className="py-14 pl-28">
      <Container>
        <Flex classname="items-center justify-between">
          <div className="max-w-[806px] text-start">
            <h1 className="font-black text-8xl text-secondary titleBg">
              Best NFTs Marketplace.
            </h1>
            <p className="text-lx text-secondary mt-[32px] mb-[60px] max-w-[650px]">
              Ultrices eget pretium sit euismod mi id. In commodo auctor eget
              congue sit. Risus, aliquam odio posuere ac in in nisl sed augue.
              Porta aenean egestas malesuada in pulvinar enim viverra.
            </p>

            <Flex classname="gap-4">
              <Buttons text={"Get started"} />
              <Buttons text={"Create NFTs"} bgShow={false} />
            </Flex>
          </div>

          <Flex
            classname="justify-center overflow-hidden min-w-[911px] min-h-[869px] 
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
