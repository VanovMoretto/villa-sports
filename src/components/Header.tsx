import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      {/* Lado Esquerdo (Desktop) / Centro (Mobile) - Logo */}
      <div className="logo">
        <Link to="/" onClick={closeMenu}>Villa Sports</Link>
      </div>

      {/* Menu Hamburguer (Apenas Mobile) */}
      <button className="mobile-toggle" onClick={toggleMenu}>
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navegação - Centro Direito (Desktop) */}
      <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={closeMenu}>HOME</Link>
        <Link to="/reservas" className="nav-link" onClick={closeMenu}>RESERVAS</Link>
        <Link to="/estrutura" className="nav-link" onClick={closeMenu}>ESTRUTURA</Link>
        <Link to="/cardapio" className="nav-link" onClick={closeMenu}>CARDÁPIO</Link>
        <Link to="/contato" className="nav-link" onClick={closeMenu}>CONTATO</Link>
        <Link to="/quem-somos" className="nav-link" onClick={closeMenu}>QUEM SOMOS</Link>
        
        {/* Destaque para Login/Cadastro */}
        <Link to="/login" className="nav-link" onClick={closeMenu}>LOGIN</Link>
        <Link to="/cadastro" className="nav-link btn-primary" onClick={closeMenu}>CADASTRE-SE</Link>
      </nav>
    </header>
  );
};

export default Header;