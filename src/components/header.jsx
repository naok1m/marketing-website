export default function Header() {
    return (
      <header className="header" role="banner">
        <nav className="nav-left" role="navigation" aria-label="Navegação principal">
            <ul className="flex space-x-8">
                <li>
                  <a href="/" aria-current="page">Início</a>
                </li>
                <li>
                  <a href="#about">Sobre</a>
                </li>
                <li>
                  <a href="#how-it-works">Como Funciona</a>
                </li>
            </ul>
        </nav>
        
        <h1>
          <a href="/" aria-label="My Coffee - Página inicial">
            my coffee!
          </a>
        </h1>
        
        <nav className="nav-right" role="navigation" aria-label="Navegação de compra">
            <ul className="flex space-x-6">
                <li>
                  <a href="#products" className="cta-nav">Comprar</a>
                </li>
            </ul>
        </nav>
      </header>
    );
  }