import React from "react";

const Certifications = () => {
  const certificationList = [
    "ISO 22000 Food Safety Management System",
    "US Food & Drug Administration HACCP",
    "Kosher standards set by the Court of Justice of the Jewish Orthodox Community",
    "Non GMO",
  ];

  return (
    <section className="w-full bg-[#6d0061] text-white py-16 px-6 sm:px-12 md:py-24 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-16">
        
        {/* Left Column: Heading */}
        <div className="w-full md:w-[45%]">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-[44px] leading-tight tracking-tight">
            Some of our quality standards &amp; certifications
          </h2>
        </div>

        {/* Right Column: Certification List Items */}
        <div className="w-full md:w-[50%] flex flex-col gap-6 md:gap-7">
          {certificationList.map((cert, index) => (
            <p
              key={index}
              className="font-sans font-bold text-lg sm:text-xl lg:text-[22px] leading-snug tracking-tight text-white opacity-95"
            >
              {cert}
            </p>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;