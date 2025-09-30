import React from "react";
import HeroSection from "../components/heroSection";
import ProductsSection from "../components/productsSection";
import '../css/HeroSection.css';
import '../css/ProductsSection.css';

export default function HomePage() {
  return (
    <>
      <div className='container'>
        <HeroSection />
      </div>
      <ProductsSection />
    </>
  );
}
