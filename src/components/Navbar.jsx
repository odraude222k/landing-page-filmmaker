import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-7 px-6 lg:px-14 transition-all duration-400 ${scrolled ? 'bg-brand-offwhite border-b border-brand-border' : 'bg-transparent'}`}>
      <a href="#" className="font-display text-lg tracking-[0.08em] text-brand-black relative z-10 uppercase">
        Taciana <span className="italic font-light normal-case">Oliveira</span>
      </a>
      
      <ul className="hidden md:flex gap-10 relative z-10">
        <li><a href="#works" className="font-mono text-[11px] tracking-[0.12em] uppercase text-brand-mid hover:text-brand-black transition-colors">Trabalhos</a></li>
        <li><a href="#services" className="font-mono text-[11px] tracking-[0.12em] uppercase text-brand-mid hover:text-brand-black transition-colors">Serviços</a></li>
        <li><a href="#about" className="font-mono text-[11px] tracking-[0.12em] uppercase text-brand-mid hover:text-brand-black transition-colors">Sobre</a></li>
        <li><a href="#contact" className="font-mono text-[11px] tracking-[0.12em] uppercase text-brand-mid hover:text-brand-black transition-colors">Contato</a></li>
      </ul>
    </nav>
  );
}