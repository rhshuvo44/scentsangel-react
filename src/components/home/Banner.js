import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home/Banner.css";
import banner1 from "../../assets/img/banner/banner1.jpg";
import banner2 from "../../assets/img/banner/banner2.jpg";
import banner3 from "../../assets/img/banner/banner3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const Banner = () => {
  return (
    <div className="h-[500px]">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            class="hero h-screen banner-slide-bg"
            style={{
              backgroundImage: `url(${banner1})`,
            }}
          >
            <div class="hero-overlay bg-opacity-40"></div>
            <div class="hero-content text-center text-neutral-content">
              <div class="max-w-md mt-40">
                <Link class="primary-btn white-btn" to="/">
                  shop now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            class="hero h-screen banner-slide-bg"
            style={{
              backgroundImage: `url(${banner2})`,
            }}
          >
            <div class="hero-overlay bg-opacity-40"></div>
            <div class="hero-content text-center text-neutral-content">
              <div class="max-w-md mt-40">
                <Link class="primary-btn white-btn" to="/">
                  shop now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            class="hero h-screen banner-slide-bg"
            style={{
              backgroundImage: `url(${banner3})`,
            }}
          >
            <div class="hero-overlay bg-opacity-40"></div>
            <div class="hero-content text-center text-neutral-content">
              <div class="max-w-md mt-40">
                <Link class="primary-btn white-btn" to="/">
                  shop now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
