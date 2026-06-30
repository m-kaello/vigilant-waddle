import React from "react";

const Certifications = () => {
  const certificationList = [
    "ISO 22000 Food Safety Management System",
    "US Food & Drug Administration HACCP",
    "Kosher standards set by the Court of Justice of the Jewish Orthodox Community",
    "Non GMO",
  ];

  return (
    <section className="w-full bg-[#720062] text-white py-8 px-6 sm:px-12 md:py-10 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
        
        {/* Left Column: Heading */}
        <div className="w-full md:w-[50%] -ml-16">
          <h2
            className="font-bold text-xl sm:text-4xl lg:text-[36px] leading-[1.1] tracking-normal"
            style={{ fontFamily: '"gelica", serif' }}
          >
            Some of our quality standards
            <br />
            &amp; certifications
          </h2>
        </div>

        {/* Right Column: Certification List Items */}
        <div className="w-full md:w-[50%] flex flex-col">
          {certificationList.map((cert, index) => (
            <p
              key={index}
              className="mb-6 last:mb-0 font-semibold text-base sm:text-lg lg:text-[26px] leading-relaxed tracking-tight text-white opacity-95"
              style={{ fontFamily: '"Goldplay", sans-serif' }}
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