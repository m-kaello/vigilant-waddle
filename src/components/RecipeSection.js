import React from "react";

import recipe1 from "../images/recipe-1.png";
import recipe2 from "../images/recipe-2.png";
import recipe3 from "../images/recipe-3.png";
import recipe4 from "../images/recipe-4.png";
import recipe5 from "../images/recipe-5.png";
import recipe6 from "../images/recipe-6.png";

const recipes = [
  { image: recipe1, title: "Family Meals" },
  { image: recipe2, title: "Hearty Soups" },
  { image: recipe3, title: "Chicken" },
  { image: recipe4, title: "Fish" },
  { image: recipe5, title: "Vegetarian" },
  { image: recipe6, title: "Dips" },
];

function RecipeCard({ recipe }) {
  return (
    <div className="relative group overflow-hidden aspect-square w-full shadow-2xl flex flex-col justify-end">
      {/* Card Image Layer */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto mb-9 flex h-[48px] w-[85%] max-w-[270px] items-center justify-center rounded-full bg-[#720062] shadow-[0_6px_14px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:-translate-y-1">
        <span
          className="text-lg md:text-[19px] font-bold text-white tracking-wide"
          style={{ fontFamily: "gelica, serif" }}
        >
          {recipe.title}
        </span>
      </div>
    </div>
  );
}

export default function RecipeSection() {
  return (
    <section className="recipe-section bg-[#bd7ab3] py-20 text-white select-none">
      <style>{`
        @media (max-width: 767px) and (orientation: portrait) {
          .recipe-section {
            padding: 18px 0 42px;
          }

          .recipe-section-inner {
            padding-right: 32px;
            padding-left: 32px;
            text-align: left;
          }

          .recipe-section-tagline {
            max-width: none;
            margin-right: 0;
            margin-left: 0;
            font-size: 22px;
            line-height: 1.45;
          }

          .recipe-section-title {
            max-width: none;
            margin: 20px 0 82px;
            font-size: 28px;
            line-height: 1.12;
          }

          .recipe-mobile-grid {
            width: 100%;
            max-width: 442px;
            column-gap: 11px;
            row-gap: 20px;
          }

          .recipe-mobile-pill {
            width: 88%;
            height: 32px;
            margin-bottom: 20px;
          }

          .recipe-mobile-pill span {
            font-size: 19px;
            line-height: 1;
          }
        }
      `}</style>
      <div className="recipe-section-inner mx-auto max-w-[1320px] px-8 text-center">
        <p className="recipe-section-tagline text-lg md:text-[22px] font-extrabold tracking-wide text-white mb-4 leading-tight">
          Explore our recipes and discover your new favorite dishes & flavor
          combinations!
        </p>

        <h2
          className="recipe-section-title mx-auto mt-5 mb-16 max-w-[780px] text-4xl md:text-[46px] font-black tracking-wide leading-[1.1] drop-shadow-sm"
          style={{ fontFamily: "gelica, serif" }}
        >
          <span className="md:hidden">
            <span className="block">Find Inspiration</span>
            <span className="block">For Your Next</span>
            <span className="block">Culinary Masterpiece</span>
          </span>
          <span className="hidden md:inline">
            Find Inspiration For Your Next Culinary Masterpiece
          </span>
        </h2>

        {/* ================= Mobile (<768px) ================= */}
        <div className="recipe-mobile-grid grid grid-cols-2 gap-x-[14px] gap-y-[30px] max-w-[490px] mx-auto md:hidden">
          {recipes.map((recipe, index) => (
            <div key={index} className="relative group overflow-hidden aspect-square w-full shadow-2xl flex flex-col justify-end">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

              <div className="recipe-mobile-pill relative z-10 mx-auto mb-6 flex h-[42px] w-[88%] items-center justify-center rounded-full bg-[#720062] shadow-[0_6px_14px_rgba(0,0,0,0.35)]">
                <span
                  className="text-[22px] font-bold text-white tracking-wide"
                  style={{ fontFamily: "gelica, serif" }}
                >
                  {recipe.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ================= Tablet (768px–1023px) ================= */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-x-3 gap-y-6 max-w-[660px] mx-auto">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </div>

        {/* ================= Desktop (1024px+) ================= */}
        <div className="hidden lg:grid grid-cols-3 gap-x-[28px] gap-y-[32px] max-w-[1240px] mx-auto justify-items-center">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </div>

        <div className="w-full flex justify-center mt-16">
          {/* Mobile Button */}
          <button
            className="h-[50px] w-[280px] max-w-[82vw] rounded-full bg-[#720062] text-[19px] font-bold text-white shadow-[0_8px_16px_rgba(0,0,0,0.3)] hover:bg-[#5a1869] active:scale-95 transition-all tracking-wide md:hidden"
            style={{ fontFamily: "gelica, serif" }}
          >
            Browse More Recipes
          </button>

          {/* Tablet Button */}
          <button
            className="hidden md:block lg:hidden h-[46px] w-[360px] rounded-full bg-[#720062] text-[19px] font-bold text-white shadow-[0_8px_16px_rgba(0,0,0,0.3)] hover:bg-[#5a1869] active:scale-95 transition-all tracking-wide"
            style={{ fontFamily: "gelica, serif" }}
          >
            Browse More Recipes
          </button>

          {/* Desktop Button */}
          <button
            className="hidden lg:block h-[56px] w-full max-w-[290px] rounded-full bg-[#720062] text-[19px] font-bold text-white shadow-[0_8px_16px_rgba(0,0,0,0.3)] hover:bg-[#5a1869] active:scale-95 transition-all tracking-wide"
            style={{ fontFamily: "gelica, serif" }}
          >
            Browse More Recipes
          </button>
        </div>
      </div>
    </section>
  );
}
