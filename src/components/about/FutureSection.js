import React from "react";

import futureImg from "../../images/about-future.png";

const FutureSection = () => {
  return (
    <section id="our-future" className="about-future w-full flex flex-col md:flex-row overflow-hidden">
      <style>{`
        @media (min-width: 768px) and (max-width: 1279px) {
          .about-future-image,
          .about-future-copy {
            width: 50%;
          }

          .about-future-copy {
            padding: 50px 44px;
          }

          .about-future-copy-inner {
            max-width: 580px;
            margin: 0;
            padding: 0;
          }

          .about-future-title {
            margin-bottom: 28px;
            font-size: 34px;
            line-height: 40px;
          }

          .about-future-paragraphs {
            gap: 28px;
            font-size: 18px;
            line-height: 24px;
          }
        }

        @media (min-width: 768px) and (max-width: 1279px) and (orientation: portrait) {
          .about-future {
            flex-direction: column;
          }

          .about-future-image,
          .about-future-copy {
            width: 100%;
          }

          .about-future-image {
            height: 600px;
          }

          .about-future-copy {
            padding: 40px 31px 72px;
          }

          .about-future-copy-inner {
            width: 100%;
            max-width: 580px;
            margin: 0 auto;
            padding: 0;
            text-align: left;
          }

          .about-future-title {
            margin-bottom: 40px;
            font-size: 28px;
            line-height: 32px;
          }

          .about-future-paragraphs {
            gap: 32px;
            font-size: 16px;
            line-height: 25px;
          }
        }

        @media (min-width: 768px) and (max-width: 1279px) and (orientation: landscape) {
          .about-future {
            min-height: 720px;
            flex-direction: row;
          }

          .about-future-image {
            height: auto;
          }

          .about-future-copy {
            padding: 48px;
          }

          .about-future-title {
            font-size: 36px;
            line-height: 42px;
          }

          .about-future-paragraphs {
            font-size: 20px;
            line-height: 25px;
          }
        }

        @media (max-width: 767px) and (orientation: portrait) {
          .about-future {
            flex-direction: column;
          }

          .about-future-image,
          .about-future-copy {
            width: 100%;
          }

          .about-future-image {
            height: 600px;
          }

          .about-future-copy {
            padding: 40px 31px 58px;
          }

          .about-future-copy-inner {
            margin: 0;
            padding: 0;
          }

          .about-future-title {
            margin-bottom: 40px;
            font-size: 28px;
            line-height: 32px;
          }

          .about-future-paragraphs {
            gap: 32px;
            font-size: 16px;
            line-height: 25px;
          }
        }

        @media (max-width: 991px) and (max-height: 599px) and (orientation: landscape) {
          .about-future {
            min-height: 0;
            flex-direction: column;
          }

          .about-future-image,
          .about-future-copy {
            width: 100%;
          }

          .about-future-image {
            height: 420px;
          }

          .about-future-copy {
            padding: 36px 42px 48px;
          }

          .about-future-title {
            margin-bottom: 32px;
            font-size: 28px;
            line-height: 32px;
          }

          .about-future-paragraphs {
            gap: 24px;
            font-size: 16px;
            line-height: 25px;
          }
        }
      `}</style>
      {/* Image Column */}
      <div className="about-future-image relative w-full h-[320px] md:h-[750px] md:w-1/2">
        <img
          src={futureImg}
          alt="Dorot Gardens frozen seasoning products in a freezer"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>

      {/* Text Column */}
      <div className="about-future-copy w-full md:w-1/2 bg-[#cc4aa7] flex flex-col justify-center px-8 py-8 md:px-12 lg:px-16 text-white">
        <div className="about-future-copy-inner max-w-[560px] mx-auto md:mx-0 md:pl-2">
          <h2
            className="about-future-title mb-6 text-3xl lg:text-[36px] font-bold leading-tight"
            style={{ fontFamily: '"gelica", serif' }}
          >
            Our plans for the years to come...
          </h2>

          <div
            className="about-future-paragraphs flex flex-col gap-8 text-[18px] lg:text-[20px] leading-tight font-semibold opacity-95"
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
