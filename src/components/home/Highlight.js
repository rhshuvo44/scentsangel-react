import React from "react";
import { Link } from "react-router-dom";
import product6 from "../../assets/img/products/product6.jpg";
import SectionTitle from "../shared/SectionTitle";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";
const Highlight = () => {
  return (
    <section class="highlight p-10 lg:p-20">
      <SectionTitle
        title={"Masque milano"}
        subTitle={"Highlight of the week"}
      />

      <div class="card card-side flex-col lg:flex-row mt-20">
        <figure class="w-full lg:w-1/2">
          <img src={product6} alt="Movie" class="px-0 lg:px-20" />
        </figure>
        <div class="card-body w-full lg:w-1/2 pr-0 lg:pr-20">
          <h2 class="card-title font-bold text-xl uppercase tracking-wide leading-8">
            love kills
          </h2>
          <p class="font-bold text-xl uppercase tracking-wide leading-8">
            <span class="text-red-400">TK 9417.51</span>
            <del class="text-[#595959]"> TK 17417.51</del>
          </p>
          <div class="divider"></div>
          <div class="share flex gap-5">
            <span class="text-[#595959] font-bold text-[11px] uppercase tracking-wide leading-[18px]">
              share
            </span>
            <ul class="flex gap-5">
              <li>
                <a
                  class="text-[#595959] opacity-50 hover:opacity-100 ease-in duration-300"
                  href="#f"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  class="text-[#595959] opacity-50 hover:opacity-100 ease-in duration-300"
                  href="#f"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  class="text-[#595959] opacity-50 hover:opacity-100 ease-in duration-300"
                  href="#g"
                >
                  <BsPinterest />
                </a>
              </li>
            </ul>
          </div>
          <div class="size">
            <span class="block text-[#303030] font-normal text-sm capitalize mb-4 tracking-wide leading-[23px]">
              size :
            </span>
            <button class="btn btn-outline btn-sm capitalize rounded-none hover:bg-transparent hover:text-[#303030]">
              1.2 oz/ 35 ml
            </button>
            <button class="btn btn-outline btn-sm capitalize rounded-none hover:bg-transparent hover:text-[#303030]">
              5 ml
            </button>
            <button class="btn btn-outline btn-sm capitalize rounded-none hover:bg-transparent hover:text-[#303030]">
              10 ml
            </button>
          </div>
          <div class="card-actions">
            <Link
              class="primary-btn btn-cart w-full text-center my-5"
              to="cart"
            >
              add to cart
            </Link>
            <a
              class="btn text-white w-full text-center bg-[#3C0DEF] rounded-none capitalize"
              href="#d"
            >
              buy with <span class="font-bold text-xl mx-1"> shop </span>
              <span class="bg-base-100 text-[#3C0DEF] p-1 rounded"> pay</span>
            </a>
          </div>
          <Link
            class="text-[#303030] font-normal text-sm tracking-wide leading-[23px] mt-5 underline hover:no-underline ease-in duration-500"
            to="/"
          >
            View product details
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
