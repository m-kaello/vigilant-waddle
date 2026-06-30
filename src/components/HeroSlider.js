import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import leftArrow from "../images/button-left.jpg";
import rightArrow from "../images/button-right.jpg";
import heroBg from "../images/homehero-bg.png";
import hero1 from "../images/homehero-1.png";
import hero2 from "../images/homehero-2.png";
import hero3 from "../images/homehero-3.png";
import hero4 from "../images/homehero-4.png";
import hero5 from "../images/homehero-5.png";
import hero6 from "../images/homehero-6.png";

import "swiper/css";
import "swiper/css/pagination";

const slides = [hero1, hero2, hero3, hero4, hero5, hero6];

export default function HeroSlider() {
  const swiperRef = useRef(null);

  return (
    <section className="relative block h-[690px] w-full clear-both overflow-hidden bg-[#79005f] p-0 m-0">
      <style>{`
        .hero-swiper .swiper-pagination-bullet {
          width: 20px;
          height: 20px;
          margin: 0 10px;
          border-radius: 9999px;
          opacity: 1;
          background: #720062;
          border: 1px solid #720062;
          box-sizing: border-box;
        }

        .hero-swiper .swiper-pagination-bullet-active {
          background: transparent;
          border: 1px solid #720062;
        }

        .hero-swiper .swiper-wrapper {
          transition-timing-function: ease-in-out !important;
        }
      `}</style>

      <button
        className="hero-prev absolute left-[10px] top-[42%] z-50 -translate-y-1/2 border-0 bg-transparent p-0"
        onClick={() => swiperRef.current?.autoplay.stop()}
      >
        <img src={leftArrow} alt="Previous" className="block w-[50px] rounded-[10px]" />
      </button>

      <button
        className="hero-next absolute right-[10px] top-1/2 z-50 -translate-y-1/2 border-0 bg-transparent p-0"
        onClick={() => swiperRef.current?.autoplay.stop()}
      >
        <img src={rightArrow} alt="Next" className="block w-[50px] rounded-[10px]" />
      </button>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        speed={1000}
        loop
        style={{
          "--swiper-pagination-bottom": "30px",
        }}
        className="
          hero-swiper
          h-full
          w-full

          [&_.swiper-button-next]:hidden
          [&_.swiper-button-prev]:hidden
          [&_.swiper-pagination-bullet]:!w-[20px]
          [&_.swiper-pagination-bullet]:!h-[20px]
          [&_.swiper-pagination-bullet]:!mx-[10px]

          [&_.swiper-pagination]:flex
          [&_.swiper-pagination]:justify-center
          [&_.swiper-pagination]:items-center
        "
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-full w-full">
              <div
                className="relative flex h-full w-[33.3%] items-start bg-cover bg-center"
                style={{
                  backgroundImage: `url(${heroBg})`,
                }}
              >
                <div className="relative -top-[100px] px-[80px] pt-[198px] text-white">
                  <p className="m-0 text-[24px] font-extrabold leading-tight">
                    cooking prep made simple
                  </p>

                  <h1
                    className="mx-0 mb-0 mt-5 text-[97px] leading-[0.9]"
                    style={{
                      fontFamily: "gelica, serif",
                      fontWeight: 700,
                    }}
                  >
                    Pop.
                    <br />
                    Drop.
                    <br />
                    Done.
                    <sup className="relative -top-10 text-[32px]">®</sup>
                  </h1>

                  <p className="mx-0 mb-0 mt-4 w-[430px] text-[20px] font-semibold leading-[1.23]">
                    Dorot Gardens pre-portioned garlic,
                    <br />
                    onions and herbs eliminate chopping
                    <br />
                    and measuring, making it effortless to
                    <br />
                    season and flavor your cooking
                  </p>

                  <button
                    className="mx-0 mb-0 mt-10 h-[58px] w-[300px] rounded-full bg-[#be7ab3] text-[20px] text-white shadow-[4px_6px_10px_rgba(44,14,40,4)]"
                    style={{
                      fontFamily: "gelica, serif",
                      fontWeight: 700,
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>

              <div className="h-full w-[66.7%]">
                <img
                  src={image}
                  alt={`Dorot Gardens slide ${index + 1}`}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}