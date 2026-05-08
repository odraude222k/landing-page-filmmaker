export default function Works() {
  return (
    <section className="py-[120px] px-6 lg:px-14" id="works">
      <div className="flex items-end justify-between mb-20 reveal">
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-mid flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-[1px] before:bg-brand-mid">
            Portfólio
          </p>
          <h2 className="font-display text-[clamp(40px,4vw,64px)] font-light leading-[1.1] tracking-[-0.01em] mt-4">
            Trabalhos<br/><em className="italic font-light">selecionados</em>
          </h2>
        </div>
        <a href="#" className="font-mono text-[11px] tracking-[0.12em] uppercase text-brand-mid flex items-center gap-2 border-b border-brand-border pb-[2px] transition-all hover:text-brand-black hover:gap-3">
          Ver todos <span className="text-sm">→</span>
        </a>
      </div>

      {/* Grelha (Grid) Assimétrica */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        <div className="relative overflow-hidden bg-brand-dark group cursor-none md:col-span-7 aspect-[4/3] md:aspect-[16/10] reveal">
          <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1000&q=80&auto=format" alt="Campanha Horizonte" className="w-full h-full object-cover grayscale-[25%] transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105 group-hover:grayscale-0" />
          <span className="absolute top-5 left-6 font-mono text-[10px] tracking-[0.1em] text-[rgba(245,242,237,0.3)]">01</span>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-8">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-offwhite/60 mb-2">Publicidade · 2024</p>
            <h3 className="font-display text-2xl font-light text-brand-offwhite tracking-[-0.01em]">Campanha <em className="italic">Horizonte</em></h3>
          </div>
        </div>

        <div className="relative overflow-hidden bg-brand-dark group cursor-none md:col-span-5 aspect-[4/3] md:aspect-[4/5] reveal reveal-delay-1">
          <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80&auto=format" alt="Corpo em Trânsito" className="w-full h-full object-cover grayscale-[25%] transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105 group-hover:grayscale-0" />
          <span className="absolute top-5 left-6 font-mono text-[10px] tracking-[0.1em] text-[rgba(245,242,237,0.3)]">02</span>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-8">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-offwhite/60 mb-2">Documentário · 2023</p>
            <h3 className="font-display text-2xl font-light text-brand-offwhite tracking-[-0.01em]"><em className="italic">Corpo</em> em Trânsito</h3>
          </div>
        </div>

        <div className="relative overflow-hidden bg-brand-dark group cursor-none md:col-span-4 aspect-[4/3] md:aspect-[4/5] reveal reveal-delay-2">
          <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=700&q=80&auto=format" alt="Lua Nova" className="w-full h-full object-cover grayscale-[25%] transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105 group-hover:grayscale-0" />
          <span className="absolute top-5 left-6 font-mono text-[10px] tracking-[0.1em] text-[rgba(245,242,237,0.3)]">03</span>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-8">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-offwhite/60 mb-2">Videoclipe · 2024</p>
            <h3 className="font-display text-2xl font-light text-brand-offwhite tracking-[-0.01em]">Lua <em className="italic">Nova</em></h3>
          </div>
        </div>

        <div className="relative overflow-hidden bg-brand-dark group cursor-none md:col-span-8 aspect-[4/3] md:aspect-[16/10] reveal reveal-delay-3">
          <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1000&q=80&auto=format" alt="Ritual" className="w-full h-full object-cover grayscale-[25%] transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105 group-hover:grayscale-0" />
          <span className="absolute top-5 left-6 font-mono text-[10px] tracking-[0.1em] text-[rgba(245,242,237,0.3)]">04</span>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-8">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-offwhite/60 mb-2">Curta-metragem · 2023</p>
            <h3 className="font-display text-2xl font-light text-brand-offwhite tracking-[-0.01em]"><em className="italic">Ritual</em></h3>
          </div>
        </div>

      </div>
    </section>
  );
}