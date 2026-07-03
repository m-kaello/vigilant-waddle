import React, { useState, useCallback, useEffect, useRef } from "react";

import aboutSliderBg from "../../images/about-slider.png";
import product1 from "../../images/product-1.png";
import product2 from "../../images/product-2.png";
import product3 from "../../images/product-3.png";
import product4 from "../../images/product-4.png";
import product5 from "../../images/product-5.png";
import product6 from "../../images/product-6.png";
import product7 from "../../images/product-7.png";
import product8 from "../../images/product-8.png";

const products = [
  { id: 1, image: product1, name: "Garlic Trays" },
  { id: 2, image: product2, name: "Ginger" },
  { id: 3, image: product3, name: "Basil" },
  { id: 4, image: product4, name: "Cilantro" },
  { id: 5, image: product5, name: "Sautéed Glazed Onions" },
  { id: 6, image: product6, name: "Turmeric Cubes" },
  { id: 7, image: product7, name: "Parsley Trays" },
  { id: 8, image: product8, name: "Dill Trays" },
];

const TOTAL = products.length;
const ANIMATION_DURATION = 1600;
const TABLET_LANDSCAPE_QUERY =
  "(min-width: 768px) and (max-width: 1279px) and (min-height: 600px) and (orientation: landscape)";
const mod = (n, m) => ((n % m) + m) % m;

const getAnimationDuration = () =>
  typeof window !== "undefined" && window.matchMedia(TABLET_LANDSCAPE_QUERY).matches
    ? 1000
    : ANIMATION_DURATION;

const SLOT_CLASSES = {
  "-3":
    "translate-x-[calc(-50%-760px)] translate-y-[-90px] w-[260px] z-[0] opacity-100",
  "-2":
    "translate-x-[calc(-50%-520px)] translate-y-[-90px] w-[300px] z-[1] opacity-100",
  "-1":
    "translate-x-[calc(-50%-280px)] translate-y-[-90px] w-[370px] z-[2] opacity-100",
  0: "translate-x-[-50%] translate-y-[-70px] w-[500px] z-[60] opacity-100",
  1: "translate-x-[calc(-50%+280px)] translate-y-[-90px] w-[370px] z-[2] opacity-100",
  2: "translate-x-[calc(-50%+520px)] translate-y-[-90px] w-[300px] z-[1] opacity-100",
  3: "translate-x-[calc(-50%+760px)] translate-y-[-90px] w-[260px] z-[0] opacity-100",
};

const buildCards = (centerIndex) =>
  [-2, -1, 0, 1, 2].map((slot) => ({
    slot,
    productIndex: mod(centerIndex + slot, TOTAL),
  }));

export default function ProductSlider() {
  const [centerIndex, setCenterIndex] = useState(0);
  const [cards, setCards] = useState(() => buildCards(0));
  const [animating, setAnimating] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const touchStartX = useRef(null);

  const go = useCallback(
    (dir) => {
      if (animating) return;

      setAnimating(true);

      if (dir === -1) {
        const incoming = {
          slot: -3,
          productIndex: mod(centerIndex - 3, TOTAL),
        };

        setCards((prev) => [
          incoming,
          ...prev.filter((card) => card.slot !== 2),
        ]);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setCards((prev) =>
              prev.map((card) => ({
                ...card,
                slot: card.slot + 1,
              }))
            );
          });
        });
      }

      if (dir === 1) {
        const incoming = {
          slot: 3,
          productIndex: mod(centerIndex + 3, TOTAL),
        };

        setCards((prev) => [
          ...prev.filter((card) => card.slot !== -2),
          incoming,
        ]);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setCards((prev) =>
              prev.map((card) => ({
                ...card,
                slot: card.slot - 1,
              }))
            );
          });
        });
      }

      setTimeout(() => {
        const nextCenter = mod(centerIndex + dir, TOTAL);
        setCenterIndex(nextCenter);
        setCards(buildCards(nextCenter));
        setAnimating(false);
      }, getAnimationDuration());
    },
    [animating, centerIndex]
  );

  const prev = useCallback(() => go(-1), [go]);
  const next = useCallback(() => go(1), [go]);

  const jumpTo = useCallback(
    (index) => {
      if (animating || index === centerIndex) return;

      setCenterIndex(index);
      setCards(buildCards(index));
    },
    [animating, centerIndex]
  );

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prev, next]);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      if (!animating) {
        next();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [autoplay, next, animating]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;

    const dx = e.changedTouches[0].clientX - touchStartX.current;

    if (Math.abs(dx) > 40) {
      dx < 0 ? next() : prev();
    }

    touchStartX.current = null;
  };

  return (
    <>
      <link rel="stylesheet" href="https://use.typekit.net/esk2kub.css" />

      <style>{`
        @media (max-width: 1279px) {
          .about-products-card {
            transition-property: transform, width !important;
          }

          .about-products-image {
            transition-property: width, height !important;
          }

          .about-products-pagination {
            position: absolute;
            bottom: 108px;
            left: 0;
            z-index: 60;
            display: flex;
            width: 100%;
            justify-content: center;
            gap: 5px;
          }

          .about-products-dot {
            width: 5px;
            height: 5px;
            padding: 0;
            border: 0;
            border-radius: 9999px;
            background: #fff;
          }

          .about-products-dot[aria-current="true"] {
            background: #720062;
          }

          .about-products-action {
            bottom: 35px !important;
          }

          .about-products-action-button {
            width: 278px;
            height: 50px;
            padding: 0 !important;
          }
        }

        @media (max-width: 767px) and (orientation: portrait) {
          .about-products-section,
          .about-products-content {
            min-height: clamp(760px, 156vw, 988px) !important;
            height: clamp(760px, 156vw, 988px);
          }

          .about-products-backdrop {
            height: 29% !important;
          }

          .about-products-heading {
            padding: 56px 30px 12px !important;
            text-align: left;
          }

          .about-products-heading > p {
            font-size: 20px !important;
            line-height: 24px;
          }

          .about-products-heading > h2 {
            margin-top: 8px !important;
            font-size: 34px !important;
            line-height: 48px !important;
          }

          .about-products-stage-wrap {
            margin-top: -53px !important;
          }

          .about-products-stage {
            right: 0 !important;
            bottom: -162px !important;
            left: 0 !important;
          }

          .about-products-card[data-slot="0"] {
            width: 320px !important;
            transform: translateX(-50%) translateY(-70px) !important;
          }

          .about-products-card[data-slot="-1"] {
            width: 340px !important;
            transform: translateX(calc(-50% - 600px)) translateY(-70px) !important;
          }

          .about-products-card[data-slot="1"] {
            width: 340px !important;
            transform: translateX(calc(-50% + 600px)) translateY(-70px) !important;
          }

          .about-products-card[data-slot="-2"],
          .about-products-card[data-slot="-1"],
          .about-products-card[data-slot="1"],
          .about-products-card[data-slot="2"] {
            opacity: 0 !important;
            pointer-events: none;
          }

          .about-products-card[data-slot="0"] .about-products-image {
            width: 320px !important;
            height: 320px !important;
          }

          .about-products-card:not([data-slot="0"]) .about-products-image {
            width: 340px !important;
            height: 340px !important;
          }

          .about-products-prev {
            display: none;
          }

          .about-products-next {
            display: none;
          }

          .about-products-pagination {
            bottom: 164px;
          }

          .about-products-action {
            bottom: 52px !important;
          }

          .about-products-action-button {
            width: min(330px, calc(100vw - 60px));
            height: 56px;
          }
        }

        @media (min-width: 768px) and (max-width: 1279px) and (orientation: portrait) {
          .about-products-section,
          .about-products-content {
            min-height: 785px !important;
            height: 785px;
          }

          .about-products-pagination {
            bottom: 172px;
          }

          .about-products-heading {
            padding-top: 40px !important;
          }

          .about-products-heading > h2 {
            margin-top: 20px !important;
          }

          .about-products-action {
            bottom: 89px !important;
          }

          .about-products-prev,
          .about-products-next {
            top: 52% !important;
          }

          .about-products-card[data-slot="0"] {
            width: 420px !important;
            transform: translateX(-50%) translateY(-70px) !important;
          }

          .about-products-card[data-slot="-1"] {
            width: 340px !important;
            transform: translateX(calc(-50% - 600px)) translateY(-70px) !important;
          }

          .about-products-card[data-slot="1"] {
            width: 340px !important;
            transform: translateX(calc(-50% + 600px)) translateY(-70px) !important;
          }

          .about-products-card[data-slot="-2"] {
            transform: translateX(calc(-50% - 900px)) translateY(-70px) !important;
          }

          .about-products-card[data-slot="2"] {
            transform: translateX(calc(-50% + 900px)) translateY(-70px) !important;
          }

          .about-products-card[data-slot="0"] .about-products-image {
            width: 420px !important;
            height: 420px !important;
          }

          .about-products-card:not([data-slot="0"]) .about-products-image {
            width: 340px !important;
            height: 340px !important;
          }
        }

        @media (min-width: 768px) and (max-width: 1279px) and (min-height: 600px) and (orientation: landscape) {
          .about-products-card,
          .about-products-image {
            transition-duration: 1000ms !important;
            transition-timing-function: ease !important;
          }

          .about-products-section,
          .about-products-content {
            min-height: clamp(640px, 100svh, 750px) !important;
            height: clamp(640px, 100svh, 750px);
          }

          .about-products-backdrop {
            height: 32.2% !important;
          }

          .about-products-heading {
            padding-top: 18px !important;
          }

          .about-products-heading > h2 {
            margin-top: 20px !important;
          }

          .about-products-stage {
            right: 0 !important;
            bottom: -143px !important;
            left: 0 !important;
          }

          .about-products-card[data-slot="0"] {
            width: 340px !important;
            transform: translateX(-50%) translateY(-70px) !important;
          }

          .about-products-card[data-slot="-1"] {
            width: 320px !important;
            transform: translateX(calc(-50% - 240px)) translateY(-70px) !important;
          }

          .about-products-card[data-slot="1"] {
            width: 320px !important;
            transform: translateX(calc(-50% + 240px)) translateY(-70px) !important;
          }

          .about-products-card[data-slot="-2"] {
            width: 220px !important;
            transform: translateX(calc(-50% - 700px)) translateY(-70px) !important;
          }

          .about-products-card[data-slot="2"] {
            width: 220px !important;
            transform: translateX(calc(-50% + 700px)) translateY(-70px) !important;
          }

          .about-products-card[data-slot="0"] .about-products-image {
            width: 340px !important;
            height: 340px !important;
          }

          .about-products-card[data-slot="-1"] .about-products-image,
          .about-products-card[data-slot="1"] .about-products-image {
            width: 320px !important;
            height: 320px !important;
          }

          .about-products-card[data-slot="-2"] .about-products-image,
          .about-products-card[data-slot="2"] .about-products-image {
            width: 220px !important;
            height: 220px !important;
          }

          .about-products-pagination {
            bottom: 123px;
            display: flex;
          }

          .about-products-action {
            bottom: 38px !important;
          }

          .about-products-prev {
            left: 0 !important;
            top: 52% !important;
          }

          .about-products-next {
            right: 0 !important;
            top: 52% !important;
          }
        }

        @media (min-width: 480px) and (max-width: 991px) and (max-height: 599px) and (orientation: landscape) {
          .about-products-section,
          .about-products-content {
            min-height: 740px !important;
            height: 740px;
          }

          .about-products-backdrop {
            height: 272px !important;
          }

          .about-products-stage {
            right: 0 !important;
            bottom: -163px !important;
            left: 0 !important;
          }

          .about-products-card[data-slot="0"] {
            width: 420px !important;
            transform: translateX(-50%) translateY(-70px) !important;
          }

          .about-products-card[data-slot="-1"] {
            width: 340px !important;
            transform: translateX(calc(-50% - 900px)) translateY(-70px) !important;
          }

          .about-products-card[data-slot="1"] {
            width: 340px !important;
            transform: translateX(calc(-50% + 900px)) translateY(-70px) !important;
          }

          .about-products-card[data-slot="-2"] {
            width: 220px !important;
            transform: translateX(calc(-50% - 700px)) translateY(-70px) !important;
          }

          .about-products-card[data-slot="2"] {
            width: 220px !important;
            transform: translateX(calc(-50% + 700px)) translateY(-70px) !important;
          }

          .about-products-card[data-slot="0"] .about-products-image {
            width: 420px !important;
            height: 420px !important;
          }

          .about-products-card:not([data-slot="0"]) .about-products-image {
            width: 340px !important;
            height: 340px !important;
          }
        }

        @media (min-width: 1280px) {
          .about-products-pagination {
            display: none;
          }
        }
      `}</style>

      <section
        id="product-carousel"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="about-products-section relative isolate flex min-h-[740px] w-full flex-col overflow-hidden bg-[#720062] font-bold"
      >
        {/* Backdrop background leaves container sits behind everything (z-10) seamlessly */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <img
            src={aboutSliderBg}
            alt=""
            className="about-products-backdrop absolute bottom-0 left-0 h-[285px] w-full object-cover object-top"
          />
        </div>

        {/* Content layer */}
        <div className="about-products-content relative z-20 flex flex-1 w-full flex-col overflow-hidden">
          <div className="about-products-heading relative z-50 shrink-0 pb-[12px] pt-[30px] text-center">
            <p className="m-0 text-[24px] font-bold text-[#be7ab3]">
              fresh new look
            </p>

            <h2
              className="mx-0 mb-0 mt-[8px] text-[37px] font-extrabold leading-[40px] text-white"
              style={{ fontFamily: `"gelica", serif` }}
            >
              Always Fresh Herbs.
              <br />
              From Our Farm To Your Freezer
            </h2>
          </div>

          <button
            type="button"
            onClick={() => {
              setAutoplay(false);
              prev();
            }}
            aria-label="Previous product"
            className="about-products-prev absolute left-[30px] top-[46%] z-50 -translate-y-1/2 border-0 bg-transparent p-0 text-[64px] font-thin leading-none text-white transition hover:text-white/70"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={() => {
              setAutoplay(false);
              next();
            }}
            aria-label="Next product"
            className="about-products-next absolute right-[30px] top-[46%] z-50 -translate-y-1/2 border-0 bg-transparent p-0 text-[64px] font-thin leading-none text-white transition hover:text-white/70"
          >
            ›
          </button>

          <div className="about-products-stage-wrap relative isolate z-20 flex min-h-0 flex-1 flex-col justify-start -mt-[160px]">
            <div className="about-products-stage pointer-events-auto absolute bottom-[-170px] left-[3%] right-[3%] h-[820px] overflow-hidden z-30">
              {cards.map((card) => {
                const product = products[card.productIndex];
                const isActive = card.slot === 0;

                return (
                  <button
                    key={product.id}
                    data-slot={card.slot}
                    type="button"
                    aria-label={`View ${product.name}`}
                    onClick={() => jumpTo(card.productIndex)}
                    className={`about-products-card absolute bottom-0 left-1/2 origin-bottom transform-gpu cursor-pointer border-0 bg-transparent p-0 transition-all duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      SLOT_CLASSES[card.slot]
                    }`}
                  >
                    <div className="relative flex h-[450px] w-full flex-col items-center justify-end">
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`about-products-image absolute left-1/2 z-[70] -translate-x-1/2 object-contain drop-shadow-md duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isActive
                            ? "bottom-[240px] h-[420px] w-[420px] max-w-none transition-[height,width]"
                            : "bottom-[240px] h-[370px] w-[370px] transition-[height,width]"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="about-products-pagination" aria-label="Choose a product">
            {products.map((product, index) => (
              <button
                key={product.id}
                type="button"
                className="about-products-dot"
                aria-label={`View ${product.name}`}
                aria-current={index === centerIndex ? "true" : undefined}
                onClick={() => jumpTo(index)}
              />
            ))}
          </div>

          {/* Action Button */}
          <div className="about-products-action absolute bottom-[90px] left-1/2 z-50 -translate-x-1/2">
            <button
                type="button"
                className="about-products-action-button relative rounded-full bg-[#720062] px-[50px] py-[12px] text-[18px] font-bold text-white transition shadow-[4px_6px_10px_rgba(44,14,40,4)]"
                style={{ fontFamily: '"gelica", serif' }}
                >
                View All Products
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
