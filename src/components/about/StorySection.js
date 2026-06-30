import React from "react";
import timelineGraphic from "../../images/timeline.png";

const StorySection = () => {
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
    <section className="w-full bg-[#bd7ab3] text-[#720062] py-10 px-6 sm:px-12 md:py-16 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-6 lg:mb-8">
          <span className="block font-semibold text-lg md:text-[24px] tracking-normal lowercase mb-1 opacity-90">
            from our company's past to our future
          </span>
          <h2 className="font-['gelica'] font-bold text-3xl sm:text-4xl lg:text-[38px] leading-tight tracking-tight">
            The Dorot gardens Story So Far...
          </h2>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block w-full relative select-none">
          <img
            src={timelineGraphic}
            alt="Historical progression graphic showing The Idea, End of 1980s, 1992, and The Future milestones"
            className="w-[85%] lg:w-[80%] h-auto object-contain mx-auto"
          />
        </div>

        {/* Mobile View */}
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