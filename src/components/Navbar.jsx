export default function Navbar() {
  return (
    // Removendo limites: a 'nav' já é w-full. 
    // O 'px-10' garante um pequeno respiro nas bordas pra não encostar na tela.
    <nav className="fixed w-full top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 transition-all duration-300">
      <div className="w-full px-10 h-24 flex items-center justify-between">
        
        {/* LADO ESQUERDO: Navegação */}
        <div className="hidden md:flex items-center gap-12">
          <a href="#about" className="text-sm font-medium text-zinc-400 hover:text-zinc-100 uppercase tracking-widest transition-colors">Sobre</a>
          <a href="#gallery" className="text-sm font-medium text-zinc-400 hover:text-zinc-100 uppercase tracking-widest transition-colors">Portfólio</a>
          <a href="#contact" className="text-sm font-medium text-zinc-400 hover:text-zinc-100 uppercase tracking-widest transition-colors">Contato</a>
        </div>

        {/* LADO DIREITO: Nome e Logo */}
        <div className="flex items-center gap-6 cursor-pointer">
          <div className="flex flex-col text-right leading-none">
            <span className="text-2xl font-bold tracking-tighter text-zinc-100">TACIANA</span>
            <span className="text-xs font-light text-zinc-500 uppercase tracking-[0.3em]">Filmmaker</span>
          </div>
          
          {/* Logo minimalista */}
          <div className="w-12 h-12 border border-zinc-700 rounded-full flex items-center justify-center text-zinc-100 font-light text-2xl">
            T
          </div>
        </div>

      </div>
    </nav>
  )
}