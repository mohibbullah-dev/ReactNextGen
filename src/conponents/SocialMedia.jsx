import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Flex from "./Flex";

const socialmedia = [
  {
    iconLogo: <FaFacebook />,
    link: "#",
  },

  {
    iconLogo: <FaInstagram />,
    link: "#",
  },

  {
    iconLogo: <FaTwitter />,
    link: "#",
  },
  {
    iconLogo: <FaLinkedinIn />,
    link: "#",
  },

  {
    iconLogo: <FaYoutube />,
    link: "#",
  },
];

const SocialMedia = () => {
  return (
    <>
      {socialmedia.map(({ link, iconLogo }, index) => (
        <a key={index} href={link}>
          {iconLogo}
        </a>
      ))}
    </>
  );
};

export default SocialMedia;
