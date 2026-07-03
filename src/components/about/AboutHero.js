import React from "react";

import aboutBanner from "../../images/abouthero-bg.png";
import logo from "../../images/Dorot_Logo_White.png";
import product1 from "../../images/product-1.png";
import product2 from "../../images/product-2.png";
import product3 from "../../images/product-3.png";
import product4 from "../../images/product-4.png";
import product5 from "../../images/product-5.png";
import product6 from "../../images/product-6.png";
import product7 from "../../images/product-7.png";
import product8 from "../../images/product-8.png";

const AboutHero = () => {
  const products = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
  ];

  return (
    <section id="about-hero" className="about-hero relative flex h-[700px] w-full flex-col justify-between overflow-x-hidden overflow-y-visible pt-24 pb-0">
      <style>{`
        .about-marquee {
          animation: aboutMarquee 24s linear infinite;
        }

        @keyframes aboutMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 1279px) {
          .about-hero {
            height: 100svh;
            min-height: 600px;
            justify-content: center;
            overflow: hidden;
            padding: 0;
          }

          .about-hero-breadcrumb {
            left: 30px;
            top: 16px;
          }

          .about-hero-content {
            height: 100%;
            margin: 0 auto;
            padding: 72px 48px 40px;
            transform: none;
          }

          .about-hero-logo {
            top: 0;
            width: 255px;
            margin-bottom: 0;
          }

          .about-hero-title {
            max-width: 840px;
            margin-top: 72px;
            font-size: 34px;
            line-height: 48px;
          }

          .about-hero-products {
            display: none;
          }
        }

        @media (min-width: 768px) and (max-width: 1279px) and (orientation: portrait) {
          .about-hero-title {
            margin-top: 64px;
            font-size: 40px;
            line-height: 52px;
          }
        }

        @media (min-width: 768px) and (max-width: 1279px) and (orientation: landscape) {
          .about-hero {
            height: 576px;
            min-height: 576px;
          }

          .about-hero-content {
            position: absolute;
            top: 54px;
            right: 0;
            left: 0;
            height: auto;
            padding: 0 48px;
          }

          .about-hero-title {
            margin-top: 42px;
            font-size: 48px;
            line-height: 58px;
          }

          .about-hero-products {
            position: absolute;
            right: 0;
            bottom: 28px;
            left: 0;
            display: block;
            height: 140px;
            margin: 0;
            padding: 0;
            transform: none;
          }

          .about-hero-products .about-marquee {
            height: 100%;
          }

          .about-hero-products .about-marquee > div {
            width: 120px;
            margin-right: 20px;
            margin-left: 20px;
          }

          .about-hero-products .about-marquee img {
            width: 120px;
            max-width: 120px;
          }
        }

        @media (max-width: 480px) {
          .about-hero-content {
            padding-right: 30px;
            padding-left: 30px;
          }

          .about-hero-logo {
            width: min(255px, 68vw);
          }
        }

        @media (max-width: 767px) and (orientation: portrait) {
          .about-hero {
            height: 100svh;
            min-height: 600px;
          }

          .about-hero-content {
            padding: 64px 30px 36px;
          }

          .about-hero-logo {
            width: min(255px, 68vw);
          }

          .about-hero-title {
            margin-top: 54px;
            font-size: 34px;
            line-height: 48px;
          }
        }

        @media (max-width: 991px) and (max-height: 599px) and (orientation: landscape) {
          .about-hero {
            height: 100svh;
            min-height: 0;
          }

          .about-hero-breadcrumb {
            display: none;
          }

          .about-hero-content {
            height: 100%;
            padding: 18px 30px;
          }

          .about-hero-logo {
            width: 190px;
          }

          .about-hero-title {
            margin-top: 28px;
            font-size: 28px;
            line-height: 36px;
          }

          .about-hero-products {
            display: none;
          }
        }
      `}</style>

      {/* Background */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutBanner})` }}
      />

      {/* Vignette Overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-purple-950/20" />

      {/* Breadcrumb */}
      <div className="about-hero-breadcrumb absolute left-[70px] top-[20px] z-20">
        <p className="font-goldplay text-[13px] text-white/75">
          <span className="mr-2 text-[#bc87b1]">Home / </span>
          <span className="font-medium text-white">About Dorot Gardens</span>
        </p>
      </div>

      {/* Main Content Container */}
      <div className="about-hero-content relative z-10 mx-auto mb-12 flex max-w-5xl flex-1 -translate-y-4 flex-col items-center justify-center px-4 text-center">
        {/* Brand Logo */}
        <img
          src={logo}
          alt="Dorot Gardens"
          className="about-hero-logo relative top-[10px] mb-8 h-auto w-44 object-contain animate-fade-in md:w-56 lg:w-64"
        />

        {/* Hero Typography */}
        <h1 className="about-hero-title mt-14 max-w-4xl text-4xl font-bold leading-tight tracking-normal text-white md:text-5xl lg:text-6xl [font-family:'gelica',serif]">
          Same high quality freshness.
          <span className="mt-2 block">Brand new look.</span>
        </h1>
      </div>

        {/* Product Marquee */}
        <div
            className="about-hero-products relative z-10 mt-auto w-full -translate-y-[62px] overflow-hidden pt-[40px] pb-[70px]"
            style={{
                overscrollBehavior: "none",
                WebkitOverflowScrolling: "auto",
            }}
        >
            <div className="about-marquee flex w-max items-center">
                {[...products, ...products].map((product, index) => (
                <div
                    key={index}
                    className="mx-[25px] flex w-[180px] shrink-0 justify-center"
                >
                    <img
                    src={product}
                    alt={`Dorot Garden Product ${index + 1}`}
                    className="relative z-20 h-auto w-full max-w-[180px] object-contain drop-shadow-xl transition-transform duration-300 ease-out hover:scale-[1.35]"
                    />
                </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default AboutHero;
