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

export default function RecipeSection() {
  return (
    <section className="bg-[#bd7ab3] py-20 text-white select-none">
      <div className="mx-auto max-w-[1320px] px-8 text-center">
        
        <p className="text-lg md:text-[22px] font-extrabold tracking-wide text-[white mb-4 leading-tight">
          Explore our recipes and discover your new favorite dishes & flavor combinations!
        </p>

        <h2
          className="mx-auto mt-5 max-w-[780px] text-4xl md:text-[46px] font-black tracking-wide leading-[1.1] drop-shadow-sm mb-16"
          style={{ fontFamily: "gelica, serif" }}
        >
          Find Inspiration For Your Next Culinary Masterpiece
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[28px] gap-y-[32px] max-w-[1240px] mx-auto">
          {recipes.map((recipe, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden h-[400px] w-[400px]shadow-2xl flex flex-col justify-end"
            >
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
          ))}
        </div>

        <div className="w-full flex justify-center mt-16">
          <button
            className="h-[56px] w-full max-w-[290px] rounded-full bg-[#720062] text-lg md:text-[19px] font-bold text-white shadow-[0_8px_16px_rgba(0,0,0,0.3)] hover:bg-[#5a1869] active:scale-98 transition-all tracking-wide"
            style={{ fontFamily: "gelica, serif" }}
          >
            Browse More Recipes
          </button>
        </div>

      </div>
    </section>
  );
}