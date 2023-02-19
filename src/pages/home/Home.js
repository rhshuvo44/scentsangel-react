import React from "react";
import Arrival from "../../components/home/Arrival";
import Article from "../../components/home/Article";
import Banner from "../../components/home/Banner";
import Highlight from "../../components/home/Highlight";
import NewArrival from "../../components/home/NewArrival";
import ProductHighlight from "../../components/home/ProductHighlight";

const Home = () => {
  return (
    <>
      <Banner />
      <Arrival />
      <ProductHighlight />
      <Highlight />
      <NewArrival />
      <Article />
    </>
  );
};

export default Home;
