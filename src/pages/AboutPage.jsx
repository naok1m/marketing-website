import React from "react";
import '../css/AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>Sobre a My Coffee</h1>
          <p>Descubra nossa paixão pelo café de qualidade</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Nossa História</h2>
              <p>
                A My Coffee nasceu da paixão por oferecer os melhores grãos de café do mundo. 
                Desde 2020, selecionamos cuidadosamente cada lote, trabalhando diretamente 
                com produtores locais para garantir qualidade e sustentabilidade.
              </p>
              <p>
                Nossa missão é democratizar o acesso ao café de qualidade, oferecendo 
                uma experiência única que vai além do sabor - é sobre conexão, tradição 
                e inovação.
              </p>
            </div>
            <div className="about-image">
              <div className="placeholder-image coffee-about">
                <span className="image-text">Nossa História</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2>Nossos Valores</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Sustentabilidade</h3>
              <p>Trabalhamos apenas com produtores que seguem práticas sustentáveis e justas.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>Qualidade</h3>
              <p>Cada grão é selecionado e testado para garantir a melhor experiência.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Comunidade</h3>
              <p>Valorizamos o comércio justo e apoiamos as comunidades produtoras.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">☕</div>
              <h3>Paixão</h3>
              <p>Nossa paixão pelo café se reflete em cada produto que oferecemos.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Nossa Equipe</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <div className="placeholder-image team-1">
                  <span className="image-text">Fundador</span>
                </div>
              </div>
              <h3>Thiago Naoki</h3>
              <p>Fundador e CEO</p>
              <p>Especialista em café há mais de 5 anos</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
