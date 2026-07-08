import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import slide1 from "../../images/products- slider-1.jpg";
import slide2 from "../../images/homehero-4.png";
import slide3 from "../../images/products-slider-2.jpg";
import slide4 from "../../images/products-slider-3.png";

import "swiper/css";

const slides = [
  {
    image: slide1,
    label: "Dorot Gardens garlic rolls",
  },
  {
    image: slide2,
    label: "Dorot Gardens garlic and ginger stir fry",
  },
  {
    image: slide3,
    label: "Dorot Gardens garlic and ginger with vegetables",
  },
  {
    image: slide4,
    label: "Dorot Gardens products from field to freezer",
  },
];

const ArrowIcon = ({ direction = "prev" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-[86px] w-[50px]"
    viewBox="0 0 50 86"
    aria-hidden="true"
  >
    <g
      transform={direction === "next" ? "translate(70 512) rotate(180)" : "translate(-20 -426)"}
    >
      <g>
        <rect
          width="50"
          height="86"
          rx="10"
          transform="translate(20 426)"
          fill="#720062"
        />
        <g transform="translate(30 499) rotate(-90)" fill="#ca95c2">
          <path
            d="M 54.68926239013672 24.5 L 1.310736417770386 24.5 L 28 0.6703003644943237 L 54.68926239013672 24.5 Z"
            stroke="none"
          />
          <path
            d="M 28 1.340600967407227 L 2.621471405029297 24 L 53.3785285949707 24 L 28 1.340600967407227 M 28 0 L 56 25 L 0 25 L 28 0 Z"
            stroke="none"
            fill="#720062"
          />
        </g>
      </g>
    </g>
  </svg>
);

const ProductsSlider = () => {
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(
      "(max-width: 1024px) and (max-height: 500px) and (orientation: landscape)"
    );
    const update = () => setIsMobileLandscape(query.matches);

    update();
    query.addEventListener("change", update);

    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <section className="products-slider bg-white text-[#720062]">
      <style>{`
        @media (max-width: 767px) {
          .products-slider {
            min-height: 100vh !important;
          }

          .products-slider-inner {
            display: flex;
            min-height: 100vh !important;
            flex-direction: column;
            justify-content: center;
            padding-top: 18px !important;
            padding-bottom: 34px !important;
          }

          .products-slider-desktop-heading {
            display: none !important;
          }

          .products-slider-frame {
            padding-right: 48px !important;
            padding-left: 48px !important;
          }

          .products-slider-slide {
            height: 270px !important;
          }

          .products-slider-arrow {
            top: 50% !important;
            transform: translateY(-50%);
          }

          .products-slider-arrow svg {
            width: 32px !important;
            height: 55px !important;
          }

          .products-slider-prev {
            left: 10px !important;
          }

          .products-slider-next {
            right: 10px !important;
          }

          .products-slider-copy {
            display: flex !important;
            flex-direction: column !important;
            gap: 36px !important;
            padding: 30px 32px 0 !important;
          }

          .products-slider-tablet-title {
            display: block !important;
            width: 100% !important;
            flex: none !important;
          }

          .products-slider-tablet-title h4 {
            font-size: 17px !important;
            line-height: 24px !important;
          }

          .products-slider-tablet-title h3 {
            padding-top: 14px !important;
            font-size: 22px !important;
            line-height: 29px !important;
          }

          .products-slider-tablet-title h3 br {
            display: none;
          }

          .products-slider-text {
            width: 100% !important;
            text-align: left !important;
          }

          .products-slider-text p {
            font-size: 16px !important;
            line-height: 24px !important;
          }
        }

        @media (max-width: 1024px) and (max-height: 500px) and (orientation: landscape) {
          .products-slider {
            min-height: 0 !important;
          }

          .products-slider-inner {
            display: block;
            min-height: 0 !important;
            padding-top: 42px !important;
            padding-bottom: 58px !important;
          }

          .products-slider-frame {
            padding-right: 86px !important;
            padding-left: 86px !important;
          }

          .products-slider-slide {
            height: 300px !important;
          }

          .products-slider-arrow svg {
            width: 42px !important;
            height: 72px !important;
          }

          .products-slider-copy {
            flex-direction: row !important;
            gap: 64px !important;
            padding: 58px 128px 0 !important;
          }

          .products-slider-tablet-title {
            width: 30% !important;
            flex: 0 0 30% !important;
          }

          .products-slider-tablet-title h4 {
            font-size: 24px !important;
            line-height: 34px !important;
          }

          .products-slider-tablet-title h3 {
            padding-top: 28px !important;
            font-size: 30px !important;
            line-height: 48px !important;
          }

          .products-slider-tablet-title h3 br {
            display: block;
          }

          .products-slider-text {
            width: 70% !important;
          }

          .products-slider-text p {
            font-size: 28px !important;
            line-height: 36px !important;
          }
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .products-slider-inner {
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }

          .products-slider-desktop-heading {
            display: none !important;
          }

          .products-slider-frame {
            padding-right: 86px !important;
            padding-left: 86px !important;
          }

          .products-slider-slide {
            height: 250px !important;
          }

          .products-slider-arrow svg {
            width: 38px !important;
            height: 65px !important;
          }

          .products-slider-arrow {
            top: 50% !important;
            transform: translateY(-50%);
          }

          .products-slider-prev {
            left: 10px !important;
          }

          .products-slider-next {
            right: 10px !important;
          }

          .products-slider-copy {
            display: flex !important;
            flex-direction: row !important;
            gap: 60px !important;
            padding: 40px 86px 0 !important;
          }

          .products-slider-tablet-title {
            display: block !important;
            width: 30%;
            flex: 0 0 30%;
          }

          .products-slider-text {
            width: 70% !important;
            flex: 1 1 auto;
            text-align: left !important;
          }

          .products-slider-text p {
            font-size: 20px !important;
            line-height: 25px !important;
          }
        }

        @media (min-width: 768px) and (max-width: 899px) and (orientation: portrait) {
          .products-slider-frame {
            padding-right: 78px !important;
            padding-left: 78px !important;
          }

          .products-slider-slide {
            height: 443px !important;
          }

          .products-slider-copy {
            gap: 40px !important;
            padding: 40px 82px 0 !important;
          }

          .products-slider-tablet-title {
            width: 28%;
            flex-basis: 28%;
          }
        }

        @media (min-width: 900px) and (max-width: 1024px) and (min-height: 501px) and (orientation: landscape) {
          .products-slider-copy {
            flex-direction: row !important;
            gap: 60px !important;
            padding: 40px 86px 0 !important;
          }

          .products-slider-tablet-title {
            width: 30% !important;
            flex: 0 0 30% !important;
            text-align: left;
          }

          .products-slider-tablet-title h4 {
            font-size: 16px !important;
            line-height: 25px !important;
          }

          .products-slider-tablet-title h3 {
            padding-top: 20px !important;
            font-size: 34px !important;
            line-height: 42px !important;
          }

          .products-slider-tablet-title h3 br {
            display: block;
          }

          .products-slider-text {
            width: 70% !important;
            text-align: left !important;
          }
        }

        @media (max-width: 1024px) and (max-height: 500px) and (orientation: landscape) {
          .products-slider {
            min-height: 0 !important;
          }

          .products-slider-inner {
            display: block !important;
            min-height: 0 !important;
            padding-top: 22px !important;
            padding-bottom: 14px !important;
          }

          .products-slider-frame {
            padding-right: 72px !important;
            padding-left: 72px !important;
          }

          .products-slider-slide {
            height: calc(100vh - 10px) !important;
            min-height: 430px !important;
          }

          .products-slider-slide img {
            object-fit: cover !important;
            object-position: center center !important;
          }

          .products-slider-arrow {
            top: 50% !important;
            transform: translateY(-50%);
          }

          .products-slider-arrow svg {
            width: 48px !important;
            height: 82px !important;
          }

          .products-slider-prev {
            left: 8px !important;
          }

          .products-slider-next {
            right: 8px !important;
          }
        }
      `}</style>
      <div className="products-slider-inner mx-auto max-w-[1440px] py-10 lg:space-y-10">
        <div className="products-slider-desktop-heading hidden flex-col items-center lg:flex">
          <h4 className="text-[24px] font-semibold leading-[32px]">
            Freshly Picked from our Farms
          </h4>

          <h3
            className="block pt-4 text-[36px] font-bold leading-[48px]"
            style={{
              fontFamily: "gelica, serif",
            }}
          >
            The Journey From Field To Freezer
          </h3>
        </div>

        <div className="products-slider-frame relative px-[100px]">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".f2f-nav-next",
              prevEl: ".f2f-nav-prev",
            }}
            loop
            slidesPerView={1}
            spaceBetween={16}
            breakpoints={
              isMobileLandscape
                ? {}
                : {
                    1024: {
                      slidesPerView: 3.3,
                      spaceBetween: 14,
                    },
                    1025: {
                      slidesPerView: 3,
                      spaceBetween: 16,
                    },
                  }
            }
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.label} className="products-slider-slide !h-[380px]">
                <img
                  src={slide.image}
                  alt={slide.label}
                  className="h-full w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            className="products-slider-arrow products-slider-prev f2f-nav-prev absolute left-[26px] top-[30%] z-20 cursor-pointer border-0 bg-transparent p-0"
            aria-label="Previous slide"
          >
            <ArrowIcon />
          </button>

          <button
            type="button"
            className="products-slider-arrow products-slider-next f2f-nav-next absolute right-[26px] top-[30%] z-20 cursor-pointer border-0 bg-transparent p-0"
            aria-label="Next slide"
          >
            <ArrowIcon direction="next" />
          </button>
        </div>

        <div className="products-slider-copy flex flex-col gap-10 px-[100px]">
          <div className="products-slider-tablet-title hidden">
            <h4 className="text-[16px] font-semibold leading-[25px]">
              Freshly Picked from our Farms
            </h4>

            <h3
              className="pt-5 text-[20px] font-bold leading-[32px]"
              style={{
                fontFamily: "gelica, serif",
              }}
            >
              The Journey
              <br />
              From Field To
              <br />
              Freezer
            </h3>
          </div>

          <div className="products-slider-text space-y-10 text-center">
            <p className="text-[20px] font-semibold leading-[25px]">
              With Dorot Gardens that journey starts in the field - we grow our
              own garlic, basil, cilantro, parsley, and ginger.
            </p>

            <p className="text-[20px] font-semibold leading-[25px]">
              Once our crops reach peak freshness, we move to get them out of
              the ground, processed, and packaged as quickly as we can.
            </p>

            <p className="text-[20px] font-semibold leading-[25px]">
              The freshly picked product goes through a rapid flash-freezing
              process that locks in flavor and preserves freshness and
              nutrients. Dorot Gardens products can maintain that fresh "just
              picked" flavor for as long as two years, so you can have them
              always on-hand - fresh right from your freezer!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSlider;
