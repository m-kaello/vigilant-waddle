import React from "react";

import introFieldImg from "../../images/about-1.jpg";
import introSecondImg from "../../images/about-2.png";

const AboutIntro = () => {
  const sections = [
    {
      id: 1,
      tagline: "always fresh, always available",
      title: "Dorot Gardens products are truly one-of-a-kind!",
      image: introFieldImg,
      altText: "Dorot Gardens pristine green crop fields at sunrise",
      paragraphs: [
        "Dorot Gardens was initially established in 1992, and is owned by Kibbutz Dorot in the southern part of Israel.",
        "The kibbutz has more than 3,500 acres of field crops which are picked, and then immediately chopped, packaged and frozen in a unique fast freeze process. This ensures that they maintain their taste, freshness and nutritive value.",
        "Behind that process and the great-tasting products it creates, the company has grown and expanded well over the years – to the point where today it is the largest supplier of fresh frozen seasoning products in Israel.",
        "To learn more about Dorot Gardens’ entire product lineup, click this link!"
      ]
    },
    {
      id: 2,
      tagline: "keeping fresh using advanced machinery",
      title: "Modern and Automated Production Facility",
      image: introSecondImg,
      altText: "Modern automated production facility with Dorot Gardens processing and packaging machinery",
      paragraphs: [
        "Our production facility is fully automated and equipped with top-of-the-line machinery. The plant operates three different production lines: the unique individual product packaging trays, product jars for private home use, and the larger pails for the food service and industrial markets. All told we can produce about 4,000 trays per hour, and the overall annual turnout reaches several million trays and jars.",
        "At the same time, our R&D department invests considerable time and resources into developing new products, keeping the company in a constant state of growth and moving towards achieving new objectives as they are set."
      ]
    }
  ];

  return (
    <div id="about-intro" className="about-intro w-full flex flex-col">
      <style>{`
        @media (min-width: 768px) and (max-width: 1279px) {
          .about-intro-row {
            min-height: 0;
          }

          .about-intro-image,
          .about-intro-copy {
            width: 50%;
          }

          .about-intro-copy {
            padding: 52px 44px;
          }

          .about-intro-copy-inner {
            max-width: 580px;
          }

          .about-intro-tagline {
            font-size: 22px;
            line-height: 30px;
          }

          .about-intro-title {
            margin-bottom: 30px;
            font-size: 34px;
            line-height: 40px;
          }

          .about-intro-paragraphs {
            gap: 24px;
            font-size: 18px;
            line-height: 24px;
          }
        }

        @media (min-width: 768px) and (max-width: 1279px) and (orientation: portrait) {
          .about-intro-row {
            flex-direction: column;
          }

          .about-intro-row.is-reversed {
            flex-direction: column;
          }

          .about-intro-image,
          .about-intro-copy {
            width: 100%;
          }

          .about-intro-image {
            min-height: 600px;
          }

          .about-intro-copy {
            padding: 40px 31px;
          }

          .about-intro-copy-inner {
            width: 100%;
            max-width: 580px;
            margin: 0 auto;
            text-align: left;
          }

          .about-intro-tagline {
            font-size: 18px;
            line-height: 32px;
          }

          .about-intro-title {
            margin-bottom: 40px;
            font-size: 28px;
            line-height: 28px;
          }

          .about-intro-paragraphs {
            gap: 28px;
            font-size: 16px;
            line-height: 25px;
          }
        }

        @media (min-width: 768px) and (max-width: 1279px) and (orientation: landscape) {
          .about-intro-row {
            min-height: 670px;
          }

          .about-intro-row.is-reversed {
            flex-direction: row-reverse;
          }

          .about-intro-copy {
            padding: 46px 48px;
          }

          .about-intro-title {
            font-size: 36px;
            line-height: 42px;
          }

          .about-intro-paragraphs {
            font-size: 20px;
            line-height: 25px;
          }
        }

        @media (max-width: 767px) and (orientation: portrait) {
          .about-intro-row,
          .about-intro-row.is-reversed {
            min-height: 0;
            flex-direction: column;
          }

          .about-intro-image {
            width: 100%;
            min-height: 600px;
          }

          .about-intro-copy {
            width: 100%;
            padding: 40px 31px 54px;
          }

          .about-intro-copy-inner {
            margin: 0;
          }

          .about-intro-tagline {
            font-size: 18px;
            line-height: 32px;
          }

          .about-intro-title {
            margin-bottom: 40px;
            font-size: 28px;
            line-height: 28px;
          }

          .about-intro-paragraphs {
            gap: 28px;
            font-size: 16px;
            line-height: 25px;
          }
        }

        @media (max-width: 991px) and (max-height: 599px) and (orientation: landscape) {
          .about-intro-row,
          .about-intro-row.is-reversed {
            min-height: 0;
            flex-direction: column;
          }

          .about-intro-image,
          .about-intro-copy {
            width: 100%;
          }

          .about-intro-image {
            min-height: 420px;
          }

          .about-intro-copy {
            padding: 36px 42px 48px;
          }

          .about-intro-tagline {
            font-size: 18px;
            line-height: 30px;
          }

          .about-intro-title {
            margin-bottom: 32px;
            font-size: 28px;
            line-height: 32px;
          }

          .about-intro-paragraphs {
            gap: 24px;
            font-size: 16px;
            line-height: 25px;
          }
        }
      `}</style>
      {sections.map((section, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <section
            key={section.id}
            className={`about-intro-row ${isReversed ? "is-reversed" : ""} w-full min-h-[85vh] flex flex-col items-stretch overflow-hidden ${
              isReversed ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* Image Column */}
            <div className="about-intro-image relative w-full min-h-[350px] md:w-1/2 md:min-h-auto">
              <img
                src={section.image}
                alt={section.altText}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>

            {/* Text Column */}
            <div className="about-intro-copy w-full md:w-1/2 bg-[#cc4aa7] flex flex-col justify-center px-8 py-16 sm:px-10 md:px-12 lg:px-10 xl:px-16 lg:pr-12 xl:pl-16 xl:pr-16 text-white">
              <div className="about-intro-copy-inner max-w-xl mx-auto md:mx-0">
                {/* Tagline */}
                <span
                  className="about-intro-tagline block mb-1 text-lg md:text-2xl font-bold lowercase tracking-normal opacity-95"
                  style={{ fontFamily: '"gelica", serif' }}
                >
                  {section.tagline}
                </span>

                {/* Title */}
                <h2
                  className="about-intro-title mb-8 text-3xl sm:text-4xl lg:text-[38px] font-bold leading-tight tracking-tight"
                  style={{ fontFamily: '"gelica", serif' }}
                >
                  {section.title}
                </h2>

                {/* Paragraphs */}
                <div
                  className="about-intro-paragraphs flex flex-col gap-6 text-[17px] sm:text-[20px] leading-tight font-semibold opacity-90"
                  style={{ fontFamily: '"Goldplay", sans-serif' }}
                >
                  {section.paragraphs.map((text, pIndex) => (
                    <p key={pIndex}>{text}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default AboutIntro;
