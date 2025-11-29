import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    // Header fixo, z-index alto, fundo definido no config, padding responsivo
    <header className="sticky top-0 z-50 w-full bg-header shadow-md h-20 px-6 md:px-12 flex items-center justify-between">
      
      {/* LOGO - Centralizada no mobile (devido ao layout flex/justify-between), Esquerda no Desktop */}
      {/* No desktop, o justify-between separa Logo e Nav. No mobile, separa Logo e Hamburguer. */}
      {/* Para centralizar perfeitamente no mobile, usamos um truque ou aceitamos left-align. 
          Vamos manter left-align padrão mobile para ser mais comum, ou absolute center se preferir. 
          Vou seguir o padrão robusto: Logo na esquerda, Menu na direita. */}
      
      <div className="flex items-center">
        <Link 
          to="/" 
          onClick={closeMenu} 
          className="text-2xl font-extrabold text-primary uppercase tracking-wide whitespace-nowrap hover:opacity-90 transition-opacity"
        >
          Villa Sports
        </Link>
      </div>

      {/* MENU DESKTOP - Escondido no Mobile (hidden), Flexível no Desktop (md:flex) */}
      <nav className="hidden md:flex items-center gap-8">
        <NavLink to="/" label="HOME" />
        <NavLink to="/reservas" label="RESERVAS" />
        <NavLink to="/estrutura" label="ESTRUTURA" />
        <NavLink to="/cardapio" label="CARDÁPIO" />
        <NavLink to="/contato" label="CONTATO" />
        <NavLink to="/quem-somos" label="QUEM SOMOS" />
        
        <div className="flex items-center gap-4 ml-4 border-l border-zinc-700 pl-4">
            <Link 
                to="/login" 
                className="text-sm font-semibold hover:text-primary transition-colors"
            >
                LOGIN
            </Link>
            <Link 
                to="/cadastro" 
                className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-bold hover:brightness-110 transition-all shadow-sm"
            >
                CADASTRE-SE
            </Link>
        </div>
      </nav>

      {/* BOTÃO MOBILE (HAMBURGUER) - Visível no Mobile, Escondido no Desktop (md:hidden) */}
      <button 
        className="md:hidden text-foreground p-2 -mr-2" 
        onClick={toggleMenu}
        aria-label="Menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* MENU MOBILE (DROPDOWN) */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-header border-t border-zinc-800 flex flex-col p-6 gap-4 shadow-xl md:hidden animate-in slide-in-from-top-2 fade-in duration-200">
            <MobileNavLink to="/" label="HOME" onClick={closeMenu} />
            <MobileNavLink to="/reservas" label="RESERVAS" onClick={closeMenu} />
            <MobileNavLink to="/estrutura" label="ESTRUTURA" onClick={closeMenu} />
            <MobileNavLink to="/cardapio" label="CARDÁPIO" onClick={closeMenu} />
            <MobileNavLink to="/contato" label="CONTATO" onClick={closeMenu} />
            <MobileNavLink to="/quem-somos" label="QUEM SOMOS" onClick={closeMenu} />
            
            <div className="h-px w-full bg-zinc-800 my-2"></div>
            
            <MobileNavLink to="/login" label="LOGIN" onClick={closeMenu} />
            <Link 
                to="/cadastro" 
                onClick={closeMenu}
                className="bg-primary text-center text-primary-foreground py-3 rounded-md font-bold text-lg mt-2 active:scale-95 transition-transform"
            >
                CADASTRE-SE
            </Link>
        </div>
      )}
    </header>
  );
};

// Componente auxiliar para links Desktop (Evita repetição de classes)
const NavLink = ({ to, label }: { to: string, label: string }) => (
    <Link 
        to={to} 
        className="text-sm font-medium hover:text-primary transition-colors tracking-wide"
    >
        {label}
    </Link>
);

// Componente auxiliar para links Mobile (Área de toque maior)
const MobileNavLink = ({ to, label, onClick }: { to: string, label: string, onClick: () => void }) => (
    <Link 
        to={to} 
        onClick={onClick}
        className="text-lg font-medium py-2 border-b border-zinc-800/50 hover:text-primary hover:border-primary/30 transition-colors"
    >
        {label}
    </Link>
);

export default Header;