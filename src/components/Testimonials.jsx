export default function Testimonials() {
  return (
    <section className="bg-brand-cream py-[120px] px-6 lg:px-14">
      <div className="mb-20">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-mid flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-[1px] before:bg-brand-mid reveal">Clientes</p>
        <h2 className="font-display text-[clamp(40px,4vw,64px)] font-light leading-[1.1] tracking-[-0.01em] mt-4 reveal reveal-delay-1">
          Quem já<br/><em className="italic font-light">viveu isso</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="p-10 lg:p-12 bg-brand-offwhite border border-brand-border relative reveal">
          <p className="font-display text-[22px] font-light leading-[1.6] mb-10 italic tracking-[-0.01em] before:content-['\22'] before:text-[80px] before:leading-[0.7] before:block before:mb-4 before:opacity-15 before:not-italic">
            A Taciana entendeu desde o início o que queríamos comunicar — e entregou muito além das nossas expectativas.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-brand-cream border border-brand-border overflow-hidden shrink-0">
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80&auto=format" alt="Ana Lima" className="w-full h-full object-cover grayscale-[40%]" />
            </div>
            <div>
              <p className="font-display text-[15px] font-normal">Ana Lima</p>
              <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-brand-mid mt-[2px]">Diretora de Marketing, Marca X</p>
            </div>
          </div>
        </div>

        <div className="p-10 lg:p-12 bg-brand-offwhite border border-brand-border relative reveal reveal-delay-1">
          <p className="font-display text-[22px] font-light leading-[1.6] mb-10 italic tracking-[-0.01em] before:content-['\22'] before:text-[80px] before:leading-[0.7] before:block before:mb-4 before:opacity-15 before:not-italic">
            Uma profissional rara — técnica impecável aliada a uma visão artística que transforma qualquer projeto.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-brand-cream border border-brand-border overflow-hidden shrink-0">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format" alt="Carlos Souza" className="w-full h-full object-cover grayscale-[40%]" />
            </div>
            <div>
              <p className="font-display text-[15px] font-normal">Carlos Souza</p>
              <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-brand-mid mt-[2px]">Músico independente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}