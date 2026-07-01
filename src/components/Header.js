import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

import logo from "../images/Dorot_Logo_White.png";
import locationPin from "../images/location_pin_white.svg";
import searchIcon from "../images/trace.svg";

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

  return (
    <header
        className={`sticky left-0 top-0 z-50 w-full bg-[#720062] transition-shadow duration-300 ${
          isScrolled
            ? "shadow-[4px_6px_10px_rgba(44,14,40,0.75)]"
            : "shadow-none"
        }`}
    >
      <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-6 md:h-[100px] md:px-[70px]">
        <Link to="/">
          <img
            src={logo}
            alt="Dorot Gardens"
            className="relative -top-[6px] w-[95px] shrink-0 md:w-[115px]"
          />
        </Link>

        <nav className="hidden relative -top-[6px] -left-[30px] items-center gap-[28px] font-goldplay text-[16px] font-semibold text-white lg:flex xl:gap-[37px]">
          <button type="button">Products</button>
          <button type="button">Recipes</button>
          <button type="button">Blog</button>
          <Link to="/about-us">About Dorot Gardens</Link>

          <button type="button" className="ml-[35px] flex items-center gap-[5px] xl:ml-[75px]">
            <img src={locationPin} alt="" className="h-[20px] w-[20px]" />
            <span>Find us at the freezer aisle</span>
          </button>

          <button type="button">
            <img
              src={searchIcon}
              alt="Search"
              className="translate-x-[15px] h-[22px] w-[22px] brightness-0 invert"
            />
          </button>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-[6px] lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="h-[3px] w-[30px] rounded bg-white" />
          <span className="h-[3px] w-[30px] rounded bg-white" />
          <span className="h-[3px] w-[30px] rounded bg-white" />
        </button>
      </div>

      {open && (
        <div className="bg-[#720062] px-6 pb-6 font-goldplay text-[17px] font-semibold text-white lg:hidden">
          <div className="flex flex-col gap-5">
            <button type="button" className="text-left">Products</button>
            <button type="button" className="text-left">Recipes</button>
            <button type="button" className="text-left">Blog</button>
            <Link to="/about-us" className="text-left">
              About Dorot Gardens
            </Link>

            <button type="button" className="flex items-center gap-2 text-left">
              <img src={locationPin} alt="" className="h-[20px] w-[20px]" />
              <span>Find us at the freezer aisle</span>
            </button>

            <button type="button" className="flex items-center gap-2 text-left">
              <img
                src={searchIcon}
                alt=""
                className="h-[22px] w-[22px] brightness-0 invert"
              />
              <span>Search</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}