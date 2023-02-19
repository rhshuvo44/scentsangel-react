import React from "react";
import "../../styles/home/Article.css";
import product from "../../assets/img/products/product9.jpg";
const Article = () => {
  return (
    <section class="article px-10 lg:px-20 py-20">
      <h2 class="text-center text-[#303030] font-bold text-xl uppercase tracking-wide leading-8">
        Featured articles
      </h2>
      <div class="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
        {/* <!-- single item start  --> */}
        <div class="card card-compact rounded-none overflow-hidden">
          <figure>
            <img src={product} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-[#303030] text-[18px] uppercase tracking-wide leading-[30px]">
              <a href="#f"> Get Ready for Summer | Top 5 Unisex Scents </a>
            </h2>
            <p class="text-[#303030] font-normal text-sm tracking-wide leading-[23px]">
              Get Ready this Summer with our Top 5 Unisex ScentsAoud Blue Notes
              - Mancera Exclusive, elegant and refined Mancera Aoud Blue Notes
              composition is ...
            </p>

            <a
              class="text-[#303030] font-normal text-sm tracking-wide leading-[23px] mt-5 underline hover:no-underline ease-in duration-500"
              href="#g"
            >
              Read more
            </a>
          </div>
        </div>
        {/* <!-- single item end  -->
          <!-- single item start  --> */}
        <div class="card card-compact rounded-none overflow-hidden">
          <figure>
            <img src={product} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-[#303030] text-[18px] uppercase tracking-wide leading-[30px]">
              <a href="#f"> Get Ready for Summer | Top 5 Unisex Scents </a>
            </h2>
            <p class="text-[#303030] font-normal text-sm tracking-wide leading-[23px]">
              Get Ready this Summer with our Top 5 Unisex ScentsAoud Blue Notes
              - Mancera Exclusive, elegant and refined Mancera Aoud Blue Notes
              composition is ...
            </p>

            <a
              class="text-[#303030] font-normal text-sm tracking-wide leading-[23px] mt-5 underline hover:no-underline ease-in duration-500"
              href="#f"
            >
              Read more
            </a>
          </div>
        </div>
        {/* <!-- single item end  -->
          <!-- single item start  --> */}
        <div class="card card-compact rounded-none overflow-hidden">
          <figure>
            <img src={product} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-[#303030] text-[18px] uppercase tracking-wide leading-[30px]">
              <a href="#f"> Get Ready for Summer | Top 5 Unisex Scents </a>
            </h2>
            <p class="text-[#303030] font-normal text-sm tracking-wide leading-[23px]">
              Get Ready this Summer with our Top 5 Unisex ScentsAoud Blue Notes
              - Mancera Exclusive, elegant and refined Mancera Aoud Blue Notes
              composition is ...
            </p>

            <a
              class="text-[#303030] font-normal text-sm tracking-wide leading-[23px] mt-5 underline hover:no-underline ease-in duration-500"
              href="#f"
            >
              Read more
            </a>
          </div>
        </div>
        {/* <!-- single item end  --> */}
      </div>
      <div class="mt-20 text-center">
        <a class="primary-btn" href="#f">
          View all articles
        </a>
      </div>
    </section>
  );
};

export default Article;
