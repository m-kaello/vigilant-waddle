import React, { useState, useCallback, useEffect, useRef } from "react";

import patternTop from "../images/purple_pattern_top.png";
import patternBottom from "../images/purple_pattern_bottom.png";
import product1 from "../images/product-1.png";
import product2 from "../images/product-2.png";
import product3 from "../images/product-3.png";
import product4 from "../images/product-4.png";
import product5 from "../images/product-5.png";
import product6 from "../images/product-6.png";
import product7 from "../images/product-7.png";
import product8 from "../images/product-8.png";

const products = [
  {
    id: 1,
    image: product1,
    name: "Garlic Trays",
    buttonColor: "#c04e9d",
    description:
      "The unique flavor of garlic is a kitchen staple, seen in many dishes - and now you can get that flavor with none of the prep work. Anytime you need a clove of garlic, just pop, drop, done®!",
  },
  {
    id: 2,
    image: product2,
    name: "Ginger",
    buttonColor: "#5ebbb0",
    description:
      "Ginger tastes great, but it can be hard work to cook with... There's often lots of peeling, chopping, and crushing involved - unless you use a Dorot Gardens Ginger cube, that is!",
  },
  {
    id: 3,
    image: product3,
    name: "Basil",
    buttonColor: "#d0393a",
    description:
      "Ah, the king of herbs! You can add basil to almost any dish and take the flavor to the next level. Fish, pasta, soups and more can all benefit from having a basil cube or two in the mix!",
  },
  {
    id: 4,
    image: product4,
    name: "Cilantro",
    buttonColor: "#ea7525",
    description:
      "Cilantro is often found adding an extra background note of flavor to many of the foods we enjoy today. It's the final finishing touch in many breads, sweets, pickles and more.",
  },
  {
    id: 5,
    image: product5,
    name: "Sautéed Glazed Onions",
    buttonColor: "#e46287",
    description:
      "Sauteed onions give an instantly-recognizable sweetness to any recipe that calls for them - and with Dorot Gardens you can get that sweetness with none of the prep time (or tears)!",
  },
  {
    id: 6,
    image: product6,
    name: "Turmeric Cubes",
    buttonColor: "#3a9dc9",
    description:
      "You'll find Turmeric called for in recipes for many different types of dishes, as well as in sauces and marinades - and even better, some people believe that it has health benefits too!",
  },
  {
    id: 7,
    image: product7,
    name: "Parsley Trays",
    buttonColor: "#81ac40",
    description:
      "Parsley - the most abundant herb in the world, no less - is high in nutrition, and brings a unique taste to any dish where it is involved.",
  },
  {
    id: 8,
    image: product8,
    name: "Dill Trays",
    buttonColor: "#ecab1f",
    description:
      "Dill is another member of the parsley family. As a result the two are often used in combination, and found together as part of many recipes - especially for vegetables and meats.",
  },
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
  0: "translate-x-[-50%] translate-y-[-100px] w-[370px] z-[60] opacity-100",
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
        className="relative isolate flex min-h-[980px] w-full flex-col overflow-hidden bg-[#ca95c3] font-bold"
      >
        {/* Background patterns */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <img
            src={patternTop}
            alt=""
            aria-hidden="true"
            className="absolute right-0 top-0 h-auto w-[32%] min-w-[320px] max-w-[520px] object-contain opacity-40"
          />

          <img
            src={patternBottom}
            alt=""
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-auto w-[32%] min-w-[320px] max-w-[520px] object-contain opacity-40"
          />
        </div>

        {/* Content layer */}
        <div className="relative z-20 flex min-h-[980px] w-full flex-col overflow-hidden">
          <div className="relative z-50 shrink-0 pb-[16px] pt-[40px] text-center">
            <p className="m-0 text-[24px] font-bold text-[#720062]">
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
            className="absolute left-[30px] top-[42%] z-50 -translate-y-1/2 border-0 bg-transparent p-0 text-[64px] font-thin leading-none text-white transition hover:text-white/70"
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
            className="absolute right-[30px] top-[42%] z-50 -translate-y-1/2 border-0 bg-transparent p-0 text-[64px] font-thin leading-none text-white transition hover:text-white/70"
          >
            ›
          </button>

          <div className="relative isolate z-20 flex min-h-0 flex-1 flex-col justify-end">
            <div className="pointer-events-auto absolute bottom-[-90px] left-0 h-[760px] w-full">
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
                    <div className="relative flex h-[760px] w-full flex-col items-center justify-end">
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`absolute left-1/2 z-[70] -translate-x-1/2 object-contain drop-shadow-md duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isActive
                            ? "bottom-[290px] h-[420px] w-[420px] transition-[height,width]"
                            : "bottom-[240px] h-[370px] w-[370px] transition-[height,width]"
                        }`}
                      />

                      <div
                        className={`relative z-[40] h-[600px] w-[390px] overflow-hidden rounded-[1.5rem] bg-[#720062] px-[35px] pt-[235px] text-left text-white shadow-[0_8px_40px_rgba(0,0,0,0.25)] ${
                          isActive ? "opacity-100" : "hidden"
                        }`}
                      >
                        <h3 className="mb-[10px] mt-5 text-[38px] font-semibold leading-[1]">
                          {product.name}
                        </h3>

                        <p className="mb-[15px] mt-0 text-[20px] font-semibold leading-[1.65] opacity-90">
                          {product.description}
                        </p>

                        <div className="absolute bottom-[17px] left-1/2 -translate-x-1/2">
                          <span
                            className="inline-block whitespace-nowrap rounded-full px-[54px] py-[6px] text-[19px] font-bold text-white transition shadow-[4px_6px_10px_rgba(44,14,40,4)]"
                            style={{ 
                              backgroundColor: product.buttonColor,
                              fontFamily: '"gelica", serif', 
                            }}
                          >
                            Learn More
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative z-30 mt-auto flex shrink-0 justify-center pt-[20px] pb-[60px]">
            <button
              type="button"
              className="relative top-[28px] rounded-full bg-[#720062] px-[48px] py-[18px] text-[18px] font-normal text-white transition hover:bg-[#4a1a50] [font-family:'gelica',serif] shadow-[4px_6px_10px_rgba(44,14,40,4)]"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>
    </>
  );
}