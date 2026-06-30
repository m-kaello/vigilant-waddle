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
    <section className="relative flex h-[700px] w-full flex-col justify-between overflow-x-hidden overflow-y-visible pt-24 pb-0">
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
      `}</style>

      {/* Background */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutBanner})` }}
      />

      {/* Vignette Overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-purple-950/20" />

      {/* Breadcrumb */}
      <div className="absolute left-[70px] top-[20px] z-20">
        <p className="font-goldplay text-[13px] text-white/75">
          <span className="mr-2 text-[#bc87b1]">Home / </span>
          <span className="font-medium text-white">About Dorot Gardens</span>
        </p>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto mb-12 flex max-w-5xl flex-1 -translate-y-4 flex-col items-center justify-center px-4 text-center">
        {/* Brand Logo */}
        <img
          src={logo}
          alt="Dorot Gardens"
          className="relative top-[10px] mb-8 h-auto w-44 object-contain animate-fade-in md:w-56 lg:w-64"
        />

        {/* Hero Typography */}
        <h1 className="mt-14 max-w-4xl text-4xl font-bold leading-tight tracking-normal text-white md:text-5xl lg:text-6xl [font-family:'gelica',serif]">
          Same high quality freshness.
          <span className="mt-2 block">Brand new look.</span>
        </h1>
      </div>

        {/* Product Marquee */}
        <div
            className="relative z-10 mt-auto w-full -translate-y-[62px] overflow-hidden pt-[40px] pb-[70px]"
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