import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import aboutBanner from "../../images/abouthero-bg.png";
import logo from "../../images/Dorot_Logo_White.png";
import product1 from "../../images/product-1.png";
import product2 from "../../images/product-2.png";
import product3 from "../../images/product-3.png";
import product4 from "../../images/product-4.png";
import product5 from "../../images/product-5.png";
import product6 from "../../images/product-6.png";
import product7 from "../../images/product-7.png";
import product8 from "../../images/product-8.png";

const AboutHero = () => {
    const products = [
        product1,
        product2,
        product3,
        product4,
        product5,
        product6,
        product7,
        product8,
    ];

    return (
        <section
            className="relative min-h-[90vh] w-full bg-cover bg-center bg-no-repeat pt-24 pb-16 flex flex-col justify-between overflow-hidden"
            style={{ backgroundImage: `url(${aboutBanner})` }}
        >
            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-purple-950/20 pointer/events/none" />

            {/* Main Content Container */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto mb-12">
                {/* Brand Logo */}
                <img 
                    src={logo}
                    alt="Dorot Gardens"
                    className="w-48 md:w-64 lg:w-72 h-auto mb-8 object-contain animate-fade-in"
                />

                {/* Hero Typography */}
                <h1 className="text-white font-serif font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight leading-tight max-w-4xl">
                    Same high quality freshness.
                    <span className="block mt-2">Brand new look.</span>
                </h1>
            </div>

            {/* Product Slider */}
            <div className="relative z-10 w-full mt-auto">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={2.5}
                    loop={true}
                    centredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        480: {
                            slidesPerView: 3.5,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 5.5,
                            spaceBetween: 25,
                        },
                        1024: {
                            slidesPerView: 7.5,
                            spaceBetween: 30,
                        },
                    }}
                    className="w-full !overflow-visible"
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center">
                            <div className="transition-transform duration-300 hover:scale-105 transform translate-y-4 md:translate-y-8">
                                <img 
                                    src={product}
                                    alt={`Dorot Garden Product ${index + 1}`}
                                    className="w-full max-w-[140px] md:max-w-[180px] h-auto object-contain drop-shadow-xl"
                                />
                            </div>
                        </SwiperSlide>    
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default AboutHero;