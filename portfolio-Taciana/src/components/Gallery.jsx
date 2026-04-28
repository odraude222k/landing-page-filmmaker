export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Portfólio</h2>
        
        {/* Aqui é o esqueleto do Grid de fotos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-zinc-800 aspect-square rounded-lg flex items-center justify-center text-zinc-500">Foto/Vídeo 1</div>
          <div className="bg-zinc-800 aspect-square rounded-lg flex items-center justify-center text-zinc-500">Foto/Vídeo 2</div>
          <div className="bg-zinc-800 aspect-square rounded-lg flex items-center justify-center text-zinc-500">Foto/Vídeo 3</div>
        </div>
      </div>
    </section>
  )
}