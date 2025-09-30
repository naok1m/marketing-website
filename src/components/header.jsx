import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  
  return (
    <header className="header" role="banner">
      <nav className="nav-left" role="navigation" aria-label="Navegação principal">
          <ul className="flex space-x-8">
              <li>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className={location.pathname === '/sobre' ? 'active' : ''}>
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/produtos" className={location.pathname === '/produtos' ? 'active' : ''}>
                  Produtos
                </Link>
              </li>
          </ul>
      </nav>
      
      <h1>
        <Link to="/" aria-label="My Coffee - Página inicial">
          my coffee!
        </Link>
      </h1>
      
      <nav className="nav-right" role="navigation" aria-label="Navegação de compra">
          <ul className="flex space-x-6">
              <li>
                <Link to="/contato" className="cta-nav">Contato</Link>
              </li>
          </ul>
      </nav>
    </header>
  );
}