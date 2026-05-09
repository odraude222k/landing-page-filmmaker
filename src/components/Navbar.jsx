import { useEffect, useState } from 'react';
import logoImg from '../assets/logo_sem_fundo_preta.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled || menuOpen ? 'bg-brand-offwhite border-b border-brand-border' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between py-7 px-6 lg:px-14">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 relative z-20 group">
          <img src={logoImg} alt="Logo Taciana Ferreira" className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110" />
          <span className="font-display text-lg tracking-[0.08em] text-brand-black uppercase">
            Taciana <span className="italic font-light normal-case">Ferreira 123</span>
          </span>
        </a>

        
        <button 
          className="md:hidden relative z-20 p-2 text-brand-black" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" /> 
            ) : (
              <path d="M4 8h16M4 16h16" /> 
            )}
          </svg>
        </button>

        <ul className={`${menuOpen ? 'flex flex-col absolute top-[80px] left-0 w-full bg-brand-offwhite border-b border-brand-border py-6 px-6 gap-6 shadow-xl' : 'hidden'} md:flex md:static md:flex-row md:gap-10 md:bg-transparent md:border-none md:shadow-none md:p-0 md:w-auto relative z-10 transition-all`}>
          <li><a href="#works" onClick={() => setMenuOpen(false)} className="block font-mono text-[11px] tracking-[0.12em] uppercase text-brand-mid hover:text-brand-black transition-colors">Trabalhos</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)} className="block font-mono text-[11px] tracking-[0.12em] uppercase text-brand-mid hover:text-brand-black transition-colors">Serviços</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)} className="block font-mono text-[11px] tracking-[0.12em] uppercase text-brand-mid hover:text-brand-black transition-colors">Sobre</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)} className="block font-mono text-[11px] tracking-[0.12em] uppercase text-brand-mid hover:text-brand-black transition-colors">Contato</a></li>
        </ul>
        
      </div>
    </nav>
  );
}