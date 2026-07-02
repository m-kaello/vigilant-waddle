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
const mod = (n, m) => ((n % m) + m) % m;

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
      }, ANIMATION_DURATION);
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

      <section
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="relative isolate flex min-h-[740px] w-full flex-col overflow-hidden bg-[#720062] font-bold"
      >
        {/* Backdrop background leaves container sits behind everything (z-10) seamlessly */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <img
            src={aboutSliderBg}
            alt=""
            className="absolute bottom-0 left-0 h-[285px] w-full object-cover object-top"
          />
        </div>

        {/* Content layer */}
        <div className="relative z-20 flex flex-1 w-full flex-col overflow-hidden">
          <div className="relative z-50 shrink-0 pb-[12px] pt-[30px] text-center">
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
            className="absolute left-[30px] top-[46%] z-50 -translate-y-1/2 border-0 bg-transparent p-0 text-[64px] font-thin leading-none text-white transition hover:text-white/70"
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
            className="absolute right-[30px] top-[46%] z-50 -translate-y-1/2 border-0 bg-transparent p-0 text-[64px] font-thin leading-none text-white transition hover:text-white/70"
          >
            ›
          </button>

          <div className="relative isolate z-20 flex min-h-0 flex-1 flex-col justify-start -mt-[160px]">
            <div className="pointer-events-auto absolute bottom-[-170px] left-[3%] right-[3%] h-[820px] overflow-hidden z-30">
              {cards.map((card) => {
                const product = products[card.productIndex];
                const isActive = card.slot === 0;

                return (
                  <button
                    key={product.id}
                    type="button"
                    aria-label={`View ${product.name}`}
                    onClick={() => jumpTo(card.productIndex)}
                    className={`absolute bottom-0 left-1/2 origin-bottom transform-gpu cursor-pointer border-0 bg-transparent p-0 transition-all duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      SLOT_CLASSES[card.slot]
                    }`}
                  >
                    <div className="relative flex h-[450px] w-full flex-col items-center justify-end">
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`absolute left-1/2 z-[70] -translate-x-1/2 object-contain drop-shadow-md duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
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

          {/* Action Button */}
          <div className="absolute bottom-[90px] left-1/2 z-50 -translate-x-1/2">
            <button
                type="button"
                className="relative rounded-full bg-[#720062] px-[50px] py-[12px] text-[18px] font-bold text-white transition shadow-[4px_6px_10px_rgba(44,14,40,4)]"
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