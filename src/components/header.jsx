export default function Header() {
    return (
      <header className="header">
        <nav className="nav-left">
            <ul className="flex space-x-8">
                <li>
                  <a href="/" className="hover:text-black-400">Home</a>
                </li>
                <li>
                  <a href="/about" className="hover:text-black-400">About</a>
                </li>
                <li>
                  <a href="/howitworks" className="hover:text-black-400">How it works?</a>
                </li>
            </ul>
        </nav>
        
        <h1>my coffee!</h1>
        
        <nav className="nav-right">
            <ul className="flex space-x-6">
                <li>
                  <a href="/buy" className="hover:text-black-400">Buy</a>
                </li>
            </ul>
        </nav>
      </header>
    );
  }