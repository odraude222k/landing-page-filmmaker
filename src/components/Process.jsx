export default function Process() {
  return (
    <section className="py-[120px] px-6 lg:px-14">
      <div className="mb-20 reveal">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-mid flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-[1px] before:bg-brand-mid">
          Como trabalho
        </p>
        <h2 className="font-display text-[clamp(40px,4vw,64px)] font-light leading-[1.1] tracking-[-0.01em] mt-4">
          O <em className="italic font-light">processo</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 lg:border-l border-brand-border">
        
        <div className="p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-brand-border relative reveal">
          <div className="font-thin text-[64px] font-extralight text-brand-black opacity-5 leading-none mb-6">01</div>
          <h3 className="font-display text-[22px] font-normal mb-4 tracking-[-0.01em]"><em className="italic font-light">Brief</em> & Conceito</h3>
          <p className="text-[15px] leading-[1.8] text-brand-mid font-light">Mergulho na sua história, entendendo objetivos, público e o que precisa ser dito.</p>
        </div>

        <div className="p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-brand-border relative reveal reveal-delay-1">
          <div className="font-thin text-[64px] font-extralight text-brand-black opacity-5 leading-none mb-6">02</div>
          <h3 className="font-display text-[22px] font-normal mb-4 tracking-[-0.01em]">Pré-<em className="italic font-light">produção</em></h3>
          <p className="text-[15px] leading-[1.8] text-brand-mid font-light">Roteiro, decupagem, casting e planeamento técnico completo.</p>
        </div>

        <div className="p-10 lg:p-12 border-b md:border-b-0 lg:border-r border-brand-border relative reveal reveal-delay-2">
          <div className="font-thin text-[64px] font-extralight text-brand-black opacity-5 leading-none mb-6">03</div>
          <h3 className="font-display text-[22px] font-normal mb-4 tracking-[-0.01em]"><em className="italic font-light">Filmagem</em></h3>
          <p className="text-[15px] leading-[1.8] text-brand-mid font-light">Captação com equipa enxuta e foco total na visão criativa estabelecida.</p>
        </div>

        <div className="p-10 lg:p-12 lg:border-r border-brand-border relative reveal reveal-delay-3">
          <div className="font-thin text-[64px] font-extralight text-brand-black opacity-5 leading-none mb-6">04</div>
          <h3 className="font-display text-[22px] font-normal mb-4 tracking-[-0.01em]">Pós-<em className="italic font-light">produção</em></h3>
          <p className="text-[15px] leading-[1.8] text-brand-mid font-light">Edição, cor e som para entregar um filme que emociona e permanece.</p>
        </div>

      </div>
    </section>
  );
}