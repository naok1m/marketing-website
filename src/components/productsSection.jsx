import React from "react";
import '../css/ProductsSection.css'

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      name: "Café Premium Blend",
      description: "Uma mistura exclusiva de grãos selecionados, com sabor intenso e aroma inconfundível.",
      price: "R$ 24,90",
      imageClass: "coffee-1",
      imageText: "Café Premium"
    },
    {
      id: 2,
      name: "Café Orgânico",
      description: "Cultivado sem agrotóxicos, preservando o sabor natural e os benefícios para a saúde.",
      price: "R$ 32,90",
      imageClass: "coffee-2",
      imageText: "Café Orgânico"
    },
    {
      id: 3,
      name: "Café Especial",
      description: "Grãos de alta qualidade, torrados artesanalmente para uma experiência única.",
      price: "R$ 45,90",
      imageClass: "coffee-3",
      imageText: "Café Especial"
    }
  ];

  return (
    <section id="products" className="products-section" role="main" aria-labelledby="products-title">
      <div className="container">
        <h2 id="products-title" className="section-title">Nossos Produtos</h2>
        <div className="products-grid" role="list" aria-label="Lista de produtos de café">
          {products.map((product) => (
            <article 
              key={product.id} 
              className="product-card" 
              role="listitem"
              aria-labelledby={`product-title-${product.id}`}
              aria-describedby={`product-desc-${product.id}`}
            >
              <div className="product-image">
                <div 
                  className={`placeholder-image ${product.imageClass}`}
                  role="img"
                  aria-label={`Imagem representativa do ${product.name}`}
                >
                  <span className="image-text">{product.imageText}</span>
                </div>
              </div>
              <div className="product-info">
                <h3 id={`product-title-${product.id}`}>{product.name}</h3>
                <p id={`product-desc-${product.id}`}>{product.description}</p>
                <button 
                  className="product-price"
                  aria-label={`Comprar ${product.name} por ${product.price}`}
                  onClick={() => alert(`Adicionado ao carrinho: ${product.name} - ${product.price}`)}
                >
                  {product.price}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
