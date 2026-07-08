import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductsHero from '../components/products/ProductsHero';
import ProductsIntro from '../components/products/ProductsIntro';
import ProductsGrid from '../components/products/ProductsGrid';
import ProductSlider from '../components/products/ProductsSlider';
import FindStore from '../components/FindStore';
import RecipeSection from '../components/RecipeSection';

const ProductsPage = () => {
    return (
        <>
            <Header />
            <main>
                <ProductsHero />
                <ProductsIntro />
                <ProductsGrid />
                <ProductSlider />
                <FindStore variant="purple" />
                <RecipeSection />
            </main>
            <Footer />
        </>
    );
};

export default ProductsPage;
