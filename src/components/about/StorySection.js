import React from "react";
import timelineGraphic from "../../images/timeline.png";

const StorySection = () => {
  // Extracted narrative directly from Screenshot 2026-06-24 at 12.16.51 am.jpg
  const historicalMilestones = [
    {
      marker: "The Idea",
      text: "Like all great ideas, the idea of crushed garlic came up as an answer to a clear consumer need: small garlic cloves which consumers simply did not like.",
    },
    {
      marker: "End of 1980s",
      text: "One of the Kibbutz members turned his home into our first experimentation laboratory, and worked on what would, years later, become Dorot Gardens' flagship product: frozen crushed garlic.",
    },
    {
      marker: "1992",
      text: "Our first plant for crushed garlic production was established in Kibbutz Dorot in 1992, in a caravan.",
    },
    {
      marker: "The Future",
      text: "Continuing to pioneer frozen fresh convenience globally with expanding facilities, sustainable agricultural methods, and innovative seasoning selections.",
    },
  ];

  return (
    <section className="w-full bg-[#be82b2] text-[#4d003b] py-16 px-6 sm:px-12 md:py-24 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="block font-sans font-bold text-lg md:text-xl tracking-normal lowcase mb-1 opacity-90">
            from our company's past to our future
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-[44px] leading-tight tracking-tight">
            The Dorot gardens Story So Far...
          </h2>
        </div>

        {/* Desktop View: The Full Visual Asset Timeline Graphic */}
        <div className="hidden md:block w-full relative select-none">
          <img
            src={timelineGraphic}
            alt="Historical progression graphic showing The Idea, End of 1980s, 1992, and The Future milestones"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Mobile View: High-Readability Accessible Layout */}
        <div className="flex md:hidden flex-col gap-8 w-full max-w-md">
          {historicalMilestones.map((milestone, idx) => (
            <div 
              key={idx} 
              className="bg-[#4d003b] text-white p-6 rounded-2xl shadow-lg border-l-4 border-[#be82b2]"
            >
              <h3 className="font-serif font-bold text-xl mb-2 text-[#be82b2]">
                {milestone.marker}
              </h3>
              <p className="font-sans text-sm sm:text-base leading-relaxed opacity-90">
                {milestone.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StorySection;