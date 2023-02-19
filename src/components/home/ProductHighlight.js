import React from "react";
import { Link } from "react-router-dom";
import product from "../../assets/img/products/product9.jpg";
import "../../styles/home/ProductHighlight.css";
const ProductHighlight = () => {
  return (
    <section class="product p-10 lg:p-20">
      <div class="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* <!-- single item start  --> */}
        <div class="card image-full h-[400px] rounded-none">
          <figure>
            <img src={product} alt="Shoes" class="" />
          </figure>
          <div class="card-body mt-52">
            <p class="text-xs font-bold uppercase tracking-wide leading-5">
              Trendy must-have
            </p>
            <h2 class="card-title text-[22px] font-bold uppercase tracking-wide leading-9">
              moresque
            </h2>
            <div class="card-actions justify-start">
              <Link class="primary-btn white-btn" to="/">
                shop now
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- single item end  -->
        <!-- single item start  --> */}
        <div class="card image-full h-[400px] rounded-none">
          <figure>
            <img src={product} alt="Shoes" class="" />
          </figure>
          <div class="card-body mt-52">
            <p class="text-xs font-bold uppercase tracking-wide leading-5">
              Trendy must-have
            </p>
            <h2 class="card-title text-[22px] font-bold uppercase tracking-wide leading-9">
              moresque
            </h2>
            <div class="card-actions justify-start">
              <Link class="primary-btn white-btn" to="/">
                shop now
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- single item end  -->
        <!-- single item start  --> */}
        <div class="card image-full h-[400px] rounded-none">
          <figure>
            <img src={product} alt="Shoes" class="" />
          </figure>
          <div class="card-body mt-52">
            <p class="text-xs font-bold uppercase tracking-wide leading-5">
              Trendy must-have
            </p>
            <h2 class="card-title text-[22px] font-bold uppercase tracking-wide leading-9">
              moresque
            </h2>
            <div class="card-actions justify-start">
              <Link class="primary-btn white-btn" to="/">
                shop now
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- single item end  --> */}
      </div>
    </section>
  );
};

export default ProductHighlight;
