import React from "react";
import productsPattern from "../../images/products-pattern.png";

const ProductsIntro = () => {
  return (
    <section className="products-intro relative flex h-[356px] items-start overflow-hidden bg-[#cc4aa7] text-left text-white">
      <style>{`
        @media (max-width: 767px) {
          .products-intro {
            height: auto !important;
            min-height: 0 !important;
          }

          .products-intro-pattern {
            width: 230px !important;
            height: auto !important;
            right: -8px !important;
            top: 0 !important;
          }

          .products-intro-content {
            padding: 64px 32px 56px !important;
            gap: 38px;
          }

          .products-intro-title {
            font-size: 38px !important;
            line-height: 45px !important;
          }

          .products-intro-copy {
            max-width: none !important;
            color: #720062 !important;
            font-size: 19px !important;
            line-height: 28px !important;
          }
        }

        @media (max-width: 767px) and (orientation: landscape) {
          .products-intro-pattern {
            width: 282px !important;
            right: -10px !important;
          }

          .products-intro-content {
            padding: 56px 70px 72px !important;
            gap: 56px;
          }

          .products-intro-title {
            font-size: 58px !important;
            line-height: 74px !important;
          }

          .products-intro-copy {
            max-width: 980px !important;
            font-size: 28px !important;
            line-height: 36px !important;
          }
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .products-intro {
            height: 382px !important;
          }

          .products-intro-pattern {
            width: 318px !important;
            height: auto !important;
            right: 0 !important;
            top: 0 !important;
          }

          .products-intro-content {
            padding: 68px 220px 0 50px !important;
            gap: 48px;
          }

          .products-intro-title {
            font-size: 40px !important;
            line-height: 50px !important;
          }

          .products-intro-copy {
            max-width: 650px !important;
            color: #720062 !important;
            font-size: 20px !important;
            line-height: 25px !important;
          }
        }

        @media (min-width: 768px) and (max-width: 899px) and (orientation: portrait) {
          .products-intro {
            height: 430px !important;
          }

          .products-intro-content {
            padding: 72px 112px 0 48px !important;
            gap: 42px;
          }

          .products-intro-title {
            max-width: 560px;
          }

          .products-intro-copy {
            max-width: 600px !important;
          }

          .products-intro-pattern {
            width: 268px !important;
            right: 0 !important;
          }
        }

        @media (min-width: 900px) and (max-width: 1024px) and (orientation: landscape) {
          .products-intro-pattern {
            width: 390px !important;
            right: -10px !important;
          }
        }
      `}</style>
      <img
        src={productsPattern}
        alt=""
        className="products-intro-pattern pointer-events-none absolute right-0 top-0 h-[323px] w-[418px] select-none object-contain"
      />

      <div className="products-intro-content relative z-10 flex w-full flex-col gap-9 pl-[115px] pr-[430px] pt-12">
        <h1
          className="products-intro-title text-[60px] font-semibold capitalize leading-[58px] text-white"
          style={{
            fontFamily: "gelica, serif",
          }}
        >
          See The Whole Lineup Of
          <br />
          Dorot Gardens Products Here!
        </h1>

        <p className="products-intro-copy max-w-[1085px] text-[20px] font-semibold leading-[25px] text-white">
          Our flash-frozen pre-portioned garlic, onions and herb packs give you
          all of the flavor of fresh ingredients, but without the pesky chopping
          and measuring. With Dorot Gardens products on your side, adding
          seasoning and flavor to any dish you make has never been easier!
        </p>
      </div>
    </section>
  );
};

export default ProductsIntro;
