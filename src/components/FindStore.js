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
    <section className="bg-[#cc4aa7] pb-[31px] pt-[48px] text-center min-[500px]:max-md:portrait:pb-[29px] min-[500px]:max-md:portrait:pt-[43px] md:portrait:pb-[30px] md:portrait:pt-[64px] lg:landscape:pb-[38px] lg:landscape:pt-[64px] xl:py-[64px]">
      <style>{`
        @media (min-width: 1280px) {
          .find-store-logo-grid {
            max-width: 1280px;
            column-gap: 32px;
          }

          .find-store-logo {
            width: min(100%, 300px) !important;
            height: auto !important;
          }
        }
      `}</style>
      <div className="mx-auto max-w-[1350px] px-[30px] xl:px-8">
        <h2 className="mx-auto max-w-[1100px] text-left text-[18px] font-semibold leading-[24px] text-[#7b0769] landscape:text-center min-[500px]:max-md:portrait:text-[16px] md:text-center md:text-[22px] md:leading-[26px] xl:leading-tight">
          Find the Dorot Gardens range at the freezer aisle at your local grocery, including these amazing stores:
        </h2>

        <div className="find-store-logo-grid mx-auto mt-[39px] grid max-w-[330px] grid-cols-3 items-center justify-items-center gap-x-[30px] gap-y-[14px] landscape:mt-[35px] landscape:max-w-[632px] landscape:gap-x-[49px] landscape:gap-y-[14px] min-[500px]:max-md:portrait:mx-0 min-[500px]:max-md:portrait:mt-[38px] min-[500px]:max-md:portrait:max-w-[362px] min-[500px]:max-md:portrait:gap-x-[16px] min-[500px]:max-md:portrait:gap-y-[12px] md:portrait:mt-[33px] md:portrait:max-w-[632px] md:portrait:gap-x-[16px] md:portrait:gap-y-[14px] lg:landscape:mt-[30px] lg:landscape:max-w-[950px] lg:landscape:gap-x-[58px] lg:landscape:gap-y-[29px] xl:mt-[30px] xl:max-w-[1150px] xl:grid-cols-4 xl:gap-x-[40px] xl:gap-y-[35px]">
          <img src={store1} alt="Walmart" className="find-store-logo h-auto w-[90px] object-contain landscape:w-[178px] min-[500px]:max-md:portrait:w-[110px] md:portrait:w-[200px] lg:landscape:w-[278px] xl:h-[48px] xl:w-auto" />
          <img src={store2} alt="Whole Foods Market" className="find-store-logo h-auto w-[90px] object-contain landscape:w-[178px] min-[500px]:max-md:portrait:w-[110px] md:portrait:w-[200px] lg:landscape:w-[278px] xl:h-[44px] xl:w-auto" />
          <img src={store3} alt="Wegmans" className="find-store-logo h-auto w-[90px] object-contain landscape:w-[178px] min-[500px]:max-md:portrait:w-[110px] md:portrait:w-[200px] lg:landscape:w-[278px] xl:h-[52px] xl:w-auto" />
          <img src={store4} alt="Albertsons" className="find-store-logo h-auto w-[90px] object-contain landscape:w-[178px] min-[500px]:max-md:portrait:w-[110px] md:portrait:w-[200px] lg:landscape:w-[278px] xl:h-[46px] xl:w-auto" />
          <img src={store5} alt="ShopRite" className="find-store-logo h-auto w-[90px] object-contain landscape:w-[178px] min-[500px]:max-md:portrait:w-[110px] md:portrait:w-[200px] lg:landscape:w-[278px] xl:h-[60px] xl:w-auto" />
          <img src={store6} alt="Wild Fork" className="find-store-logo h-auto w-[90px] object-contain landscape:w-[178px] min-[500px]:max-md:portrait:w-[110px] md:portrait:w-[200px] lg:landscape:w-[278px] xl:h-[38px] xl:w-auto" />
          <img src={store7} alt="H-E-B" className="find-store-logo h-auto w-[90px] object-contain landscape:w-[178px] min-[500px]:max-md:portrait:w-[110px] md:portrait:w-[200px] lg:landscape:w-[278px] xl:h-[36px] xl:w-auto" />
        </div>

        <button
          className="mt-[49px] inline-flex h-[50px] w-[318px] max-w-full items-center justify-center gap-2 rounded-full bg-[#720062] text-[18px] font-bold text-white shadow-[0_12px_20px_rgba(0,0,0,0.45)] transition-all duration-150 active:scale-[0.98] landscape:mt-[53px] min-[500px]:max-md:portrait:mt-[48px] md:portrait:mt-[60px] lg:landscape:mt-[45px] xl:mt-[30px] xl:h-[52px] xl:w-[330px]"
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
