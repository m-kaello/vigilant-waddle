import React from "react";

const Certifications = () => {
  const certificationList = [
    "ISO 22000 Food Safety Management System",
    "US Food & Drug Administration HACCP",
    "Kosher standards set by the Court of Justice of the Jewish Orthodox Community",
    "Non GMO",
  ];

  return (
    <section id="certifications" className="about-certifications w-full bg-[#720062] text-white py-8 px-6 sm:px-12 md:py-10 md:px-16 lg:px-24 xl:px-32">
      <style>{`
        @media (min-width: 768px) and (max-width: 1279px) {
          .about-certifications {
            padding: 46px 48px;
          }

          .about-certifications-inner {
            max-width: 1120px;
          }

          .about-certifications-heading {
            margin-left: 0;
          }

          .about-certifications-heading h2 {
            font-size: 32px;
            line-height: 36px;
          }

          .about-certifications-list {
            gap: 18px;
          }

          .about-certifications-list p {
            margin: 0;
            font-size: 20px;
            line-height: 26px;
          }
        }

        @media (min-width: 768px) and (max-width: 1279px) and (orientation: portrait) {
          .about-certifications {
            padding: 40px 48px 38px;
          }

          .about-certifications-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 31px;
          }

          .about-certifications-heading,
          .about-certifications-list {
            width: 100%;
          }

          .about-certifications-heading {
            max-width: 560px;
          }

          .about-certifications-list {
            max-width: 610px;
            gap: 16px;
          }

          .about-certifications-heading h2 {
            font-size: 32px;
            line-height: 32px;
          }

          .about-certifications-list p {
            font-size: 18px;
            line-height: 20px;
          }
        }

        @media (min-width: 768px) and (max-width: 1279px) and (orientation: landscape) {
          .about-certifications {
            padding: 40px 46px;
          }

          .about-certifications-inner {
            flex-direction: row;
            align-items: center;
            gap: 56px;
          }

          .about-certifications-heading,
          .about-certifications-list {
            width: 50%;
          }

          .about-certifications-heading h2 {
            font-size: 36px;
            line-height: 32px;
          }

          .about-certifications-list {
            gap: 18px;
          }

          .about-certifications-list p {
            font-size: 24px;
            line-height: 32px;
          }
        }

        @media (max-width: 767px) and (orientation: portrait) {
          .about-certifications {
            padding: 48px 36px 56px;
          }

          .about-certifications-inner {
            gap: 34px;
          }

          .about-certifications-heading {
            width: 100%;
            margin-left: 0;
          }

          .about-certifications-heading h2 {
            font-size: 32px;
            line-height: 32px;
          }

          .about-certifications-list {
            width: 100%;
            gap: 24px;
          }

          .about-certifications-list p {
            margin: 0;
            font-size: 18px;
            line-height: 24px;
          }
        }

        @media (max-width: 991px) and (max-height: 599px) and (orientation: landscape) {
          .about-certifications {
            padding: 32px 36px 38px;
          }

          .about-certifications-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 28px;
          }

          .about-certifications-heading,
          .about-certifications-list {
            width: 100%;
            margin-left: 0;
          }

          .about-certifications-heading h2 {
            font-size: 32px;
            line-height: 32px;
          }

          .about-certifications-list {
            gap: 16px;
          }

          .about-certifications-list p {
            margin: 0;
            font-size: 18px;
            line-height: 24px;
          }
        }
      `}</style>
      <div className="about-certifications-inner max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
        
        {/* Left Column: Heading */}
        <div className="about-certifications-heading w-full md:w-[50%] -ml-16">
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
        <div className="about-certifications-list w-full md:w-[50%] flex flex-col">
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
