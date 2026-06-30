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
    <div className="w-full flex flex-col">
      {sections.map((section, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <section
            key={section.id}
            className={`w-full min-h-[85vh] flex flex-col items-stretch overflow-hidden ${
              isReversed ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* Image Column */}
            <div className="relative w-full min-h-[350px] md:w-1/2 md:min-h-auto">
              <img
                src={section.image}
                alt={section.altText}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>

            {/* Text Column */}
            <div className="w-full md:w-1/2 bg-[#cc4aa7] flex flex-col justify-center px-8 py-16 sm:px-10 md:px-12 lg:px-10 xl:px-16 lg:pr-12 xl:pl-16 xl:pr-16 text-white">
              <div className="max-w-xl mx-auto md:mx-0">
                {/* Tagline */}
                <span
                  className="block mb-1 text-lg md:text-2xl font-bold lowercase tracking-normal opacity-95"
                  style={{ fontFamily: '"gelica", serif' }}
                >
                  {section.tagline}
                </span>

                {/* Title */}
                <h2
                  className="mb-8 text-3xl sm:text-4xl lg:text-[38px] font-bold leading-tight tracking-tight"
                  style={{ fontFamily: '"gelica", serif' }}
                >
                  {section.title}
                </h2>

                {/* Paragraphs */}
                <div
                  className="space-y-6 text-[17px] sm:text-[20px] leading-tight font-semibold opacity-90"
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