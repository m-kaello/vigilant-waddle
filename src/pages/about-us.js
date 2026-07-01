import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import AboutHero from "../components/about/AboutHero";
import AboutIntro from "../components/about/AboutIntro";
import Certifications from "../components/about/Certifications";
import StorySection from "../components/about/StorySection";
import FutureSection from "../components/about/FutureSection";
import ViewProducts from "../components/about/ViewProducts";

export default function AboutPage() {
    return (
        <>
            <Header />

            <main>
                <AboutHero />
                <AboutIntro />
                <Certifications />
                <StorySection />
                <FutureSection />   
                <ViewProducts />
            </main>

            <Footer />
        </>
    );
}