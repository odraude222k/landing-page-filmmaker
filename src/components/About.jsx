export default function About() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]" id="about">
      <div className="hidden lg:block relative bg-brand-cream overflow-hidden">
        <img src="https://images.unsplash.com/photo-1581093458791-9d15482442f6?w=800&q=80&auto=format" alt="Taciana filmando" className="w-full h-full object-cover grayscale-[30%] mix-blend-multiply opacity-70" />
        <span className="absolute top-14 right-10 font-thin text-[120px] font-extralight text-brand-black opacity-5 leading-none">02</span>
      </div>
      
      <div className="p-10 lg:p-20 flex flex-col justify-center gap-8 bg-brand-offwhite">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-mid flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-[1px] before:bg-brand-mid reveal">Sobre</p>
        
        <h2 className="font-display text-[clamp(40px,4vw,64px)] font-light leading-[1.1] tracking-[-0.01em] reveal reveal-delay-1">
          Cinema como<br/><em className="italic font-light">forma de pensar</em>
        </h2>
        
        <p className="text-[17px] leading-[1.8] text-brand-mid font-light reveal reveal-delay-2">
          Acredito que o audiovisual é uma das linguagens mais poderosas para contar histórias com verdade. Com base no Brasil, combino técnica apurada com sensibilidade para criar imagens que ficam na memória.
        </p>
        
        <div className="flex flex-wrap gap-12 pt-6 border-t border-brand-border mt-4 reveal reveal-delay-3">
          <div>
            <div className="font-display text-[42px] font-light tracking-[-0.02em] leading-none text-brand-black">60+</div>
            <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-brand-mid mt-2">Projetos</div>
          </div>
          <div>
            <div className="font-display text-[42px] font-light tracking-[-0.02em] leading-none text-brand-black">8</div>
            <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-brand-mid mt-2">Anos de experiência</div>
          </div>
          <div>
            <div className="font-display text-[42px] font-light tracking-[-0.02em] leading-none text-brand-black">12</div>
            <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-brand-mid mt-2">Prémios</div>
          </div>
        </div>
      </div>
    </section>
  );
}