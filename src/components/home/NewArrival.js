import React from "react";
import product7 from "../../assets/img/products/product7.jpg";
const NewArrival = () => {
  return (
    <section
      class="new-arrials py-20"
      style={{
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <div class="px-10 lg:px-20">
        <div class="card lg:card-side h-full lg:h-[500px] rounded-none">
          <figure class="w-full lg:w1/2">
            <img src={product7} alt="Album" />
          </figure>
          <div class="card-body w-full lg:w1/2 bg-[#FDF7E2]">
            <span class="text-secondary font-bold text-xs uppercase tracking-wide leading-5 mt-10 lg:mt-48">
              New arrival
            </span>
            <h2 class="card-title text-secondary font-bold text-xl tracking-wide leading-8">
              The Merchant of Venice
            </h2>
            <p class="text-secondary font-normal text-sm tracking-wide leading-[23px]">
              <a href="#d" class="underline" title="The Merchant Of Venice">
                The Merchant of Venice
              </a>
              is a brand that has its conceptual origins in the ancient Art of
              Perfumery originated in Venice and from its centuries old trade
              with the Orient.
              <br />
              The line is inspired by the “Mude,” the maritime trade routes that
              covered a very large area from Asia to Africa, and on to Europe as
              far as the Northern Seas. The “Mude” started from Venice and
              reached many different harbours, which in turn were the
              destination of other commercial routes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
