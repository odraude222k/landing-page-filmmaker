export default function Hero() {
  return (
    <section id="home" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-[100px] overflow-hidden">
      
      {/* Lado Esquerdo */}
      <div className="flex flex-col justify-end px-6 lg:px-14 pb-20 relative">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-mid mb-8 flex items-center gap-3 before:content-[''] before:block before:w-8 before:h-[1px] before:bg-brand-mid reveal">
          Filmmaker & Diretora
        </p>
        
        <h1 className="font-display text-[clamp(72px,8vw,120px)] font-light leading-[0.92] tracking-[-0.02em] mb-12 reveal reveal-delay-1">
          Histórias<br/> em <em className="italic font-light">movimento</em>
        </h1>
        
        <p className="font-display text-lg font-light leading-[1.7] text-brand-mid max-w-[380px] mb-12 reveal reveal-delay-2">
          Criando narrativas visuais que conectam marcas e pessoas através da linguagem do cinema.
        </p>
        
        <a href="#works" className="inline-flex items-center gap-4 font-mono text-[11px] tracking-[0.14em] uppercase text-brand-black border-b border-brand-black pb-2 self-start hover:gap-6 transition-all reveal reveal-delay-3">
          Ver portfólio <span className="text-sm">→</span>
        </a>

        {/* Indicador de Scroll */}
        <div className="absolute bottom-10 left-6 lg:left-14 flex items-center gap-3 font-mono text-[10px] tracking-[0.15em] uppercase text-brand-mid reveal reveal-delay-3">
          <div className="w-[1px] h-[60px] bg-brand-border relative overflow-hidden">
            <div className="absolute top-[-100%] left-0 w-full h-full bg-brand-black animate-scroll-line" />
          </div>
          Scroll
        </div>
      </div>

      {/* Lado Direito (Imagem) */}
      <div className="hidden lg:block relative bg-brand-dark group overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&q=80&auto=format" 
          alt="Filmmaker em set" 
          className="w-full h-full object-cover opacity-85 grayscale-[20%] group-hover:scale-105 transition-transform duration-[6000ms]"
        />
      </div>
    </section>
  );
}