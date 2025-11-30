import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronRight, LogIn } from "lucide-react";
import logoImg from "../assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-header shadow-md h-24 px-6 md:px-12 flex items-center justify-between transition-all">
      <div className="flex items-center">
        <Link to="/" onClick={closeMenu} className="block hover:opacity-90 transition-opacity">
          <img 
            src={logoImg} 
            alt="Villa Sports" 
            className="h-12 md:h-14 w-auto object-contain" 
          />
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-8 ml-auto">
        <NavLink to="/" label="HOME" />
        <NavLink to="/reservas" label="RESERVAS" />
        <NavLink to="/estrutura" label="ESTRUTURA" />
        <NavLink to="/cardapio" label="CARDÁPIO" />
        <NavLink to="/contato" label="CONTATO" />
        <NavLink to="/quem-somos" label="QUEM SOMOS" />

        <div className="flex items-center gap-4 ml-4 border-l border-zinc-700 pl-4">
          <Link
            to="/login"
            className="text-[11px] font-bold uppercase hover:text-primary transition-colors"
          >
            LOGIN
          </Link>
          <Link
            to="/cadastro"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-[11px] font-bold uppercase hover:brightness-110 transition-all shadow-sm"
          >
            CADASTRE-SE
          </Link>
        </div>
      </nav>

      <button
        className="md:hidden text-foreground p-2 -mr-2 relative z-[70] focus:outline-none"
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <div className="relative w-8 h-8 flex items-center justify-center">
          <Menu
            size={28}
            className={`absolute transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
              isMobileMenuOpen
                ? "rotate-180 opacity-0 scale-50"
                : "rotate-0 opacity-100 scale-100"
            }`}
          />
          <X
            size={28}
            className={`absolute transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
              isMobileMenuOpen
                ? "rotate-0 opacity-100 scale-100"
                : "-rotate-180 opacity-0 scale-50"
            }`}
          />
        </div>
      </button>
      <div
        className={`md:hidden fixed inset-0 z-[60] transition-all duration-500 ${
          isMobileMenuOpen ? "visible" : "invisible delay-300"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        ></div>

        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-header shadow-2xl flex flex-col transition-transform duration-500 cubic-bezier(0.19, 1, 0.22, 1) ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-24 flex items-center px-6 border-b border-white/5">
            <span className="text-xs font-bold text-muted uppercase tracking-widest">
              Menu
            </span>
          </div>

          <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-5">
            <MobileNavLink to="/" label="Home" onClick={closeMenu} />
            <MobileNavLink to="/reservas" label="Reservas" onClick={closeMenu} />
            <MobileNavLink to="/estrutura" label="Estrutura" onClick={closeMenu} />
            <MobileNavLink to="/cardapio" label="Cardápio" onClick={closeMenu} />
            <MobileNavLink to="/contato" label="Contato" onClick={closeMenu} />
            <MobileNavLink to="/quem-somos" label="Quem Somos" onClick={closeMenu} />
          </div>

          <div className="p-6 border-t border-white/10 bg-black/20">
            <div className="flex flex-col gap-3">
              <Link
                to="/cadastro"
                onClick={closeMenu}
                className="w-full bg-primary text-white py-3 rounded-lg font-bold text-center text-xs uppercase tracking-wide shadow-lg active:scale-[0.98] transition-transform"
              >
                Cadastre-se agora
              </Link>

              <Link
                to="/login"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 text-zinc-300 hover:text-white py-3 rounded-lg font-semibold text-xs transition-colors border border-white/10 hover:bg-white/5"
              >
                <LogIn size={16} />
                Já tenho conta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, label }: { to: string; label: string }) => (
  <Link
    to={to}
    className="text-[11px] font-bold text-foreground/80 hover:text-primary transition-colors uppercase"
  >
    {label}
  </Link>
);

const MobileNavLink = ({
  to,
  label,
  onClick,
}: {
  to: string;
  label: string;
  onClick: () => void;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className="group flex items-center justify-between text-lg font-bold text-foreground hover:text-primary transition-colors"
  >
    {label}
    <ChevronRight
      className="text-zinc-600 group-hover:text-primary transition-colors"
      size={18}
    />
  </Link>
);

export default Header;