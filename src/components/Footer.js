import React from "react";

import logo from "../images/Dorot_Logo_White.png";
import locationPin from "../images/location_pin_white.svg";
import email from "../images/email.svg";
import cookies from "../images/cookies.svg";

import fb from "../images/footer-1.svg";
import ig from "../images/footer-2.svg";
import tiktok from "../images/footer-3.svg";
import youtube from "../images/footer-4.svg";

export default function Footer() {
  return (
    <footer
      className="relative bg-[#760063] text-white"
      style={{ fontFamily: "Goldplay, sans-serif" }}
    >
      {/* 
        Responsive layout matrix: 
        - Default: 1 column, smaller vertical padding
        - md (Tablets): 2 columns
        - lg (Desktop): original 3 columns grid layout
      */}
      <div className="mx-auto grid max-w-[1920px] grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.15fr_1.25fr_1.15fr] gap-12 lg:gap-x-12 px-6 sm:px-12 lg:px-[90px] pb-[40px] pt-[40px]">
        
        {/* Branding Column */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="Dorot Gardens" className="w-[180px] sm:w-[230px] object-contain" />

          <p className="mt-5 sm:mt-[28px] max-w-[360px] text-[15px] sm:text-[16px] font-bold leading-[1.45] text-white/90">
            Our flash-frozen pre-portioned garlic, onions and herb packs give
            you all of the flavor of fresh ingredients, but without the pesky
            chopping and measuring.
          </p>
        </div>

        {/* Quick Links & Contact Details */}
        <div className="pt-0 lg:pt-[8px]">
          <h3 className="text-[18px] sm:text-[20px] font-extrabold">Quick Links</h3>

          <div className="mt-5 sm:mt-[36px] grid grid-cols-2 gap-x-6 sm:gap-x-[95px] gap-y-[16px] text-[15px] sm:text-[16px] font-bold">
            <span className="hover:underline cursor-pointer">Products</span>
            <span className="hover:underline cursor-pointer">FAQs</span>
            <span className="hover:underline cursor-pointer">Recipes</span>
            <span className="hover:underline cursor-pointer">Our Story</span>
            <span className="hover:underline cursor-pointer">Blog</span>
            <span className="hover:underline cursor-pointer">Where To Find Us</span>
          </div>

          <h3 className="mt-8 sm:mt-[45px] text-[18px] sm:text-[20px] font-extrabold">Contact Us</h3>

          <div className="mt-5 sm:mt-[32px] space-y-4 sm:space-y-[28px] text-[14px] sm:text-[15px] font-bold">
            <p className="flex items-start gap-3 sm:gap-[18px]">
              <img src={locationPin} alt="" className="mt-0.5 h-[18px] w-[18px] shrink-0" />
              <span>72 New Hook Rd., Bayonne, NJ 07002</span>
            </p>

            <p className="flex items-center gap-3 sm:gap-[18px]">
              <img src={email} alt="" className="h-[18px] w-[18px] shrink-0" />
              <span className="break-all">customersupport@dorotgardens.com</span>
            </p>
          </div>
        </div>

        {/* Social Callout Column */}
        <div className="pt-0 lg:pt-[8px] md:col-span-2 lg:col-span-1">
          <h3 className="text-[18px] sm:text-[20px] font-extrabold">Let's Get Social</h3>

          <p className="mt-4 sm:mt-[30px] max-w-[560px] text-[15px] sm:text-[16px] font-bold leading-[1.45] text-white/90">
            Find inspiring recipes, see exciting updates and share your dishes
            with us!
          </p>

          <div className="mt-5 sm:mt-[28px] flex flex-wrap items-center gap-4 sm:gap-[18px]">
            <img src={fb} alt="Facebook" className="h-[44px] w-[44px] sm:h-[52px] sm:w-[52px] cursor-pointer hover:scale-105 transition-transform" />
            <img src={ig} alt="Instagram" className="h-[44px] w-[44px] sm:h-[52px] sm:w-[52px] cursor-pointer hover:scale-105 transition-transform" />
            <img src={tiktok} alt="TikTok" className="h-[44px] w-[44px] sm:h-[52px] sm:w-[52px] cursor-pointer hover:scale-105 transition-transform" />
            <img src={youtube} alt="YouTube" className="h-[44px] w-[44px] sm:h-[52px] sm:w-[52px] cursor-pointer hover:scale-105 transition-transform" />
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t-[3px] border-[#ae3676] py-5 text-center px-4">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-[52px] text-[13px] sm:text-[14px] font-bold text-white/80">
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          <span className="hover:underline cursor-pointer">Terms of Use</span>
        </div>
      </div>

      {/* Cookie Settings button scaled for smaller viewports */}
      <div className="fixed bottom-[-5px] sm:bottom-[-10px] left-2 sm:left-[10px] z-[9999]">
        <button className="h-[55px] w-[55px] sm:h-[70px] sm:w-[70px] rounded-full border-0 bg-transparent p-0 transition-transform active:scale-95">
          <img src={cookies} alt="Cookie Settings" className="h-full w-full object-contain" />
        </button>
      </div>
    </footer>
  );
}