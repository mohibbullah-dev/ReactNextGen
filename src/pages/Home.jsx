import React from "react";
import Banner from "../sections/Banner";
import Brand from "../sections/Brand";
import Navbar from "../sections/Navbar";
import NFR from "../sections/NFR";
import TopCreators from "../sections/TopCreators";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Brand />
      <NFR />
      <TopCreators />
    </>
  );
};

export default Home;
