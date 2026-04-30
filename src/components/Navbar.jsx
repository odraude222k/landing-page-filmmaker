export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-brand-black/90 backdrop-blur-md border-b border-brand-offwhite/10 transition-all duration-300">
      <div className="w-full px-10 h-24 flex items-center justify-between">
        
        {/* LADO ESQUERDO: Navegação */}
        <div className="hidden md:flex items-center gap-12">
          <a href="#about" className="text-sm font-medium text-brand-offwhite/60 hover:text-brand-offwhite uppercase tracking-widest transition-colors">Sobre</a>
          <a href="#gallery" className="text-sm font-medium text-brand-offwhite/60 hover:text-brand-offwhite uppercase tracking-widest transition-colors">Portfólio</a>
          <a href="#contact" className="text-sm font-medium text-brand-offwhite/60 hover:text-brand-offwhite uppercase tracking-widest transition-colors">Contato</a>
        </div>

        {/* LADO DIREITO: Nome e Logo */}
        <div className="flex items-center gap-6 cursor-pointer group">
          <div className="flex flex-col text-right leading-none">
            <span className="text-2xl font-bold tracking-tighter text-brand-offwhite transition-colors">TACIANA</span>
            <span className="text-xs font-light text-brand-offwhite/50 uppercase tracking-[0.3em]">Filmmaker</span>
          </div>
          
          {/* Logo inverte para fundo branco e texto preto ao passar o mouse */}
          <div className="w-12 h-12 border border-brand-offwhite/30 rounded-full flex items-center justify-center text-brand-offwhite font-light text-2xl group-hover:bg-brand-offwhite group-hover:text-brand-black transition-colors">
            T
          </div>
        </div>

      </div>
    </nav>
  )
}