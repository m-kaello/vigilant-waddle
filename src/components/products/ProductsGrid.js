import React, { useState } from "react";

import product1 from "../../images/product-1.png";
import product2 from "../../images/product-2.png";
import product3 from "../../images/product-3.png";
import product4 from "../../images/product-4.png";
import product5 from "../../images/product-5.png";
import product6 from "../../images/product-6.png";
import product7 from "../../images/product-7.png";
import product8 from "../../images/product-8.png";

const products = [
  {
    image: product1,
    name: "Garlic",
    label: "Crushed Garlic",
    href: "/dorot-gardens-crushed-garlic/",
    accent: "#c94aa7",
  },
  {
    image: product2,
    name: "Ginger",
    label: "Crushed Ginger",
    href: "/dorot-gardens-crushed-ginger/",
    accent: "#57b9b1",
  },
  {
    image: product3,
    name: "Basil",
    label: "Chopped Basil",
    href: "/dorot-gardens-chopped-basil/",
    accent: "#dd3134",
  },
  {
    image: product4,
    name: "Cilantro",
    label: "Chopped Cilantro",
    href: "/dorot-gardens-chopped-cilantro/",
    accent: "#ef7400",
  },
  {
    image: product5,
    name: "Onions",
    label: "Sauteed Glazed Onions",
    href: "/dorot-gardens-sauteed-glazed-onions/",
    accent: "#df5a88",
  },
  {
    image: product6,
    name: "Turmeric",
    label: "Crushed Turmeric",
    href: "/dorot-gardens-crushed-turmeric/",
    accent: "#4aa1c8",
  },
  {
    image: product7,
    name: "Parsley",
    label: "Chopped Parsley",
    href: "/dorot-gardens-chopped-parsley/",
    accent: "#88b03f",
  },
  {
    image: product8,
    name: "Dill Trays",
    label: "Chopped Dill",
    href: "/dorot-gardens-chopped-dill-tray/",
    accent: "#efb21b",
  },
];

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="products-grid-card group relative isolate h-[450px] w-1/3 overflow-clip bg-[#720062] 2xl:h-[477px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <a
        href={product.href}
        className="block h-full w-full"
        aria-label={`Learn more about ${product.label}`}
      >
        <div
          className={`products-grid-image absolute left-1/2 top-[84px] z-20 h-[265px] w-[350px] -translate-x-1/2 transition-all duration-300 ease-in-out 2xl:top-[96px] ${
            isHovered
              ? "translate-y-2 scale-125 opacity-0"
              : "translate-y-0 scale-100 opacity-100"
          }`}
        >
          <img
            src={product.image}
            alt={product.label}
            className="h-full w-full object-contain"
          />
        </div>

        <div
          className={`products-grid-hover-text absolute left-1/2 top-[204px] z-30 w-[390px] text-center text-[36px] font-bold leading-[42px] text-white transition-all duration-300 ease-in-out 2xl:top-[222px] ${
            isHovered
              ? "-translate-x-1/2 translate-y-0 scale-100 opacity-100"
              : "-translate-x-[47%] translate-y-3 scale-75 opacity-0"
          }`}
          style={{
            fontFamily: "gelica, serif",
          }}
        >
          Learn More about our
          <br />
          {product.name}
        </div>

        <div
          className={`products-grid-accent absolute bottom-0 z-10 h-[150px] w-full transition-all duration-300 ease-in-out 2xl:h-[187px] ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundColor: product.accent,
          }}
        />
      </a>
    </article>
  );
};

const ProductsGrid = () => {
  return (
    <section className="products-grid-section bg-[#720062]">
      <style>{`
        @media (max-width: 767px) {
          .products-grid-tablet-heading {
            display: flex !important;
            padding: 36px 32px 28px !important;
            row-gap: 14px !important;
          }

          .products-grid-tablet-heading h5 {
            font-size: 16px !important;
            line-height: 23px !important;
          }

          .products-grid-tablet-heading h3 {
            font-size: 22px !important;
            line-height: 29px !important;
          }

          .products-grid-wrap {
            max-width: none !important;
          }

          .products-grid-card,
          .products-grid-cta {
            width: 100% !important;
            height: 390px !important;
          }

          .products-grid-image {
            width: min(460px, 86vw) !important;
            height: 290px !important;
            top: 82px !important;
          }

          .products-grid-hover-text {
            display: block !important;
            width: 310px !important;
            top: 154px !important;
            font-size: 30px !important;
            line-height: 36px !important;
          }

          .products-grid-accent {
            height: 116px !important;
          }

          .products-grid-cta {
            display: none !important;
          }

          .products-grid-cta {
            gap: 28px !important;
            padding: 52px 40px !important;
          }

          .products-grid-cta-title {
            font-size: 78px !important;
            line-height: 72px !important;
          }

          .products-grid-cta-title sup {
            top: -28px !important;
            font-size: 20px !important;
          }

          .products-grid-cta-button {
            width: 310px !important;
            padding: 14px 18px !important;
            font-size: 18px !important;
            line-height: 22px !important;
          }
        }

        @media (max-width: 767px) and (orientation: landscape) {
          .products-grid-tablet-heading {
            padding: 70px 76px 100px !important;
          }

          .products-grid-tablet-heading h5 {
            font-size: 26px !important;
            line-height: 34px !important;
          }

          .products-grid-tablet-heading h3 {
            font-size: 54px !important;
            line-height: 62px !important;
          }

          .products-grid-card,
          .products-grid-cta {
            width: 33.333333% !important;
            height: 360px !important;
          }

          .products-grid-cta {
            display: flex !important;
          }

          .products-grid-image {
            width: 330px !important;
            height: 250px !important;
            top: 88px !important;
          }

          .products-grid-accent {
            height: 110px !important;
          }

          .products-grid-cta-title {
            font-size: 72px !important;
            line-height: 64px !important;
          }
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .products-grid-tablet-heading {
            display: flex !important;
            padding-bottom: 24px !important;
          }

          .products-grid-wrap {
            max-width: none !important;
          }

          .products-grid-card,
          .products-grid-cta {
            height: 250px !important;
            width: 33.333333% !important;
          }

          .products-grid-image {
            width: 212px !important;
            height: 162px !important;
            top: 64px !important;
          }

          .products-grid-hover-text {
            width: 260px !important;
            top: 92px !important;
            font-size: 30px !important;
            line-height: 38px !important;
          }

          .products-grid-accent {
            height: 79px !important;
          }

          .products-grid-cta {
            gap: 18px !important;
            padding: 28px 24px !important;
          }

          .products-grid-cta-title {
            font-size: 54px !important;
            line-height: 50px !important;
          }

          .products-grid-cta-title sup {
            top: -20px !important;
            font-size: 18px !important;
          }

          .products-grid-cta-button {
            width: 210px !important;
            padding: 10px 14px !important;
            font-size: 14px !important;
            line-height: 18px !important;
          }
        }

        @media (min-width: 900px) and (max-width: 1024px) and (orientation: landscape) {
          .products-grid-card,
          .products-grid-cta {
            height: 342px !important;
          }

          .products-grid-image {
            width: 283px !important;
            height: 216px !important;
            top: 75px !important;
          }

          .products-grid-hover-text {
            width: 320px !important;
            top: 134px !important;
            font-size: 36px !important;
            line-height: 42px !important;
          }

          .products-grid-accent {
            height: 78px !important;
          }

          .products-grid-cta-title {
            font-size: 68px !important;
            line-height: 68px !important;
          }
        }
      `}</style>

      <div className="products-grid-tablet-heading hidden flex-col space-y-3 px-[48px] pb-[24px] pt-[52px]">
        <h5 className="text-[18px] font-semibold leading-[28px] text-[#cc4aa7]">
          Get to know our eight great Dorot Gardens products
        </h5>
        <h3
          className="text-[36px] font-bold leading-[42px] text-white"
          style={{
            fontFamily: "gelica, serif",
          }}
        >
          Click on a pack to find out more
        </h3>
      </div>

      <div className="products-grid-wrap mx-auto flex w-full max-w-[1440px] flex-wrap overflow-hidden">
        {products.map((product) => (
          <ProductCard key={product.label} product={product} />
        ))}

        <div className="products-grid-cta flex h-[450px] w-1/3 flex-col items-center justify-center gap-[30px] bg-[#cc4aa7] px-[97px] py-[50px] text-white 2xl:h-[477px]">
          <h3
            className="products-grid-cta-title text-[100px] font-semibold leading-[100px]"
            style={{
              fontFamily: "gelica, serif",
            }}
          >
            Pop.
            <br />
            Drop.
            <br />
            Done.
            <sup className="relative -top-[38px] ml-2 text-[30px]">®</sup>
          </h3>

          <a
            href="https://www.instacart.com/store/brands/dorot-gardens/make-a-note"
            className="products-grid-cta-button inline-block w-[250px] rounded-[30px] bg-[#720062] px-4 py-3 text-center text-[18px] font-bold leading-[20px] text-white shadow-[8px_10px_13px_rgba(44,14,40,0.42)] transition duration-300 hover:-translate-y-1 2xl:w-[280px]"
            style={{
              fontFamily: "gelica, serif",
            }}
          >
            View Products on Instacart
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
