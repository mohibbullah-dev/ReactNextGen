import React from "react";
import Container from "../conponents/Container";
import Flex from "../conponents/Flex";
import Title from "../conponents/Title";
import Buttons from "../conponents/Buttons";

import latestBlogImg1 from "../assets/images/latestBlogImg1.png";
import Shade3 from "../assets/images/Shade3.png";

const LatestBlog = () => {
  return (
    <section className="p-4 xl:p-[200px] relative">
      <Container>
        <Flex classname="flex-col gap-15">
          <Flex classname="justify-center items-center flex-col xl:flex-row gap-4 xl:gap-0 xl:justify-between w-full h-fit">
            <Title title="Our Latest Blog" classname="text-left" />
            <Buttons text="Read our blogs" classname="text-center" />
          </Flex>

          <Flex classname="gap-4 justify-center flex-wrap xl:flex-nowrap">
            <div className="w-[400px] h-[460px] bg-[#16192a] border border-[#2E3150] relative rounded-lg">
              <img src={latestBlogImg1} alt="" />
              <Flex classname="flex-col px-10 absolute bottom-0 left-0 transform -translate-y-7">
                <p className="text-primary">Arts</p>
                <p className="text-2xl text-secondary">
                  Best NFTs arts collections from best artists
                </p>
              </Flex>
            </div>

            <div className="w-[400px] h-[460px] bg-[#16192a] border border-[#2E3150]  relative  rounded-lg">
              <img src={latestBlogImg1} alt="" />
              <Flex classname="flex-col px-10 absolute bottom-0 left-0 transform -translate-y-7">
                <p className="text-primary">Arts</p>
                <p className="text-2xl text-secondary">
                  Best NFTs arts collections from best artists
                </p>
              </Flex>
            </div>

            <div className="w-[400px] h-[460px] bg-[#16192a] border border-[#2E3150]  relative  rounded-lg">
              <img src={latestBlogImg1} alt="" />
              <Flex classname="flex-col px-10 absolute bottom-0 left-0 transform -translate-y-7">
                <p className="text-primary">Arts</p>
                <p className="text-2xl text-secondary">
                  Best NFTs arts collections from best artists
                </p>
              </Flex>
            </div>

            <div className="w-[400px] h-[460px] bg-[#16192a] border border-[#2E3150]  relative  rounded-lg">
              <img src={latestBlogImg1} alt="" />
              <Flex classname="flex-col px-10 absolute bottom-0 left-0 transform -translate-y-7">
                <p className="text-primary">Arts</p>
                <p className="text-2xl text-secondary">
                  Best NFTs arts collections from best artists
                </p>
              </Flex>
            </div>
          </Flex>
        </Flex>
      </Container>
      <img
        src={Shade3}
        alt="shadow3"
        className="absolute right-0 -bottom-[500px] opacity-50"
      />
    </section>
  );
};

export default LatestBlog;
