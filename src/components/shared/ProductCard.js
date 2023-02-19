import React from "react";
import "../../styles/shared/ProductCard.css";
const ProductCard = ({ product }) => {
  const { frontImg, backImg, title, brand, price } = product;
  return (
    <div class="card product-card overflow-hidden">
      <figure class="px-10 pt-10 relative h-52">
        <img src={frontImg} alt="Shoes" class="rounded-xl front-img absolute" />
        <img src={backImg} alt="Shoes" class="rounded-xl back-img absolute" />
      </figure>
      <div class="card-body items-center text-center">
        <p class="font-bold text-xs uppercase tracking-[.2em] leading-5">
          {title}
        </p>
        <h2 class="font-bold text-xs uppercase tracking-[.2em] leading-5">
          <a href="#s">{brand}</a>
        </h2>
        <span class="font-bold text-xs uppercase tracking-[.2em] leading-5">
          From Tk {price}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
