import React from "react";
import Container from "../conponents/Container";
import Flex from "../conponents/Flex";
import Title from "../conponents/Title";
import NftCol1 from "../assets/images/NftCol1.png";
import NftCol2 from "../assets/images/NftCol2.png";
import NftCol3 from "../assets/images/NftCol3.png";
import NftCol4 from "../assets/images/NftCol4.png";

const NFTsCollection = () => {
  return (
    <section className="mt-16">
      <Container>
        <Flex classname="flex-col gap-16">
          <div className="flex flex-col m-auto items-center justify-center gap-6">
            <Title title="NFTs collections" />
            <p className="text-[20px] text-secondary font-menuFont">
              Ultrices eget pretium sit euismod mi id posuere ac in in nisl sed
              augue.
            </p>
          </div>

          <Flex classname=" gap-5 flex-wrap justify-center 2xl:flex-nowrap ">
            <div className="w-[400px] bg-[#16192a] rounded-[300px] flex flex-col items-center justify-center pb-8 border border-[#2E3150]">
              <img src={NftCol1} alt="" />
              <Flex classname="flex-col pb-10 justify-center items-center gap-3.5">
                <p className="font-extrabold text-2xl text-secondary">
                  Broken collection
                </p>
                <p className="text-primary">View Collection</p>
              </Flex>
            </div>

            <div className="w-[400px] bg-[#16192a] rounded-[300px] flex flex-col items-center justify-center pb-8 border border-[#2E3150]">
              <img src={NftCol2} alt="" />
              <Flex classname="flex-col pb-10 justify-center items-center gap-3.5">
                <p className="font-extrabold text-2xl text-secondary">
                  Broken collection
                </p>
                <p className="text-primary">View Collection</p>
              </Flex>
            </div>

            <div className="w-[400px] bg-[#16192a] rounded-[300px] flex flex-col items-center justify-center pb-8 border border-[#2E3150]">
              <img src={NftCol3} alt="" />
              <Flex classname="flex-col pb-10 justify-center items-center gap-3.5">
                <p className="font-extrabold text-2xl text-secondary">
                  Broken collection
                </p>
                <p className="text-primary">View Collection</p>
              </Flex>
            </div>

            <div className="w-[400px] bg-[#16192a] rounded-[300px] flex flex-col items-center justify-center pb-8 border border-[#2E3150]">
              <img src={NftCol4} alt="" />
              <Flex classname="flex-col pb-10 justify-center items-center gap-3.5">
                <p className="font-extrabold text-2xl text-secondary">
                  Broken collection
                </p>
                <p className="text-primary">View Collection</p>
              </Flex>
            </div>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default NFTsCollection;
