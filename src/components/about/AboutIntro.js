import React from "react";
import { Link } from "gatsby"; // Or 'react-router-dom' depending on your framework

// Import your imagery assets
import introFieldImg from "../../images/abouthero-bg.png"; 
// Update this with your second section's image (e.g., factory, kitchen, or close-up packaging)
import introSecondImg from "../../images/abouthero-bg.png"; 

const AboutIntro = () => {
  // Content array containing structural data for both blocks
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
        "Behind that process and the great-tasting products it creates, the company has grown and expanded well over the years – to the point where today it is the largest supplier of fresh frozen seasoning products in Israel."
      ],
      hasLink: true
    },
    {
      id: 2,
      tagline: "from farm to freezer",
      title: "Our commitment to quality and convenience.",
      image: introSecondImg, // This will be on the right side on desktop
      altText: "Close-up of Dorot Gardens signature seasoning cubes",
      paragraphs: [
        "We control the entire process from seeds to packaging. This allows us to ensure the absolute highest standards of quality safety and consistency across all our product ranges.",
        "By eliminating the peeling, chopping, and short shelf-life of fresh herbs, we bring ultimate convenience to home cooks and professional chefs globally without ever compromising on flavor.",
        "Whether it's crushed garlic, chopped parsley, or glazed onions, our signature frozen pre-portioned trays are ready to elevate any recipe instantly."
      ],
      hasLink: false
    }
  ];

  return (
    <div className="w-full flex flex-col">
      {sections.map((section, index) => {
        // Automatically alternates layout alignment on desktop viewports
        const isReversed = index % 2 !== 0;

        return (
          <section 
            key={section.id} 
            className={`w-full min-h-[85vh] flex flex-col items-stretch overflow-hidden ${
              isReversed ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* Column 1: Image Asset */}
            <div className="w-full md:w-1/2 relative min-h-[350px] md:min-h-auto">
              <img
                src={section.image}
                alt={section.altText}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>

            {/* Column 2: Text Copy Narrative */}
            <div className="w-full md:w-1/2 bg-[#c64497] flex flex-col justify-center px-8 py-16 sm:px-12 md:px-16 lg:px-24 xl:px-32 text-white">
              <div className="max-w-xl mx-auto md:mx-0">
                {/* Subheading */}
                <span className="block font-sans font-medium text-lg md:text-xl lowcase tracking-normal mb-1 opacity-95">
                  {section.tagline}
                </span>

                {/* Main Section Headline */}
                <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-[40px] leading-tight mb-8 tracking-tight">
                  {section.title}
                </h2>

                {/* Iterative Paragraph Elements */}
                <div className="space-y-6 font-sans text-[15px] sm:text-base leading-relaxed opacity-90 font-normal">
                  {section.paragraphs.map((text, pIndex) => (
                    <p key={pIndex}>{text}</p>
                  ))}
                  
                  {/* Dynamic CTA injection matching Screenshot 2026-06-24 at 12.07.02 am.jpg */}
                  {section.hasLink && (
                    <p className="pt-2 font-medium">
                      To learn more about Dorot Gardens’ entire product lineup,{" "}
                      <Link 
                        to="/products" 
                        className="underline hover:text-purple-100 transition-colors duration-200 cursor-pointer"
                      >
                        click this link!
                      </Link>
                    </p>
                  )}
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