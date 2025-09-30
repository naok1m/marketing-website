import React from "react";
import '../css/Footer.css';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>My Coffee!</h3>
            <p>Descubra os melhores blends de café do mundo todo.</p>
          </div>
          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <nav aria-label="Links do rodapé">
              <ul>
                <li><a href="#products">Produtos</a></li>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#contact">Contato</a></li>
              </ul>
            </nav>
          </div>
          <div className="footer-section">
            <h4>Contato</h4>
            <p>Email: contato@mycoffee.com</p>
            <p>Telefone: (11) 99999-9999</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 My Coffee. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
