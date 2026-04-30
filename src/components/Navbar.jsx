import logoImg from '../assets/logo.jpeg' 

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-brand-black/90 backdrop-blur-md border-b border-brand-offwhite/10 transition-all duration-300">
      <div className="w-full px-10 h-24 flex items-center justify-between">
        
        <div className="hidden md:flex items-center gap-12">
          <a href="#about" className="text-sm font-medium text-brand-offwhite/60 hover:text-brand-offwhite uppercase tracking-widest transition-colors">Sobre</a>
          <a href="#gallery" className="text-sm font-medium text-brand-offwhite/60 hover:text-brand-offwhite uppercase tracking-widest transition-colors">Portfólio</a>
          <a href="#contact" className="text-sm font-medium text-brand-offwhite/60 hover:text-brand-offwhite uppercase tracking-widest transition-colors">Contato</a>
        </div>

        <div className="flex items-center gap-6 cursor-pointer group">
          <div className="flex flex-col text-right leading-none">
            <span className="text-2xl font-bold tracking-tighter text-brand-offwhite transition-colors">TACIANA</span>
            <span className="text-xs font-light text-brand-offwhite/50 uppercase tracking-[0.3em]">Filmmaker</span>
          </div>
          
          <div className="w-14 h-14 flex items-center justify-center overflow-hidden">
            <img 
              src={logoImg} 
              alt="Logo Taciana" 
              className="w-full h-full object-contain filter grayscale brightness-200" 
            />
          </div>
        </div>

      </div>
    </nav>
  )
}