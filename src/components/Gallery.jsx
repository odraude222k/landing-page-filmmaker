export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-brand-black border-t border-brand-offwhite/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-brand-offwhite uppercase tracking-widest">Portfólio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-brand-black border border-brand-offwhite/10 aspect-square flex items-center justify-center text-brand-offwhite/40 hover:border-brand-offwhite hover:text-brand-offwhite transition-all duration-300 cursor-pointer">Foto/Vídeo 1</div>
          <div className="bg-brand-black border border-brand-offwhite/10 aspect-square flex items-center justify-center text-brand-offwhite/40 hover:border-brand-offwhite hover:text-brand-offwhite transition-all duration-300 cursor-pointer">Foto/Vídeo 2</div>
          <div className="bg-brand-black border border-brand-offwhite/10 aspect-square flex items-center justify-center text-brand-offwhite/40 hover:border-brand-offwhite hover:text-brand-offwhite transition-all duration-300 cursor-pointer">Foto/Vídeo 3</div>
        </div>
      </div>
    </section>
  )
}