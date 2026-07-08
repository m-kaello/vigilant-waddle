import React, { useEffect, useState } from "react";

import heroImage from "../../images/product-hero.png";
import mobileHeroImage from "../../images/product-hero-mobile.png";

import farmFreshIcon from "../../images/product-farm-fresh.svg";
import veganIcon from "../../images/product-vegan.svg";
import parveIcon from "../../images/product-parve.svg";
import glutenFreeIcon from "../../images/product-gluten-free.svg";
import nonGmoIcon from "../../images/product-non-gmo.svg";
import shelfLifeIcon from "../../images/product-long-shelf-life.svg";
import halalIcon from "../../images/product-halal.svg";

const benefits = [
  {
    icon: farmFreshIcon,
    label: "Farm Fresh",
  },
  {
    icon: veganIcon,
    label: "Vegan",
  },
  {
    icon: parveIcon,
    label: "Parve",
  },
  {
    icon: glutenFreeIcon,
    label: "Gluten Free",
  },
  {
    icon: nonGmoIcon,
    label: "Non GMO",
  },
  {
    icon: shelfLifeIcon,
    label: "Long Shelf Life",
  },
  {
    icon: halalIcon,
    label: "Halal",
  },
];

const ProductsHero = () => {
  const [benefitsIndex, setBenefitsIndex] = useState(0);
  const [maxBenefitsIndex, setMaxBenefitsIndex] = useState(0);
  const [benefitsStep, setBenefitsStep] = useState(0);
  const [benefitsTransition, setBenefitsTransition] = useState(true);

  useEffect(() => {
    const updateMaxIndex = () => {
      if (
        window.matchMedia("(max-width: 1024px) and (orientation: landscape)")
          .matches
      ) {
        setMaxBenefitsIndex(benefits.length);
        setBenefitsStep(Math.max((window.innerWidth - 108) / 5, 1));
        return;
      }

      if (window.matchMedia("(max-width: 767px) and (orientation: portrait)").matches) {
        setMaxBenefitsIndex(benefits.length);
        setBenefitsStep(150);
        return;
      }

      if (
        window.matchMedia(
          "(min-width: 768px) and (max-width: 899px) and (orientation: portrait)"
        ).matches
      ) {
        setMaxBenefitsIndex(benefits.length);
        setBenefitsStep(155);
        return;
      }

      setMaxBenefitsIndex(0);
      setBenefitsStep(0);
    };

    updateMaxIndex();
    window.addEventListener("resize", updateMaxIndex);
    window.addEventListener("orientationchange", updateMaxIndex);

    return () => {
      window.removeEventListener("resize", updateMaxIndex);
      window.removeEventListener("orientationchange", updateMaxIndex);
    };
  }, []);

  useEffect(() => {
    setBenefitsIndex((currentIndex) => Math.min(currentIndex, maxBenefitsIndex));
  }, [maxBenefitsIndex]);

  const showPreviousBenefits = () => {
    if (maxBenefitsIndex === 0) {
      return;
    }

    if (benefitsIndex === 0) {
      setBenefitsTransition(false);
      setBenefitsIndex(benefits.length);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setBenefitsTransition(true);
          setBenefitsIndex(benefits.length - 1);
        });
      });
      return;
    }

    setBenefitsTransition(true);
    setBenefitsIndex((currentIndex) => currentIndex - 1);
  };

  const showNextBenefits = () => {
    if (maxBenefitsIndex === 0) {
      return;
    }

    setBenefitsTransition(true);
    setBenefitsIndex((currentIndex) => currentIndex + 1);
  };

  const handleBenefitsTransitionEnd = () => {
    if (benefitsIndex < benefits.length) {
      return;
    }

    setBenefitsTransition(false);
    setBenefitsIndex(0);

    window.requestAnimationFrame(() => {
      setBenefitsTransition(true);
    });
  };

  const visibleBenefits = maxBenefitsIndex > 0 ? [...benefits, ...benefits] : benefits;

  return (
    <section className="products-hero relative flex h-[calc(100vh-100px)] min-h-[570px] flex-col overflow-hidden bg-white 2xl:min-h-[620px]">
      <style>{`
        .products-hero-image picture {
          display: block;
          width: 100%;
          height: 100%;
        }

        @media (max-width: 767px) {
          .products-hero {
            height: auto !important;
            min-height: 0 !important;
          }

          .products-hero-image {
            flex: none !important;
            border-top-width: 3px !important;
          }

          .products-hero-image img {
            object-fit: cover !important;
          }

          .products-benefits-bar {
            position: relative;
            height: 248px !important;
            padding-top: 42px !important;
            overflow: hidden;
          }

          .products-benefits-track {
            max-width: none !important;
            height: 100% !important;
            justify-content: flex-start !important;
            gap: 98px;
            padding-right: 94px !important;
            padding-left: 94px !important;
            transform: translateX(var(--benefits-offset, 0px));
            transition: transform 300ms ease;
          }

          .products-benefit-item {
            width: 128px !important;
            flex: 0 0 128px;
          }

          .products-benefit-icon {
            width: 112px !important;
            height: 112px !important;
            margin-bottom: 12px !important;
          }

          .products-benefit-label {
            font-size: 24px !important;
            line-height: 29px !important;
          }

          .products-benefits-nav {
            display: block !important;
            top: 106px !important;
            z-index: 40 !important;
            font-size: 32px !important;
          }
        }

        @media (max-width: 767px) and (orientation: portrait) {
          .products-hero-image {
            height: 96vw !important;
            min-height: 575px !important;
          }

          .products-hero-image img {
            object-position: center center !important;
          }

          .products-benefits-bar {
            height: 154px !important;
            padding-top: 18px !important;
          }

          .products-benefits-bar::before,
          .products-benefits-bar::after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            z-index: 30;
            width: 36px;
            pointer-events: none;
            background: #fff;
          }

          .products-benefits-bar::before {
            left: 0;
          }

          .products-benefits-bar::after {
            right: 0;
          }

          .products-benefits-track {
            gap: 72px;
            padding-right: 36px !important;
            padding-left: 36px !important;
            transform: translateX(var(--benefits-offset, 0px));
          }

          .products-benefit-item {
            width: 78px !important;
            flex: 0 0 78px;
          }

          .products-benefit-icon {
            width: 78px !important;
            height: 78px !important;
            margin-bottom: 6px !important;
          }

          .products-benefit-label {
            font-size: 15px !important;
            line-height: 19px !important;
          }

          .products-benefits-nav {
            top: 64px !important;
            font-size: 24px !important;
          }
        }

        @media (max-width: 1024px) and (max-height: 500px) and (orientation: landscape) {
          .products-hero-image {
            height: calc(100vh - 100px) !important;
            min-height: 330px !important;
            margin-right: 0 !important;
            margin-left: 0 !important;
          }

          .products-hero-image img {
            object-fit: cover !important;
            object-position: center bottom !important;
          }

          .products-benefits-bar {
            height: 150px !important;
            padding-top: 22px !important;
          }

          .products-benefits-bar::before,
          .products-benefits-bar::after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            z-index: 30;
            width: 54px;
            pointer-events: none;
            background: #fff;
          }

          .products-benefits-bar::before {
            left: 0;
          }

          .products-benefits-bar::after {
            right: 0;
          }

          .products-benefits-track {
            max-width: none !important;
            justify-content: flex-start !important;
            gap: 0;
            padding-right: 54px !important;
            padding-left: 54px !important;
            transform: translateX(var(--benefits-offset, 0px));
            transition: transform 300ms ease;
          }

          .products-benefit-item {
            width: var(--benefits-step) !important;
            flex: 0 0 var(--benefits-step);
          }

          .products-benefit-icon {
            width: 88px !important;
            height: 88px !important;
            margin-bottom: 6px !important;
          }

          .products-benefit-label {
            font-size: 16px !important;
            line-height: 19px !important;
          }

          .products-benefits-nav {
            display: block !important;
            z-index: 50 !important;
            top: 52px !important;
            font-size: 22px !important;
          }
        }

        @media (min-width: 768px) and (max-width: 1024px) and (min-height: 501px) {
          .products-hero {
            height: auto !important;
            min-height: 0 !important;
          }

          .products-hero-image {
            height: 367px !important;
            flex: none !important;
          }

          .products-hero-image img {
            object-fit: contain !important;
            object-position: center center;
          }

          .products-benefits-bar {
            position: relative;
            height: 160px !important;
            padding-top: 20px !important;
            overflow: hidden;
          }

          .products-benefits-track {
            max-width: none !important;
            height: 100% !important;
            justify-content: flex-start !important;
            gap: 54px;
            padding-right: 50px !important;
            padding-left: 50px !important;
            transform: translateX(var(--benefits-offset, 0px));
            transition: transform 300ms ease;
          }

          .products-benefit-item {
            width: 104px !important;
            flex: 0 0 104px;
          }

          .products-benefit-icon {
            width: 76px !important;
            height: 76px !important;
            margin-bottom: 8px !important;
          }

          .products-benefit-label {
            font-size: 18px !important;
            line-height: 21px !important;
          }

          .products-benefits-nav {
            display: block !important;
            z-index: 40 !important;
          }
        }

        @media (min-width: 768px) and (max-width: 899px) and (orientation: portrait) {
          .products-hero-image {
            height: 328px !important;
          }

          .products-hero-image img {
            object-fit: cover !important;
            object-position: center bottom !important;
            transform: none !important;
          }

          .products-benefits-bar {
            height: 158px !important;
            padding-top: 20px !important;
          }

          .products-benefits-track {
            gap: 64px;
            padding-right: 38px !important;
            padding-left: 38px !important;
            transform: translateX(var(--benefits-offset, 0px));
          }

          .products-benefit-item {
            width: 91px !important;
            flex: 0 0 91px;
          }

          .products-benefit-icon {
            width: 82px !important;
            height: 82px !important;
            margin-bottom: 6px !important;
          }

          .products-benefit-label {
            font-size: 17px !important;
            line-height: 21px !important;
          }

          .products-benefits-nav {
            top: 68px !important;
            font-size: 26px !important;
          }
        }

        @media (min-width: 933px) and (max-width: 1024px) and (min-height: 501px) and (orientation: landscape) {
          .products-hero-image {
            height: 366px !important;
          }

          .products-hero-image img {
            object-fit: cover !important;
          }

          .products-benefits-track {
            justify-content: space-between !important;
            gap: 0;
            padding-right: 38px !important;
            padding-left: 38px !important;
          }

          .products-benefits-nav {
            display: none !important;
          }
        }

        @media (max-width: 1024px) and (orientation: landscape) {
          .products-benefits-bar {
            position: relative;
            height: 150px !important;
            padding-top: 22px !important;
            overflow: hidden;
          }

          .products-benefits-bar::before,
          .products-benefits-bar::after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            z-index: 30;
            width: 54px;
            pointer-events: none;
            background: #fff;
          }

          .products-benefits-bar::before {
            left: 0;
          }

          .products-benefits-bar::after {
            right: 0;
          }

          .products-benefits-track {
            max-width: none !important;
            justify-content: flex-start !important;
            gap: 0 !important;
            padding-right: 54px !important;
            padding-left: 54px !important;
            transform: translateX(var(--benefits-offset, 0px));
            transition: transform 300ms ease;
          }

          .products-benefit-item {
            width: var(--benefits-step) !important;
            flex: 0 0 var(--benefits-step) !important;
          }

          .products-benefit-icon {
            width: 76px !important;
            height: 76px !important;
            margin-bottom: 8px !important;
          }

          .products-benefit-label {
            font-size: 14px !important;
            line-height: 17px !important;
          }

          .products-benefits-nav {
            display: block !important;
            top: 52px !important;
            z-index: 50 !important;
            font-size: 30px !important;
          }
        }
      `}</style>
      <div className="products-hero-image relative min-h-0 flex-1 overflow-hidden border-t-[4px] border-[#720062]">
        <picture>
          <source
            media="(max-width: 767px) and (orientation: portrait)"
            srcSet={mobileHeroImage}
          />
          <img
            src={heroImage}
            alt="Dorot Gardens Products"
            className="h-full w-full object-cover object-center"
          />
        </picture>
      </div>

      <div className="products-benefits-bar flex h-[180px] shrink-0 items-start bg-white pt-[26px]">
        <button
          type="button"
          className="products-benefits-nav absolute left-[10px] top-[58px] z-20 hidden text-[30px] leading-none text-[#720062]"
          aria-label="Previous benefit"
          onClick={showPreviousBenefits}
        >
          ‹
        </button>

        <div
          className="products-benefits-track mx-auto flex h-full w-full max-w-[1440px] items-start justify-between px-[42px]"
          style={{
            "--benefits-index": benefitsIndex,
            "--benefits-step": `${benefitsStep}px`,
            "--benefits-offset": `${benefitsIndex * benefitsStep * -1}px`,
            transition: benefitsTransition ? undefined : "none",
          }}
          onTransitionEnd={handleBenefitsTransitionEnd}
        >
          {visibleBenefits.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="products-benefit-item flex w-[150px] flex-col items-center text-center"
            >
              <img
                src={item.icon}
                alt={item.label}
                className="products-benefit-icon mb-[12px] h-[83px] w-[83px] object-contain"
              />

              <span className="products-benefit-label text-[20px] font-semibold leading-[25px] text-[#720062]">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="products-benefits-nav absolute right-[10px] top-[58px] z-20 hidden text-[30px] leading-none text-[#720062]"
          aria-label="Next benefit"
          onClick={showNextBenefits}
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default ProductsHero;
