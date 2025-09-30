import React, { useState } from "react";
import '../css/ContactPage.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Entre em Contato</h1>
          <p>Estamos aqui para ajudar você a encontrar o café perfeito</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Informações de Contato</h2>
              
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h3>Email</h3>
                  <p>contato@mycoffee.com</p>
                  <p>vendas@mycoffee.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h3>Telefone</h3>
                  <p>(11) 99999-9999</p>
                  <p>(11) 3333-3333</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Endereço</h3>
                  <p>Rua do Café, 123</p>
                  <p>Aldeota - Fortaleza/CE</p>
                  <p>CEP: 01234-567</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div>
                  <h3>Horário de Funcionamento</h3>
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 9h às 15h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h2>Envie sua Mensagem</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nome *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Assunto *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="duvida">Dúvida sobre produtos</option>
                    <option value="pedido">Acompanhamento de pedido</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="reclamacao">Reclamação</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensagem *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Escreva sua mensagem aqui..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Perguntas Frequentes</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Como faço meu pedido?</h3>
              <p>Você pode fazer seu pedido através do nosso site, selecionando os produtos desejados e finalizando a compra.</p>
            </div>
            <div className="faq-item">
              <h3>Qual o prazo de entrega?</h3>
              <p>O prazo de entrega é de 2 a 5 dias úteis para São Paulo e 5 a 10 dias úteis para outras regiões.</p>
            </div>
            <div className="faq-item">
              <h3>Vocês fazem entrega em todo o Brasil?</h3>
              <p>Sim, entregamos em todo o território nacional através dos Correios.</p>
            </div>
            <div className="faq-item">
              <h3>Como armazenar o café?</h3>
              <p>Recomendamos armazenar em local seco, fresco e longe da luz direta. Use um recipiente hermético.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
