import React from "react";
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import ProductSlider from "../components/ProductSlider";
import RecipeSection from "../components/RecipeSection";
import FindStore from "../components/FindStore";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <ProductSlider />
        <RecipeSection />
        <FindStore />
      </main>
      
      <Footer />
    </>
  );
}