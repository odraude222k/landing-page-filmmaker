export default function Services() {
  return (
    <section className="bg-brand-dark text-brand-offwhite py-[120px] px-6 lg:px-14" id="services">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mb-20 items-end">
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-offwhite/40 flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-[1px] before:bg-brand-offwhite/40">O que ofereço</p>
          <h2 className="font-display text-[clamp(40px,4vw,64px)] font-light leading-[1.1] tracking-[-0.01em] mt-4 reveal">
            Do roteiro ao<br/><em className="italic font-light">último corte</em>
          </h2>
        </div>
        <p className="text-[17px] leading-[1.8] text-brand-offwhite/50 font-light lg:justify-self-end max-w-md reveal reveal-delay-1">
          Cada projeto é uma colaboração única. Trabalho em todas as etapas da produção para garantir que a sua visão se torne realidade.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-brand-offwhite/10 border border-brand-offwhite/10">
        
        <div className="bg-brand-dark p-12 hover:bg-brand-offwhite/5 transition-colors duration-400 reveal">
          <p className="font-mono text-[11px] text-brand-offwhite/25 tracking-[0.1em] mb-10">01</p>
          <svg className="w-10 h-10 mb-6 opacity-70" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="8" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="1.2"/>
            <circle cx="20" cy="20" r="5" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M4 14h4M32 14h4" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
          <h3 className="font-display text-3xl font-light text-brand-offwhite mb-4 leading-[1.2]">Direção <em className="italic">Criativa</em></h3>
          <p className="text-[15px] leading-[1.8] text-brand-offwhite/45 font-light">Conceito, storyboard e direção de arte para projetos publicitários e narrativos.</p>
        </div>

        <div className="bg-brand-dark p-12 hover:bg-brand-offwhite/5 transition-colors duration-400 reveal reveal-delay-1">
          <p className="font-mono text-[11px] text-brand-offwhite/25 tracking-[0.1em] mb-10">02</p>
          <svg className="w-10 h-10 mb-6 opacity-70" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 32V12l24 10L8 32z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
          </svg>
          <h3 className="font-display text-3xl font-light text-brand-offwhite mb-4 leading-[1.2]"><em className="italic">Filmagem</em> & Edição</h3>
          <p className="text-[15px] leading-[1.8] text-brand-offwhite/45 font-light">Captação com câmaras de cinema e pós-produção completa com color grading.</p>
        </div>

        <div className="bg-brand-dark p-12 hover:bg-brand-offwhite/5 transition-colors duration-400 reveal reveal-delay-2">
          <p className="font-mono text-[11px] text-brand-offwhite/25 tracking-[0.1em] mb-10">03</p>
          <svg className="w-10 h-10 mb-6 opacity-70" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M20 8v4M20 28v4M8 20h4M28 20h4" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
          <h3 className="font-display text-3xl font-light text-brand-offwhite mb-4 leading-[1.2]">Branding <em className="italic">Audiovisual</em></h3>
          <p className="text-[15px] leading-[1.8] text-brand-offwhite/45 font-light">Identidade em vídeo para marcas que querem comunicar com profundidade.</p>
        </div>

      </div>
    </section>
  );
}