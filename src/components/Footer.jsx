export default function Footer() {
  return (
    <footer className="bg-brand-dark p-12 lg:p-[64px_56px] flex flex-col md:flex-row items-center justify-between gap-8 border-t border-brand-offwhite/10">
      <div className="font-display text-[20px] font-light text-brand-offwhite tracking-[0.05em] uppercase">
        Taciana <em className="italic font-light normal-case">Ferreira</em>
      </div>
      
      <ul className="flex gap-8 list-none">
        <li><a href="#" className="font-mono text-[10px] tracking-[0.15em] uppercase text-brand-offwhite/35 transition-colors hover:text-brand-offwhite">Instagram</a></li>
        <li><a href="#" className="font-mono text-[10px] tracking-[0.15em] uppercase text-brand-offwhite/35 transition-colors hover:text-brand-offwhite">Vimeo</a></li>
        <li><a href="#" className="font-mono text-[10px] tracking-[0.15em] uppercase text-brand-offwhite/35 transition-colors hover:text-brand-offwhite">LinkedIn</a></li>
      </ul>
      
      <p className="font-mono text-[10px] tracking-[0.1em] text-brand-offwhite/20 text-center md:text-left">
        © {new Date().getFullYear()} Taciana Ferreira. Todos os direitos reservados.
      </p>
    </footer>
  );
}