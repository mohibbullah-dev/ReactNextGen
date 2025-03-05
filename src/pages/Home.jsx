import React from "react";
import Banner from "../sections/Banner";
import Brand from "../sections/Brand";
import Navbar from "../sections/Navbar";
import NFR from "../sections/NFR";
import TopCreators from "../sections/TopCreators";
import NewsLetter from "../sections/NewsLetter";
import NFTsCollection from "../sections/NFTsCollection";
import LatestBlog from "../sections/LatestBlog";
import Footer from "../sections/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Brand />
      <NFR />
      <TopCreators />
      <NewsLetter />
      <NFTsCollection />
      <LatestBlog />
      <Footer />
    </>
  );
};

export default Home;
