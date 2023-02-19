import React from "react";
import Arrival from "../../components/home/Arrival";
import Banner from "../../components/home/Banner";
import Highlight from "../../components/home/Highlight";
import ProductHighlight from "../../components/home/ProductHighlight";

const Home = () => {
  return (
    <>
      <Banner />
      <Arrival />
      <ProductHighlight />
      <Highlight/>
    </>
  );
};

export default Home;
