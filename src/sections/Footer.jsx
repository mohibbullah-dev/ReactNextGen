import React from "react";
import Flex from "../conponents/Flex";
import logo from "../assets/images/logo.png";
import Container from "../conponents/Container";
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";
import youtube from "../assets/images/youtube.png";
import twitter from "../assets/images/twitter.png";
import linkedin from "../assets/images/linkedin.png";

const socialMedia = [
  {
    icon: instagram,
    alt: "instagram",
  },
  {
    icon: facebook,
    alt: "facebook",
  },
  {
    icon: youtube,
    alt: "youtube",
  },
  {
    icon: twitter,
    alt: "twitter",
  },
  {
    icon: linkedin,
    alt: "linkedin",
  },
];

const Footer = () => {
  return (
    <section className=" mb-24">
      <Container>
        <Flex classname="justify-between px-4  xl:justify-between xl:px-28 flex-wrap xl:flex-nowrap ">
          <div className="w-[400px]">
            <img src={logo} alt="" />
            <p className="text-secondary font-menuFont my-4">
              Ultrices eget pretium sit euismod mi id posuere ac in in nisl sed
              augue. Posuere ac in in nisl sed augue.
            </p>
            <Flex classname="gap-3">
              {socialMedia.map(({ icon, alt }, index) => (
                <div
                  key={index}
                  className="w-[46px] h-[46px] bg-[#53548850] rounded-[50%] flex justify-center items-center cursor-pointer hover:bg-[#535488]"
                >
                  <img src={icon} alt={alt} />
                </div>
              ))}
            </Flex>
          </div>

          <div className="flex flex-col pt-4">
            <p className="text-xl font-extrabold font-menuFont text-secondary">
              Marketplace
            </p>
            <a className="text-secondary hover:underline cursor-pointer font-[20px] mt-3">
              NFTs
            </a>
            <a className="text-secondary hover:underline cursor-pointer font-[20px]">
              Art
            </a>
            <a className="text-secondary hover:underline cursor-pointer font-[20px]">
              Collectibles
            </a>
            <a className="text-secondary hover:underline cursor-pointer font-[20px]">
              Virtual world
            </a>
          </div>

          <div className="flex flex-col pt-4">
            <p className="text-xl font-extrabold font-menuFont text-secondary">
              Marketplace
            </p>
            <a className="text-secondary hover:underline cursor-pointer font-[20px] mt-3">
              NFTs
            </a>
            <a className="text-secondary hover:underline cursor-pointer font-[20px]">
              Art
            </a>
            <a className="text-secondary hover:underline cursor-pointer font-[20px]">
              Collectibles
            </a>
            <a className="text-secondary hover:underline cursor-pointer font-[20px]">
              Virtual world
            </a>
          </div>

          <div className="flex flex-col pt-4">
            <p className="text-xl font-extrabold font-menuFont text-secondary">
              Marketplace
            </p>
            <a className="text-secondary hover:underline cursor-pointer font-[20px] mt-3">
              NFTs
            </a>
            <a className="text-secondary hover:underline cursor-pointer font-[20px]">
              Art
            </a>
            <a className="text-secondary hover:underline cursor-pointer font-[20px]">
              Collectibles
            </a>
            <a className="text-secondary hover:underline cursor-pointer font-[20px]">
              Virtual world
            </a>
          </div>

          <div className="flex flex-col pt-4">
            <p className="text-xl font-extrabold font-menuFont text-secondary">
              Marketplace
            </p>
            <a className="text-secondary hover:underline cursor-pointer font-[20px] mt-3">
              NFTs
            </a>
            <a className="text-secondary hover:underline cursor-pointer font-[20px]">
              Art
            </a>
            <a className="text-secondary hover:underline cursor-pointer font-[20px]">
              Collectibles
            </a>
            <a className="text-secondary hover:underline cursor-pointer font-[20px]">
              Virtual world
            </a>
          </div>
        </Flex>
      </Container>
      <div className="w-auto h-[1px] bg-[#2e315073] mt-14 mb-6 mx-12"></div>
      <div className="text-secondary m-auto text-center">
        © 2022 Copyright{" "}
        <span className="text-xl text-secondary font-bold">
          TemplatesJungle.
        </span>
        All rights reserved
      </div>
    </section>
  );
};

export default Footer;
