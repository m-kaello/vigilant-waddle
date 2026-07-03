import React from "react";

import logo from "../images/Dorot_Logo_White.png";
import locationPin from "../images/location_pin_white.svg";
import email from "../images/email.svg";
import cookies from "../images/cookies.svg";

import fb from "../images/footer-1.svg";
import ig from "../images/footer-2.svg";
import tiktok from "../images/footer-3.svg";
import youtube from "../images/footer-4.svg";

const footerResponsiveStyles = `
  @media (max-width: 1279px) {
    .dg-footer-layout {
      display: grid;
      max-width: none;
      grid-template-columns: minmax(0, 1fr);
      grid-template-areas: "brand" "links" "social" "contact";
      gap: 0;
      padding: 32px clamp(24px, 5.5vw, 52px) 38px;
    }
    .dg-footer-brand { grid-area: brand; }
    .dg-footer-details { display: contents; }
    .dg-footer-links { grid-area: links; margin-top: 34px; }
    .dg-footer-social { grid-area: social; margin-top: 52px; padding-top: 0; }
    .dg-footer-contact { grid-area: contact; margin-top: 46px; }
    .dg-footer-contact .dg-footer-heading { margin-top: 0; }
    .dg-footer-logo { width: clamp(180px, 30vw, 230px); }
    .dg-footer-intro { max-width: 720px; }
    .dg-footer-link-grid { max-width: 560px; }
    .dg-footer-social-copy { max-width: 560px; }
    .dg-footer-contact-list { max-width: 600px; font-weight: 400; }
  }

  @media (min-width: 768px) and (max-width: 1279px) and (orientation: portrait) {
    .dg-footer-layout { padding: 32px 34px 20px; }
    .dg-footer-logo { width: 130px; }
    .dg-footer-links { margin-top: 42px; }
    .dg-footer-social { margin-top: 59px; }
    .dg-footer-contact { margin-top: 52px; }
    .dg-footer-links .dg-footer-heading { display: none; }
    .dg-footer-link-grid { margin-top: 0; }
  }

  @media (min-width: 768px) and (max-width: 1279px) and (orientation: landscape) {
    .dg-footer-layout {
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      grid-template-areas: "brand social" "links contact";
      column-gap: clamp(42px, 10vw, 110px);
      row-gap: 18px;
      padding-bottom: 30px;
      padding-top: clamp(30px, 6vh, 56px);
    }
    .dg-footer-links, .dg-footer-social { margin-top: 0; }
    .dg-footer-contact { margin-top: -20px; }
    .dg-footer-logo { width: clamp(170px, 22vw, 230px); }
    .dg-footer-intro { max-width: 420px; margin-top: 22px; }
    .dg-footer-link-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-template-rows: repeat(2, auto);
      grid-auto-flow: column;
      column-gap: clamp(22px, 4.3vw, 44px);
      margin-top: 24px;
    }
    .dg-footer-social-copy { margin-top: 20px; }
    .dg-footer-social-icons { margin-top: 24px; }
    .dg-footer-contact-list { margin-top: 24px; }
  }

  @media (max-width: 767px) and (orientation: portrait) {
    .dg-footer-layout {
      padding: clamp(28px, 6vw, 38px) clamp(24px, 5.7vw, 36px) 52px;
    }
    .dg-footer-logo { width: clamp(180px, 30vw, 190px); }
    .dg-footer-intro {
      margin-top: 24px;
      font-size: clamp(17px, 3.8vw, 24px);
      line-height: 1.48;
    }
    .dg-footer-links { margin-top: clamp(38px, 9vw, 68px); }
    .dg-footer-links .dg-footer-heading { display: none; }
    .dg-footer-link-grid {
      margin-top: 0;
      column-gap: 30px;
      row-gap: clamp(20px, 5vw, 32px);
      font-size: clamp(17px, 3.8vw, 24px);
    }
    .dg-footer-social { margin-top: clamp(48px, 11vw, 72px); }
    .dg-footer-contact { margin-top: clamp(52px, 12vw, 78px); }
    .dg-footer-heading { font-size: clamp(21px, 4.4vw, 28px); }
    .dg-footer-social-copy {
      margin-top: 24px;
      font-size: clamp(17px, 3.8vw, 24px);
    }
    .dg-footer-social-icons {
      flex-wrap: nowrap;
      justify-content: flex-start;
      gap: clamp(18px, 6.5vw, 42px);
      margin-top: 28px;
    }
    .dg-footer-social-icon {
      width: clamp(52px, 15vw, 96px);
      height: clamp(52px, 15vw, 96px);
    }
    .dg-footer-contact-list {
      margin-top: 28px;
      font-size: clamp(16px, 3.4vw, 22px);
    }
    .dg-footer-bottom { padding-top: 22px; padding-bottom: 22px; }
  }

  @media (max-width: 767px) and (orientation: landscape) {
    .dg-footer-layout {
      grid-template-columns: minmax(0, 1fr);
      grid-template-areas: "brand" "links" "social" "contact";
      row-gap: 0;
      padding: 30px 32px 34px;
    }
    .dg-footer-logo { width: 190px; }
    .dg-footer-intro { max-width: none; margin-top: 22px; }
    .dg-footer-links { margin-top: 34px; }
    .dg-footer-links .dg-footer-heading { display: none; }
    .dg-footer-link-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-template-rows: none;
      grid-auto-flow: row;
      column-gap: 22px;
      margin-top: 0;
    }
    .dg-footer-social { margin-top: 48px; }
    .dg-footer-contact { margin-top: 44px; }
    .dg-footer-heading { font-size: 18px; }
    .dg-footer-intro, .dg-footer-link-grid, .dg-footer-social-copy {
      font-size: 14px;
    }
    .dg-footer-social-icon { width: 44px; height: 44px; }
  }

  @media (max-width: 1279px) and (orientation: portrait) {
    .dg-footer-bottom {
      padding: 28px clamp(24px, 5.5vw, 42px) 32px;
      text-align: left;
    }
    .dg-footer-bottom > div {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 38px;
    }
  }
`;

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="relative bg-[#760063] text-white"
      style={{ fontFamily: "Goldplay, sans-serif" }}
    >
      <style>{footerResponsiveStyles}</style>
      <div className="dg-footer-layout mx-auto grid max-w-[1920px] grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.15fr_1.25fr_1.15fr] gap-12 lg:gap-x-12 px-6 sm:px-12 lg:px-[90px] pb-[40px] pt-[40px]">
        
        {/* Branding Column */}
        <div className="dg-footer-brand flex flex-col items-start">
          <img src={logo} alt="Dorot Gardens" className="dg-footer-logo w-[180px] sm:w-[230px] object-contain" />

          <p className="dg-footer-intro mt-5 sm:mt-[28px] max-w-[360px] text-[15px] sm:text-[16px] font-bold leading-[1.45] text-white/90">
            Our flash-frozen pre-portioned garlic, onions and herb packs give
            you all of the flavor of fresh ingredients, but without the pesky
            chopping and measuring.
          </p>
        </div>

        {/* Quick Links & Contact Details */}
        <div className="dg-footer-details pt-0 lg:pt-[8px]">
          <div className="dg-footer-links">
            <h3 className="dg-footer-heading text-[18px] sm:text-[20px] font-extrabold">Quick Links</h3>

            <div className="dg-footer-link-grid mt-5 sm:mt-[36px] grid grid-cols-2 gap-x-6 sm:gap-x-[95px] gap-y-[16px] text-[15px] sm:text-[16px] font-bold">
              <span className="hover:underline cursor-pointer">Products</span>
              <span className="hover:underline cursor-pointer">FAQs</span>
              <span className="hover:underline cursor-pointer">Recipes</span>
              <span className="hover:underline cursor-pointer">Our Story</span>
              <span className="hover:underline cursor-pointer">Blog</span>
              <span className="hover:underline cursor-pointer">Where To Find Us</span>
            </div>
          </div>

          <div className="dg-footer-contact">
            <h3 className="dg-footer-heading mt-8 sm:mt-[45px] text-[18px] sm:text-[20px] font-extrabold">Contact Us</h3>

            <div className="dg-footer-contact-list mt-5 sm:mt-[32px] space-y-4 sm:space-y-[28px] text-[14px] sm:text-[15px] font-bold">
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
        </div>

        {/* Social Callout Column */}
        <div className="dg-footer-social pt-0 lg:pt-[8px] md:col-span-2 lg:col-span-1">
          <h3 className="dg-footer-heading text-[18px] sm:text-[20px] font-extrabold">Let's Get Social</h3>

          <p className="dg-footer-social-copy mt-4 sm:mt-[30px] max-w-[560px] text-[15px] sm:text-[16px] font-bold leading-[1.45] text-white/90">
            Find inspiring recipes, see exciting updates and share your dishes
            with us!
          </p>

          <div className="dg-footer-social-icons mt-5 sm:mt-[28px] flex flex-wrap items-center gap-4 sm:gap-[18px]">
            <img src={fb} alt="Facebook" className="dg-footer-social-icon h-[44px] w-[44px] sm:h-[52px] sm:w-[52px] cursor-pointer hover:scale-105 transition-transform" />
            <img src={ig} alt="Instagram" className="dg-footer-social-icon h-[44px] w-[44px] sm:h-[52px] sm:w-[52px] cursor-pointer hover:scale-105 transition-transform" />
            <img src={tiktok} alt="TikTok" className="dg-footer-social-icon h-[44px] w-[44px] sm:h-[52px] sm:w-[52px] cursor-pointer hover:scale-105 transition-transform" />
            <img src={youtube} alt="YouTube" className="dg-footer-social-icon h-[44px] w-[44px] sm:h-[52px] sm:w-[52px] cursor-pointer hover:scale-105 transition-transform" />
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="dg-footer-bottom border-t-[3px] border-[#ae3676] py-5 text-center px-4">
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
