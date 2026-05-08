export default function Contact() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]" id="contact">
      
      {/* Informações de Contacto */}
      <div className="p-10 lg:p-[120px_72px] flex flex-col justify-center gap-8 bg-brand-offwhite">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-mid flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-[1px] before:bg-brand-mid reveal">Contacto</p>
        
        <h2 className="font-display text-[clamp(48px,5vw,80px)] font-light leading-[1.1] tracking-[-0.02em] reveal reveal-delay-1">
          Vamos criar<br/><em className="italic font-light">algo juntos?</em>
        </h2>
        
        <p className="text-[17px] leading-[1.8] text-brand-mid font-light max-w-[360px] reveal reveal-delay-2">
          Aberta a projetos publicitários, musicais, documentais e colaborações criativas.
        </p>
        
        <div className="flex flex-col gap-4 pt-4 reveal reveal-delay-3">
          {/*
          <a href="mailto:taciana@email.com" className="font-mono text-[12px] tracking-[0.1em] uppercase text-brand-black flex items-center gap-3 transition-all hover:gap-5 before:content-['→'] before:text-[14px] before:text-brand-mid">taciana@email.com</a>
          */}
          <a href="https://www.instagram.com/taciana.dk?igsh=MTk4aXFnZzl5ZWk2dg==" target="_blank" rel="noreferrer" className="font-mono text-[12px] tracking-[0.1em] uppercase text-brand-black flex items-center gap-3 transition-all hover:gap-5 before:content-['→'] before:text-[14px] before:text-brand-mid">@taciana.dk</a>
          <a href="https://wa.me/553588247820?text=Olá%20Taciana,%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20fazer%20um%20orçamento!" target="_blank" className="font-mono text-[12px] tracking-[0.1em] uppercase text-brand-black flex items-center gap-3 transition-all hover:gap-5 before:content-['→'] before:text-[14px] before:text-brand-mid">+55 35 8824-7820</a>
        </div>
      </div>

      <div className="bg-brand-black p-10 lg:p-[120px_72px] flex flex-col justify-center gap-8 cursor-none">
        <h3 className="font-display text-[32px] font-light text-brand-offwhite tracking-[-0.01em] reveal">Envie uma <em className="italic">mensagem</em></h3>
        
        <form className="flex flex-col gap-8 w-full" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2 reveal reveal-delay-1">
            <label className="font-mono text-[10px] tracking-[0.15em] uppercase text-brand-offwhite/40">O seu nome</label>
            <input type="text" placeholder="Maria Silva" className="bg-transparent border-b border-brand-offwhite/15 py-4 font-display text-[17px] font-light text-brand-offwhite outline-none transition-colors focus:border-brand-offwhite/50 placeholder:text-brand-offwhite/20 placeholder:italic" />
          </div>
          
          <div className="flex flex-col gap-2 reveal reveal-delay-1">
            <label className="font-mono text-[10px] tracking-[0.15em] uppercase text-brand-offwhite/40">E-mail</label>
            <input type="email" placeholder="maria@empresa.com" className="bg-transparent border-b border-brand-offwhite/15 py-4 font-display text-[17px] font-light text-brand-offwhite outline-none transition-colors focus:border-brand-offwhite/50 placeholder:text-brand-offwhite/20 placeholder:italic" />
          </div>
          
          <div className="flex flex-col gap-2 reveal reveal-delay-2">
            <label className="font-mono text-[10px] tracking-[0.15em] uppercase text-brand-offwhite/40">Projeto</label>
            <textarea placeholder="Conte um pouco sobre o que tem em mente..." className="bg-transparent border-b border-brand-offwhite/15 py-4 font-display text-[17px] font-light text-brand-offwhite outline-none transition-colors focus:border-brand-offwhite/50 placeholder:text-brand-offwhite/20 placeholder:italic h-[120px] resize-none"></textarea>
          </div>
          
          <button className="inline-flex items-center gap-4 font-mono text-[11px] tracking-[0.14em] uppercase text-brand-offwhite bg-transparent border border-brand-offwhite/30 py-5 px-10 cursor-none transition-all hover:bg-brand-offwhite hover:text-brand-black hover:gap-6 mt-4 self-start reveal reveal-delay-3 after:content-['→'] after:text-[14px]">
            Enviar mensagem
          </button>
        </form>
      </div>

    </section>
  );
}