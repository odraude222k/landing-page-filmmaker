export default function Marquee() {
  const items = [
    "Documentário", "Publicidade", "Videoclipe", "Curta-metragem", "Branding audiovisual"
  ];

  return (
    <div className="border-y border-brand-border py-5 overflow-hidden bg-brand-black">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Duplicamos a lista para o efeito infinito funcionar perfeitamente */}
        {[...Array(3)].map((_, arrayIndex) => (
          <div key={arrayIndex} className="flex items-center">
            {items.map((item, i) => (
              <div key={i} className="flex items-center">
                <span className="font-thin text-[11px] font-extralight tracking-[0.25em] uppercase text-brand-offwhite px-12 opacity-60">
                  {item}
                </span>
                <span className="text-brand-offwhite opacity-30 px-0 text-[6px]">◆</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}