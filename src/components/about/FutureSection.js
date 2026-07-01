import React from "react";

import futureImg from "../../images/about-future.png";

const FutureSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row overflow-hidden">
      {/* Image Column */}
      <div className="relative w-full h-[320px] md:h-[750px] md:w-1/2">
        <img
          src={futureImg}
          alt="Dorot Gardens frozen seasoning products in a freezer"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>

      {/* Text Column */}
      <div className="w-full md:w-1/2 bg-[#cc4aa7] flex flex-col justify-center px-8 py-8 md:px-12 lg:px-16 text-white">
        <div className="max-w-[560px] mx-auto md:mx-0 md:pl-2">
          <h2
            className="mb-6 text-3xl lg:text-[36px] font-bold leading-tight"
            style={{ fontFamily: '"gelica", serif' }}
          >
            Our plans for the years to come...
          </h2>

          <div
            className="space-y-8 text-[18px] lg:text-[20px] leading-tight font-semibold opacity-95"
            style={{ fontFamily: '"Goldplay", sans-serif' }}
          >
            <p>
              Dorot Gardens is committed to constant innovation through keeping
              a close eye on the market and listening to its needs. Our
              pre-portioned packaging is a great example of this.
            </p>

            <p>
              For us, in Dorot, this spells innovation, and this innovative
              spirit keeps on opening doors to new markets – as evidenced by the
              fact that in most parts of the world, Dorot Gardens’ frozen
              seasoning products introduce into the market a young, sometimes
              totally new, category. The combination of freshness and great
              taste together with the convenience and availability is a surefire
              win, which without doubt has proved itself, and will surely go on
              doing so in the future.
            </p>

            <p>
              The company is also positive that it owes its success to this
              commitment and the strict strategic planning that goes with that
              commitment. This is why we have invested in a future enlargement
              of our production facilities – such an expansion will allow us to
              increase production power even further, and realize the growth
              potential that we anticipate in the coming years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;