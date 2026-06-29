import React from "react";
import locationPin from "../images/location_pin_white.svg";
import store1 from "../images/store-1.png";
import store2 from "../images/store-2.png";
import store3 from "../images/store-3.png";
import store4 from "../images/store-4.png";
import store5 from "../images/store-5.png";
import store6 from "../images/store-6.png";
import store7 from "../images/store-7.png";

export default function FindStore() {
  return (
    <section className="bg-[#cc4aa7] py-[64px] text-center"> 
      <div className="mx-auto max-w-[1350px] px-8">
        
        {/* Header matched perfectly to font color and horizontal flow */}
        <h2 className="mx-auto max-w-[1100px] text-[22px] font-semibold leading-tight text-[#7b0769]">
          Find the Dorot Gardens range at the freezer aisle at your local grocery, including these amazing stores:
        </h2>

        {/* Unified 4-Column Grid Layout */}
        <div className="mx-auto mt-[30px] grid max-w-[1150px] grid-cols-4 items-center justify-items-center gap-x-[40px] gap-y-[35px]">
          {/* Top Row: 4 wide brand slots */}
          <img src={store1} alt="Walmart" className="h-[48px] w-auto object-contain" />
          <img src={store2} alt="Whole Foods Market" className="h-[44px] w-auto object-contain" />
          <img src={store3} alt="Wegmans" className="h-[52px] w-auto object-contain" />
          <img src={store4} alt="Albertsons" className="h-[46px] w-auto object-contain" />
          
          {/* Bottom Row: 3 slots + 1 empty space at the end to force left alignment */}
          <img src={store5} alt="ShopRite" className="h-[60px] w-auto object-contain" />
          <img src={store6} alt="Wild Fork" className="h-[38px] w-auto object-contain" />
          <img src={store7} alt="H-E-B" className="h-[36px] w-auto object-contain" /> 
          
          {/* Explicit empty layout track to offset the 4th item spot */}
          <div></div>
        </div>

        {/* Properly styled deep-plum action button */}
        <button
          className="mt-[30px] inline-flex h-[52px] w-[330px] items-center justify-center gap-2 rounded-full bg-[#720062] text-[18px] font-bold text-white shadow-[0_12px_20px_rgba(0,0,0,0.45)] transition-all duration-150 active:scale-[0.98]"
          style={{ fontFamily: "gelica, serif" }}
        >
          <img 
            src={locationPin}
            alt=""
            className="h-[18px] w-[18px]"
          /> 
          <span>Find The Nearest Store</span>
        </button>
      </div>
    </section>
  );
}