import React, { useState } from "react";
import '../css/ProductsSection.css';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: "Café Premium Blend",
      description: "Uma mistura exclusiva de grãos selecionados, com sabor intenso e aroma inconfundível. Perfeito para quem busca qualidade superior.",
      price: "R$ 24,90",
      imageClass: "coffee-1",
      imageText: "Café Premium",
      category: "premium",
      origin: "Brasil",
      roast: "Médio",
      weight: "250g"
    },
    {
      id: 2,
      name: "Café Orgânico",
      description: "Cultivado sem agrotóxicos, preservando o sabor natural e os benefícios para a saúde. Certificado orgânico.",
      price: "R$ 32,90",
      imageClass: "coffee-2",
      imageText: "Café Orgânico",
      category: "organic",
      origin: "Colômbia",
      roast: "Claro",
      weight: "250g"
    },
    {
      id: 3,
      name: "Café Especial",
      description: "Grãos de alta qualidade, torrados artesanalmente para uma experiência única. Notas de chocolate e caramelo.",
      price: "R$ 45,90",
      imageClass: "coffee-3",
      imageText: "Café Especial",
      category: "specialty",
      origin: "Etiópia",
      roast: "Escuro",
      weight: "250g"
    },
    {
      id: 4,
      name: "Café Descafeinado",
      description: "Todo o sabor do café sem a cafeína. Processo natural que preserva o aroma e sabor originais.",
      price: "R$ 28,90",
      imageClass: "coffee-1",
      imageText: "Descafeinado",
      category: "decaf",
      origin: "Brasil",
      roast: "Médio",
      weight: "250g"
    },
    {
      id: 5,
      name: "Café Expresso",
      description: "Blend especial para máquinas de expresso. Corpo encorpado e crema perfeita.",
      price: "R$ 35,90",
      imageClass: "coffee-2",
      imageText: "Expresso",
      category: "espresso",
      origin: "Itália",
      roast: "Escuro",
      weight: "500g"
    },
    {
      id: 6,
      name: "Café Gourmet",
      description: "Seleção premium de grãos raros. Uma experiência única para os verdadeiros amantes do café.",
      price: "R$ 65,90",
      imageClass: "coffee-3",
      imageText: "Gourmet",
      category: "gourmet",
      origin: "Jamaica",
      roast: "Médio",
      weight: "200g"
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'premium', name: 'Premium' },
    { id: 'organic', name: 'Orgânico' },
    { id: 'specialty', name: 'Especial' },
    { id: 'decaf', name: 'Descafeinado' },
    { id: 'espresso', name: 'Expresso' },
    { id: 'gourmet', name: 'Gourmet' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="products-section">
      <div className="container">
        <h2 className="section-title">Nossos Produtos</h2>
        
        {/* Filtros de categoria */}
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="products-grid" role="list" aria-label="Lista de produtos de café">
          {filteredProducts.map((product) => (
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
                
                {/* Detalhes do produto */}
                <div className="product-details">
                  <div className="detail-item">
                    <span className="detail-label">Origem:</span>
                    <span className="detail-value">{product.origin}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Torra:</span>
                    <span className="detail-value">{product.roast}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Peso:</span>
                    <span className="detail-value">{product.weight}</span>
                  </div>
                </div>

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
