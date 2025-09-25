import React from "react";
import '../css/ProductsSection.css'

export default function ProductsSection() {
  return (
    <section className="products-section">
      <div className="container">
        <h2 className="section-title">Nossos Produtos</h2>
        <div className="products-grid">
          
          <div className="product-card">
            <div className="product-image">
              <div className="placeholder-image coffee-1">
                <span className="image-text">Café Premium</span>
              </div>
            </div>
            <div className="product-info">
              <h3>Café Premium Blend</h3>
              <p>Uma mistura exclusiva de grãos selecionados, com sabor intenso e aroma inconfundível.</p>
              <div className="product-price">R$ 24,90</div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <div className="placeholder-image coffee-2">
                <span className="image-text">Café Orgânico</span>
              </div>
            </div>
            <div className="product-info">
              <h3>Café Orgânico</h3>
              <p>Cultivado sem agrotóxicos, preservando o sabor natural e os benefícios para a saúde.</p>
              <div className="product-price">R$ 32,90</div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <div className="placeholder-image coffee-3">
                <span className="image-text">Café Especial</span>
              </div>
            </div>
            <div className="product-info">
              <h3>Café Especial</h3>
              <p>Grãos de alta qualidade, torrados artesanalmente para uma experiência única.</p>
              <div className="product-price">R$ 45,90</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
