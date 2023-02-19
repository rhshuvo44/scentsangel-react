import React from "react";
import { Link } from "react-router-dom";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import product1 from "../../assets/img/products/product3.png";
import product2 from "../../assets/img/products/product4.jpg";
import "../../styles/home/Arrival.css";
import ProductCard from "../shared/ProductCard";
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
    <section class="p-10 mt-10 lg:mt-0 lg:p-20">
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
        modules={[Pagination]}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div class="text-center">
        <Link class="primary-btn" to="products">
          view all products
        </Link>
      </div>
    </section>
  );
};

export default Arrival;
