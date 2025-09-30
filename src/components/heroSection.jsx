import React from "react";
import '../css/HeroSection.css'

export default function HeroSection() {
  return (
    <section className="hero" role="banner" aria-labelledby="hero-title">
      <a href="#products" className="skip-link">Pular para produtos</a>
      <div className="hero-content">
        <h1 id="hero-title">My Coffee!</h1>
        <p>Descubra os melhores blends de café do mundo todo.</p>
        <p>Selecionados por especialistas e entregues na sua porta. Comece sua jornada pelo café perfeito agora.</p>
        <button 
          className="cta-button" 
          aria-describedby="hero-description"
          onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Explorar os blends
        </button>
        <div id="hero-description" className="sr-only">
          Botão para navegar até a seção de produtos
        </div>
      </div>
    </section>
  );
}
