export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* 1. Logo e Nome */}
        <div className="flex items-center gap-3 cursor-pointer">
          {/* Aqui depois vamos trocar essa div pela imagem da logo dela */}
          <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-900 font-bold text-xl">
            T
          </div>
          <span className="text-xl font-semibold tracking-wide">
            Taciana <span className="font-light text-zinc-400">Films</span>
          </span>
        </div>

        {/* 2. Links de Navegação (Escondidos no celular, visíveis no PC) */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors">Sobre</a>
          <a href="#gallery" className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors">Portfólio</a>
          <a href="#contact" className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors">Contato</a>
        </div>

        {/* 3. Botão de Ação / Redes */}
        <div className="flex items-center gap-4">
          {/* Link pro Instagram (Placeholder) */}
          <a href="https://instagram.com/taciana" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-100 transition-colors hidden md:block">
            Insta
          </a>
          <a href="#contact" className="bg-zinc-100 text-zinc-900 px-5 py-2 rounded-full text-sm font-bold hover:bg-zinc-300 transition-colors">
            Orçamento
          </a>
        </div>

      </div>
    </nav>
  )
}