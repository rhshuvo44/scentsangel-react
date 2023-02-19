import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import product1 from "../../assets/img/products/product3.png";
import product2 from "../../assets/img/products/product4.jpg";
import "../../styles/home/Arrival.css";
import ProductCard from "../shared/ProductCard";

import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionTitle from "../shared/SectionTitle";
const Arrival = () => {
  const products = [
    {
      frontImg: product1,
      backImg: product2,
      title: "omanuluxury",
      brand: "zafar",
      price: `1,594.07`,
    },
    {
      frontImg: product1,
      backImg: product2,
      title: "omanuluxury",
      brand: "zafar",
      price: `1,594.07`,
    },
    {
      frontImg: product1,
      backImg: product2,
      title: "omanuluxury",
      brand: "zafar",
      price: `1,594.07`,
    },
    {
      frontImg: product1,
      backImg: product2,
      title: "omanuluxury",
      brand: "zafar",
      price: `1,594.07`,
    },
    {
      frontImg: product1,
      backImg: product2,
      title: "omanuluxury",
      brand: "zafar",
      price: `1,594.07`,
    },
    {
      frontImg: product1,
      backImg: product2,
      title: "omanuluxury",
      brand: "zafar",
      price: `1,594.07`,
    },
    {
      frontImg: product1,
      backImg: product2,
      title: "omanuluxury",
      brand: "zafar",
      price: `1,594.07`,
    },
    {
      frontImg: product1,
      backImg: product2,
      title: "omanuluxury",
      brand: "zafar",
      price: `1,594.07`,
    },
    {
      frontImg: product1,
      backImg: product2,
      title: "omanuluxury",
      brand: "zafar",
      price: `1,594.07`,
    },
    {
      frontImg: product1,
      backImg: product2,
      title: "omanuluxury",
      brand: "zafar",
      price: `1,594.07`,
    },
  ];
  return (
    <section className="p-10 mt-10 lg:mt-0 lg:p-20">
      {/* title  */}
      <SectionTitle
        title={"New Arrivals"}
        subTitle={"TOP CURATED FRAGRANCES"}
      />
      {/* <!-- Swiper --> */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        navigation={true}
        modules={[ Navigation]}
        // modules={[Pagination]}
        className="mt-5 arrival-swiper"
      >
        {products.map((product) => (
          <SwiperSlide>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* btn  */}
      <div className="text-center mt-10">
        <Link className="primary-btn" to="products">
          view all products
        </Link>
      </div>
    </section>
  );
};

export default Arrival;
