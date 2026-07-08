import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

import logo from "../images/Dorot_Logo_White.png";
import locationPin from "../images/location_pin_white.svg";
import searchIcon from "../images/trace.svg";
import featuredRecipe from "../images/recipe-5.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("mobile-menu-open");

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove("mobile-menu-open");
    };
  }, [open]);

  return (
    <header
        className={`sticky left-0 top-0 z-50 w-full bg-[#720062] transition-shadow duration-300 ${
          isScrolled
            ? "shadow-[4px_6px_10px_rgba(44,14,40,0.75)]"
            : "shadow-none"
        }`}
    >
      <style>{`
        .mobile-menu-open .hero-prev,
        .mobile-menu-open .hero-next {
          display: none !important;
        }

        .mobile-menu-drawer {
          position: fixed;
          top: 64px;
          bottom: 0;
          left: 0;
          z-index: 60;
          width: 82vw;
          overflow-y: auto;
          overscroll-behavior: contain;
          scrollbar-width: none;
          background: #cc4aa7;
        }

        .mobile-menu-drawer::-webkit-scrollbar {
          display: none;
        }

        .mobile-menu-link {
          min-height: 72px;
          border-bottom: 1px solid rgba(114, 0, 98, 0.78);
        }

        .mobile-menu-featured {
          width: min(405px, calc(100% - 32px));
          min-height: 458px;
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .mobile-menu-drawer {
            top: 100px;
          }

          .mobile-menu-link {
            min-height: 48px;
          }

          .mobile-menu-featured {
            width: min(275px, calc(100% - 20px));
            min-height: 310px;
          }
        }

        @media (max-width: 1023px) and (max-height: 700px) and (orientation: landscape) {
          .mobile-menu-link {
            min-height: 48px;
            padding-right: 28px;
            padding-left: 28px;
            font-size: 16px;
          }

          .mobile-menu-featured {
            width: min(275px, calc(100% - 20px));
            min-height: 310px;
          }

          .mobile-menu-featured > div:last-child {
            min-height: 310px;
            padding: 32px 20px;
          }

          .mobile-menu-featured p,
          .mobile-menu-featured span {
            font-size: 16px;
          }

          .mobile-menu-featured h2 {
            margin-top: 24px;
            font-size: 20px;
          }
        }
      `}</style>
      <div className="relative mx-auto flex h-[64px] max-w-[1440px] items-center justify-between px-4 md:h-[100px] md:px-[20px] lg:px-[36px] xl:px-[70px]">
        <Link
          to="/"
          className="absolute left-[48%] -translate-x-1/2 lg:static lg:translate-x-0"
        >
          <img
            src={logo}
            alt="Dorot Gardens"
            className="relative -top-[2px] w-[72px] shrink-0 md:w-[120px] lg:-top-[8px] lg:w-[115px]"
          />
        </Link>

        <nav className="hidden flex-1 relative -top-[6px] items-center font-goldplay text-[16px] font-semibold text-white lg:flex">
          {/* Center menu links */}
          <div className="absolute left-1/2 flex -translate-x-1/2 lg:-translate-x-[52%] xl:-translate-x-[60%] items-center gap-[34px] xl:gap-[37px]">
            <Link to="/products" className="whitespace-nowrap">
              Products
            </Link>
            <button type="button">Recipes</button>
            <button type="button">Blog</button>
            <Link to="/about-us" className="whitespace-nowrap">
              About Dorot Gardens
            </Link>
          </div>

          {/* Desktop freezer aisle button */}
          <button
            type="button"
            className="ml-auto mr-[55px] hidden xl:flex items-center gap-[5px] whitespace-nowrap"
          >
            <img src={locationPin} alt="" className="h-[20px] w-[20px]" />
            <span>Find us at the freezer aisle</span>
          </button>

          {/* Search */}
          <button type="button" className="hidden xl:block">
            <img
              src={searchIcon}
              alt="Search"
              className="h-[22px] w-[22px] brightness-0 invert"
            />
          </button>
        </nav>

        <button type="button" className="ml-auto hidden lg:block xl:hidden" aria-label="Search">
          <img
            src={searchIcon}
            alt=""
            className="h-[22px] w-[22px] brightness-0 invert"
          />
        </button>

        <div className="flex w-full items-center justify-between lg:hidden">
          <button
            type="button"
            className={`relative flex h-[44px] w-[44px] items-center justify-center ${
              open ? "rounded-full border-2 border-white" : "flex-col gap-[4px]"
            }`}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <>
                <span className="absolute h-[2px] w-[25px] rotate-45 rounded bg-white" />
                <span className="absolute h-[2px] w-[25px] -rotate-45 rounded bg-white" />
              </>
            ) : (
              <>
                <span className="h-[2px] w-[24px] rounded bg-white" />
                <span className="h-[2px] w-[24px] rounded bg-white" />
                <span className="h-[2px] w-[24px] rounded bg-white" />
              </>
            )}
          </button>

          <button type="button" aria-label="Search">
            <img
              src={searchIcon}
              alt=""
              className="h-[20px] w-[20px] brightness-0 invert md:h-[25px] md:w-[25px]"
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu-drawer font-goldplay text-white lg:hidden">
          <nav className="px-4 pt-7 md:px-3 md:pt-5" aria-label="Mobile navigation">
            {[
              { label: "Products", href: "/products" },
              { label: "Recipes", href: "/recipes" },
              { label: "Blog", href: "/blog" },
              { label: "About Dorot Gardens", href: "/about-us" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setOpen(false)}
                className="mobile-menu-link flex items-center px-[30px] text-[22px] font-semibold md:px-[28px] md:text-[16px]"
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <article
            className="mobile-menu-featured relative mx-4 mt-[100px] overflow-hidden rounded-[10px] bg-cover bg-center md:mx-[10px] md:mt-[110px]"
            style={{ backgroundImage: `url(${featuredRecipe})` }}
          >
            <div className="absolute inset-0 bg-[#720062]/55" />
            <div className="relative z-10 flex h-full min-h-[458px] flex-col px-[30px] py-[50px] md:min-h-[310px] md:px-[20px] md:py-[32px]">
              <p className="text-[22px] font-normal md:text-[16px]">Featured Recipe</p>
              <h2 className="mt-[36px] text-[30px] font-bold [font-family:'gelica',serif] md:mt-[24px] md:text-[20px]">
                Egg Salad
              </h2>
              <span className="mt-auto text-[22px] font-normal underline underline-offset-2 md:text-[16px]">
                Click here for the recipe
              </span>
            </div>
          </article>
          </div>
      )}
    </header>
  );
}
